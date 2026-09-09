# Отчёт для бэкенда: KPI-мониторинг

Фронт сейчас работает на mock-данных в `src/entities/*`. Zustand хранит локальные правки (ячейки, ответственные, сбор, документы). TanStack Query уже подключён: `QueryClientProvider` + хуки в `entities/*/api`. Когда появится API, достаточно заменить `queryFn` в этих хуках на вызовы `apiClient` из `src/shared/api/client.js` (`VITE_API_URL`, по умолчанию `/api`).

## Роли и экраны

Три роли — три префикса URL. Год в пути (`2025` | `2026`), квартал — в UI-стейте (`q1`–`q4`).

### Админ — `/admin/kpi/{year}`

| Экран | URL | Чтение | Запись |
|--------|-----|--------|--------|
| Показатели | `/admin/kpi/{year}` | KPI по блокам КПЭ / ФКПЭ / ДКПЭ / депремирование | Правка фактов, плана, %, целей, методики; назначение ответственных за ввод |
| Отчеты | `/admin/kpi/{year}/reports` | Список отчётов + предпросмотр | Нет (генерация на бэке) |
| Документы | `/admin/kpi/{year}/documents` | Список файлов | Добавить / удалить / сохранить |
| История | `/admin/kpi/{year}/history` | Журнал изменений | Нет (пишется на бэке при save) |
| Сбор данных | `/admin/kpi/{year}/collection` | График сбора | Дата начала, длительность (раб. дни), продление |

### Сотрудник — `/employee/kpi/{year}/{mode}`

`mode`: `month` | `quarter`.

| Экран | URL | Чтение | Запись |
|--------|-----|--------|--------|
| Показатели (месяц) | `.../month` | Свои KPI | Только текущий месяц (`factMonth3` для II кв.) |
| Показатели (квартал) | `.../quarter` | Свои KPI | `factQuarter`, `deviationReason`, кнопка «Отправить на согласование» |
| Документы | `.../{mode}/documents` | Свои файлы | Добавить / удалить / сохранить |
| История | `.../{mode}/history` | Свои правки (месяц — факты месяцев, квартал — факт квартала и причины) | Нет (пишется на бэке при save) |

У сотрудника нет вкладок «Отчеты» и «Сбор данных».

### Мониторинг (просмотр) — `/monitoring/{year}`

Только чтение. Вкладки: Показатели, **Ответы** (`answers` — не путать с админскими **Отчетами** `reports`), Документы, История, Сбор данных. Кроме показателей остальные вкладки — заглушки.

## Общий контекст запроса

Все выборки KPI/отчётов/сбора зависят от:

```json
{
  "year": 2026,
  "quarterId": "q2"
}
```

Месяцы квартала:

- `q1` — январь, февраль, март → `factMonth1..3`
- `q2` — апрель, май, июнь
- `q3` — июль, август, сентябрь
- `q4` — октябрь, ноябрь, декабрь

Текущий месяц для ввода — третий месяц квартала (`factMonth3`).

## Сущности

### KPI (показатель)

Иерархия: родитель `3`, дети `3.1`, `3.2` (`kind: "row" | "subrow"`).

Блоки: `kpe` | `fkpe` | `dkpe` | `depremium`.

Рекомендуемый контракт строки (свести три текущих mock к одному):

```json
{
  "id": "kpe-1",
  "blockId": "kpe",
  "index": "1",
  "kind": "row",
  "parentId": null,
  "title": "…",
  "weight": 15,
  "unit": "тыс. человек",
  "planQuarter": 1250,
  "factMonth1": 410,
  "factMonth2": 430,
  "factMonth3": 445,
  "factQuarter": 1285,
  "deviationReason": "",
  "achievementQuarterAbs": 102.8,
  "achievementQuarterMethod": 101.77,
  "achievementYearAbs": 47.29,
  "achievementYearMethod": 46.26,
  "target2026": 5000,
  "target2027": 5375,
  "target2028": 5750,
  "minValue": 4000,
  "maxValue": 6250,
  "methodology": "…",
  "responsibleExecution": { "id": "user-1", "name": "Шелковый А.Н.", "verified": true },
  "responsibleInput": [{ "id": "user-2", "name": "Илюхина Е.А." }]
}
```

`weight` / цели / методика на подстроках могут быть `null`.

### Документ

```json
{ "id": "doc-1", "name": "Фин. модель когни.pdf", "uploadedAt": "2026-05-30T10:21:13" }
```

На UI дата сейчас в формате `DD.MM.YYYY HH:mm:ss`. На API лучше ISO.

### История изменений

Пишется автоматически при сохранении KPI.

```json
{
  "id": "hist-1",
  "datetime": "2026-05-29T10:10:01",
  "employeeId": "user-10",
  "employee": "Иванова Е.А.",
  "indicatorId": "kpe-1",
  "indicatorName": "…",
  "changedField": "factMonth2",
  "oldValue": "900",
  "newValue": "970"
}
```

### График сбора

Одна запись на квартал + три месяца.

```json
{
  "id": "june",
  "periodType": "month",
  "label": "Июнь",
  "startDate": "2026-06-30",
  "durationDays": 1,
  "extendDate": null
}
```

### Отчёт

```json
{
  "id": "apr-kpe",
  "label": "Отчет апрель КПЭ",
  "available": true,
  "blockId": "kpe",
  "period": "Апрель 2026",
  "kind": "month",
  "hr": false,
  "generatedAt": "2026-05-05T09:14:00"
}
```

`available: false` — период ещё не закрыт, кнопка серая. Детальный макет отчёта на фронте пока предпросмотр по KPI, не финальный PDF-шаблон.

### Справочник людей

Нужен список пользователей для попапа «ответственный за ввод»: `id`, `name` (ФИО с инициалами).

## Предлагаемые эндпоинты

База: `/api`. Все GET принимают `year`, `quarterId`.

| Метод | Путь | Назначение |
|--------|------|------------|
| GET | `/kpi?year=&quarterId=&role=admin\|employee\|monitoring` | Таблица показателей (с блоками) |
| PATCH | `/kpi/{id}` | Правка полей строки (админ / сотрудник в рамках прав) |
| POST | `/kpi/{id}/submit` | Сотрудник: отправить квартал на согласование |
| GET | `/kpi/{id}/responsibles` | Ответственные |
| POST | `/kpi/{id}/responsibles` | Добавить ответственного за ввод `{ userId }` |
| DELETE | `/kpi/{id}/responsibles/{userId}` | Убрать ответственного |
| GET | `/users?role=input\|execution` | Справочник для попапа |
| GET | `/documents?year=` | Список документов |
| POST | `/documents` | multipart upload |
| DELETE | `/documents/{id}` | Удалить |
| GET | `/history?year=&quarterId=` | Журнал |
| GET | `/collection?year=&quarterId=` | График сбора |
| PATCH | `/collection/{id}` | Даты / длительность |
| GET | `/reports?year=&quarterId=` | Список отчётов |
| GET | `/reports/{id}` | Данные для предпросмотра / файл |

Права:

- **employee**: PATCH только `factMonth3` в режиме месяца; `factQuarter` + `deviationReason` в режиме квартала; POST submit.
- **admin**: PATCH любых расчётных/плановых полей KPI, ответственные, документы, график сбора.
- **monitoring**: только GET.

## Что остаётся на фронте (не API)

- Переключатель «Полный вид» (набор колонок)
- Раскрытие аккордеонов блоков
- Предпросмотр отчёта до появления утверждённого макета
- Локальный черновик ячеек до Save (можно заменить на PATCH debounce)

## Query keys (уже на фронте)

См. `src/shared/api/queryKeys.js`: `kpi.admin`, `kpi.employee`, `kpi.monitoring`, `documents.list`, `history.list`, `collection.schedule`, `reports.list`, `reports.detail`.

После подключения бэка хуки в `src/entities/*/api` меняют `queryFn` на `apiClient(...)`. Zustand оставить для черновиков ячеек и UI-флагов.

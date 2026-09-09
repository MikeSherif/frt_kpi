/** @typedef {'row' | 'subrow'} AdminKpiRowKind */

/**
 * @typedef {Object} AdminResponsiblePerson
 * @property {string} name
 * @property {boolean} [verified]
 */

/**
 * @typedef {Object} AdminKpiRow
 * @property {string} id
 * @property {string} index
 * @property {AdminKpiRowKind} kind
 * @property {string} title
 * @property {number|null} weight
 * @property {string} unit
 * @property {number|string|null} planQuarter
 * @property {number|string|null} factMonth1
 * @property {number|string|null} factMonth2
 * @property {number|string|null} factMonth3
 * @property {number|string|null} factQuarter
 * @property {string} deviationReason
 * @property {AdminResponsiblePerson} responsibleExecution
 * @property {AdminResponsiblePerson[]} responsibleInput
 */

function enrichAdminRow(row) {
  const plan = Number(row.planQuarter) || 0
  const fact = Number(row.factQuarter) || 0
  const qAbs = plan ? Number(((fact / plan) * 100).toFixed(2)) : null

  return {
    ...row,
    achievementQuarterAbs: qAbs,
    achievementQuarterMethod: qAbs != null ? Number((qAbs * 0.99).toFixed(2)) : null,
    achievementYearAbs: qAbs != null ? Number((qAbs * 0.46).toFixed(2)) : null,
    achievementYearMethod: qAbs != null ? Number((qAbs * 0.45).toFixed(2)) : null,
    target2026: plan ? plan * 4 : null,
    target2027: plan ? Math.round(plan * 4.3) : null,
    target2028: plan ? Math.round(plan * 4.6) : null,
    minValue: plan ? Math.round(plan * 3.2) : null,
    maxValue: plan ? Math.round(plan * 5) : null,
    methodology:
      row.methodology ??
      'Показатель рассчитывается нарастающим итогом по утверждённой методике. Источник — ведомственная отчётность.',
  }
}

/** @type {Record<string, AdminKpiRow[]>} */
const RAW_ADMIN_KPI_ROWS_BY_BLOCK = {
  kpe: [
    {
      id: 'kpe-1',
      index: '1',
      kind: 'row',
      title:
        'Обеспечение роста совокупного объёма инвестиций в основной капитал, в том числе за счёт средств областного бюджета',
      weight: 15,
      unit: 'тыс. человек',
      planQuarter: 1250,
      factMonth1: 410,
      factMonth2: 430,
      factMonth3: 445,
      factQuarter: 1285,
      deviationReason: '',
      responsibleExecution: { name: 'Шелковый А.Н.', verified: true },
      responsibleInput: [{ name: 'Илюхина Е.А.' }],
    },
    {
      id: 'kpe-2',
      index: '2',
      kind: 'row',
      title:
        'Доля населения, удовлетворённого качеством предоставления государственных и муниципальных услуг',
      weight: 10,
      unit: 'шт.',
      planQuarter: 86,
      factMonth1: 84,
      factMonth2: 85,
      factMonth3: 87,
      factQuarter: 87,
      deviationReason: '',
      responsibleExecution: { name: 'Завертяев А.В.' },
      responsibleInput: [{ name: 'Кузнецова О.Л.' }],
    },
    {
      id: 'kpe-3',
      index: '3',
      kind: 'row',
      title: 'Объём инвестиций в основной капитал организаций',
      weight: 8,
      unit: 'млн руб.',
      planQuarter: 980,
      factMonth1: 310,
      factMonth2: 325,
      factMonth3: 318,
      factQuarter: 953,
      deviationReason: 'Срыв сроков реализации инвестиционных проектов',
      responsibleExecution: { name: 'Николаев Д.А.' },
      responsibleInput: [{ name: 'Орлова Е.К.' }],
    },
    {
      id: 'kpe-3-1',
      index: '3.1',
      kind: 'subrow',
      title: 'в том числе за счёт бюджетных источников',
      weight: null,
      unit: 'млн руб.',
      planQuarter: 560,
      factMonth1: 180,
      factMonth2: 188,
      factMonth3: 184,
      factQuarter: 552,
      deviationReason: '',
      responsibleExecution: { name: 'Николаев Д.А.' },
      responsibleInput: [{ name: 'Орлова Е.К.' }],
    },
    {
      id: 'kpe-3-2',
      index: '3.2',
      kind: 'subrow',
      title: 'в том числе за счёт внебюджетных источников',
      weight: null,
      unit: 'млн руб.',
      planQuarter: 420,
      factMonth1: 130,
      factMonth2: 137,
      factMonth3: 134,
      factQuarter: 401,
      deviationReason: '',
      responsibleExecution: { name: 'Николаев Д.А.' },
      responsibleInput: [{ name: 'Орлова Е.К.' }],
    },
    {
      id: 'kpe-4',
      index: '4',
      kind: 'row',
      title: 'Количество созданных (восстановленных) рабочих мест',
      weight: 6,
      unit: 'шт.',
      planQuarter: 420,
      factMonth1: 138,
      factMonth2: 142,
      factMonth3: 148,
      factQuarter: 428,
      deviationReason: '',
      responsibleExecution: { name: 'Фёдоров В.Г.' },
      responsibleInput: [{ name: 'Морозова Л.П.' }],
    },
  ],
  fkpe: [
    {
      id: 'fkpe-1',
      index: '1',
      kind: 'row',
      title: 'Доля мероприятий федеральных проектов, реализованных в установленные сроки',
      weight: 12,
      unit: '%',
      planQuarter: 92,
      factMonth1: 90,
      factMonth2: 91,
      factMonth3: 93,
      factQuarter: 93,
      deviationReason: '',
      responsibleExecution: { name: 'Белов С.И.' },
      responsibleInput: [{ name: 'Громова Т.В.' }],
    },
  ],
  dkpe: [
    {
      id: 'dkpe-1',
      index: '1',
      kind: 'row',
      title: 'Уровень достижения показателей департамента по ключевым направлениям',
      weight: 20,
      unit: '%',
      planQuarter: 88,
      factMonth1: 86,
      factMonth2: 87,
      factMonth3: 89,
      factQuarter: 89,
      deviationReason: '',
      responsibleExecution: { name: 'Романов К.Е.' },
      responsibleInput: [{ name: 'Смирнова А.Д.' }],
    },
  ],
  depremium: [
    {
      id: 'dep-1',
      index: '1',
      kind: 'row',
      title: 'Снижение числа нарушений сроков предоставления отчётности',
      weight: 5,
      unit: 'шт.',
      planQuarter: 12,
      factMonth1: 4,
      factMonth2: 3,
      factMonth3: 3,
      factQuarter: 10,
      deviationReason: '',
      responsibleExecution: { name: 'Волков Н.П.' },
      responsibleInput: [{ name: 'Лебедева И.С.' }],
    },
  ],
}

/** @type {Record<string, AdminKpiRow[]>} */
export const ADMIN_KPI_ROWS_BY_BLOCK = Object.fromEntries(
  Object.entries(RAW_ADMIN_KPI_ROWS_BY_BLOCK).map(([blockId, rows]) => [
    blockId,
    rows.map(enrichAdminRow),
  ]),
)

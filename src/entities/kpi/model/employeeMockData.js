/** @typedef {'row' | 'subrow'} EmployeeKpiRowKind */

/**
 * @typedef {Object} EmployeeKpiRow
 * @property {string} id
 * @property {string} index
 * @property {EmployeeKpiRowKind} kind
 * @property {string} title
 * @property {string} [note]
 * @property {number|null} weight
 * @property {string} unit
 * @property {number|string|null} planQuarter
 * @property {number|string|null} factMonth1
 * @property {number|string|null} factMonth2
 * @property {number|string|null} factMonth3
 * @property {number|string|null} factQuarter
 * @property {string} deviationReason
 * @property {string} responsibleExecution
 * @property {string} responsibleInput
 */

/** @type {Record<string, EmployeeKpiRow[]>} */
export const EMPLOYEE_KPI_ROWS_BY_BLOCK = {
  kpe: [
    {
      id: 'emp-kpe-1',
      index: '1',
      kind: 'row',
      title:
        'Количество граждан, переселенных из непригодного для проживания жилищного фонда',
      note: 'Примечание: значение вводится нарастающим итогом с начала года',
      weight: 15,
      unit: 'тыс. человек',
      planQuarter: 420,
      factMonth1: 135,
      factMonth2: 142,
      factMonth3: '',
      factQuarter: '',
      deviationReason: '',
      responsibleExecution: 'Шелковый А.Н.',
      responsibleInput: 'Илюхина Е.А.',
    },
    {
      id: 'emp-kpe-2',
      index: '2',
      kind: 'row',
      title: 'Доля граждан, удовлетворённых качеством предоставления услуг',
      weight: 10,
      unit: 'шт.',
      planQuarter: 86,
      factMonth1: 84,
      factMonth2: 85,
      factMonth3: '',
      factQuarter: '',
      deviationReason: '',
      responsibleExecution: 'Завертяев А.В.',
      responsibleInput: 'Кузнецова О.Л.',
    },
    {
      id: 'emp-kpe-3',
      index: '3',
      kind: 'row',
      title: 'Объём инвестиций в основной капитал',
      weight: 8,
      unit: 'млн руб.',
      planQuarter: 980,
      factMonth1: 310,
      factMonth2: 325,
      factMonth3: '',
      factQuarter: '',
      deviationReason: '',
      responsibleExecution: 'Николаев Д.А.',
      responsibleInput: 'Орлова Е.К.',
    },
    {
      id: 'emp-kpe-3-1',
      index: '3.1',
      kind: 'subrow',
      title: 'в том числе за счёт бюджетных источников',
      weight: null,
      unit: 'млн руб.',
      planQuarter: 560,
      factMonth1: 180,
      factMonth2: 188,
      factMonth3: '',
      factQuarter: '',
      deviationReason: '',
      responsibleExecution: 'Николаев Д.А.',
      responsibleInput: 'Орлова Е.К.',
    },
    {
      id: 'emp-kpe-3-2',
      index: '3.2',
      kind: 'subrow',
      title: 'в том числе за счёт внебюджетных источников',
      weight: null,
      unit: 'млн руб.',
      planQuarter: 420,
      factMonth1: 130,
      factMonth2: 137,
      factMonth3: '',
      factQuarter: '',
      deviationReason: '',
      responsibleExecution: 'Николаев Д.А.',
      responsibleInput: 'Орлова Е.К.',
    },
    {
      id: 'emp-kpe-4',
      index: '4',
      kind: 'row',
      title: 'Количество созданных рабочих мест',
      weight: 6,
      unit: 'шт.',
      planQuarter: 320,
      factMonth1: 105,
      factMonth2: 108,
      factMonth3: '',
      factQuarter: '',
      deviationReason: '',
      responsibleExecution: 'Фёдоров В.Г.',
      responsibleInput: 'Морозова Л.П.',
    },
  ],
  fkpe: [
    {
      id: 'emp-fkpe-1',
      index: '1',
      kind: 'row',
      title: 'Доля мероприятий федеральных проектов, реализованных в срок',
      weight: 12,
      unit: '%',
      planQuarter: 92,
      factMonth1: 90,
      factMonth2: 91,
      factMonth3: '',
      factQuarter: '',
      deviationReason: '',
      responsibleExecution: 'Белов С.И.',
      responsibleInput: 'Громова Т.В.',
    },
  ],
  dkpe: [
    {
      id: 'emp-dkpe-1',
      index: '1',
      kind: 'row',
      title: 'Уровень достижения показателей департамента',
      weight: 20,
      unit: '%',
      planQuarter: 88,
      factMonth1: 86,
      factMonth2: 87,
      factMonth3: '',
      factQuarter: '',
      deviationReason: '',
      responsibleExecution: 'Романов К.Е.',
      responsibleInput: 'Смирнова А.Д.',
    },
  ],
  depremium: [
    {
      id: 'emp-dep-1',
      index: '1',
      kind: 'row',
      title: 'Снижение числа нарушений сроков предоставления отчётности',
      weight: 5,
      unit: 'шт.',
      planQuarter: 12,
      factMonth1: 4,
      factMonth2: 3,
      factMonth3: '',
      factQuarter: '',
      deviationReason: '',
      responsibleExecution: 'Волков Н.П.',
      responsibleInput: 'Лебедева И.С.',
    },
  ],
}

/** @typedef {'row' | 'subrow'} KpiRowKind */

/**
 * @typedef {Object} KpiRow
 * @property {string} id
 * @property {string} index
 * @property {KpiRowKind} kind
 * @property {string} title
 * @property {number|null} weight
 * @property {string} unit
 * @property {number|string|null} planQuarter
 * @property {number|string|null} factMonth1
 * @property {number|string|null} factMonth2
 * @property {number|string|null} factMonth3
 * @property {number|string|null} factQuarter
 * @property {string} deviationReason
 * @property {number|null} achievementQuarterAbs
 * @property {number|null} achievementQuarterMethod
 * @property {number|null} achievementYearAbs
 * @property {number|null} achievementYearMethod
 * @property {number|string|null} target2026
 * @property {number|string|null} target2027
 * @property {number|string|null} target2028
 * @property {number|string|null} minValue
 * @property {number|string|null} maxValue
 * @property {string} methodology
 * @property {string} responsibleExecution
 * @property {string} responsibleInput
 */

/** @type {KpiRow[]} */
export const KPI_MOCK_ROWS = [
  {
    id: '1',
    index: '1',
    kind: 'row',
    title:
      'Количество граждан, получивших государственные (муниципальные) услуги в электронной форме',
    weight: 5,
    unit: 'тыс. человек',
    planQuarter: 120,
    factMonth1: 38,
    factMonth2: 41,
    factMonth3: 43,
    factQuarter: 122,
    deviationReason: '',
    achievementQuarterAbs: 101.67,
    achievementQuarterMethod: 100.5,
    achievementYearAbs: 48.2,
    achievementYearMethod: 47.8,
    target2026: 250,
    target2027: 280,
    target2028: 310,
    minValue: 200,
    maxValue: 350,
    methodology:
      'Показатель рассчитывается как сумма обращений за период по реестру услуг. Источник — автоматизированная система учёта.',
    responsibleExecution: 'Иванов И.И.',
    responsibleInput: 'Петрова А.С.',
  },
  {
    id: '2',
    index: '2',
    kind: 'row',
    title: 'Доля услуг, предоставляемых в электронной форме, в общем объёме услуг',
    weight: 3,
    unit: '%',
    planQuarter: 85,
    factMonth1: 84.2,
    factMonth2: 85.1,
    factMonth3: 86,
    factQuarter: 86,
    deviationReason: '',
    achievementQuarterAbs: 101.18,
    achievementQuarterMethod: 100.2,
    achievementYearAbs: 42.5,
    achievementYearMethod: 41.9,
    target2026: 90,
    target2027: 92,
    target2028: 95,
    minValue: 80,
    maxValue: 100,
    methodology:
      'Отношение числа услуг в электронной форме к общему числу услуг, умноженное на 100%.',
    responsibleExecution: 'Сидоров П.В.',
    responsibleInput: 'Козлова М.Н.',
  },
  {
    id: '3',
    index: '3',
    kind: 'row',
    title: 'Объём инвестиций в основной капитал',
    weight: 8,
    unit: 'млн руб.',
    planQuarter: 1500,
    factMonth1: 480,
    factMonth2: 510,
    factMonth3: 490,
    factQuarter: 1480,
    deviationReason: 'Задержка поставки оборудования по объекту № 12',
    achievementQuarterAbs: 98.67,
    achievementQuarterMethod: 97.2,
    achievementYearAbs: 36.4,
    achievementYearMethod: 35.8,
    target2026: 6200,
    target2027: 6800,
    target2028: 7500,
    minValue: 5000,
    maxValue: 8000,
    methodology:
      'Сумма капитальных вложений по форме ф. 1-ИК. Данные предоставляются ежемесячно.',
    responsibleExecution: 'Николаев Д.А.',
    responsibleInput: 'Орлова Е.К.',
  },
  {
    id: '3-1',
    index: '3.1',
    kind: 'subrow',
    title: 'в том числе за счёт бюджетных источников',
    weight: null,
    unit: 'млн руб.',
    planQuarter: 900,
    factMonth1: 290,
    factMonth2: 305,
    factMonth3: 295,
    factQuarter: 890,
    deviationReason: '',
    achievementQuarterAbs: 98.89,
    achievementQuarterMethod: 98.1,
    achievementYearAbs: null,
    achievementYearMethod: null,
    target2026: 3800,
    target2027: 4100,
    target2028: 4400,
    minValue: null,
    maxValue: null,
    methodology: 'Детализация показателя 3 по источникам финансирования.',
    responsibleExecution: 'Николаев Д.А.',
    responsibleInput: 'Орлова Е.К.',
  },
  {
    id: '3-2',
    index: '3.2',
    kind: 'subrow',
    title: 'в том числе за счёт внебюджетных источников',
    weight: null,
    unit: 'млн руб.',
    planQuarter: 600,
    factMonth1: 190,
    factMonth2: 205,
    factMonth3: 195,
    factQuarter: 590,
    deviationReason: '',
    achievementQuarterAbs: 98.33,
    achievementQuarterMethod: 97.5,
    achievementYearAbs: null,
    achievementYearMethod: null,
    target2026: 2400,
    target2027: 2700,
    target2028: 3100,
    minValue: null,
    maxValue: null,
    methodology: 'Детализация показателя 3 по источникам финансирования.',
    responsibleExecution: 'Николаев Д.А.',
    responsibleInput: 'Орлова Е.К.',
  },
  {
    id: '4',
    index: '4',
    kind: 'row',
    title: 'Количество созданных рабочих мест',
    weight: 4,
    unit: 'шт.',
    planQuarter: 320,
    factMonth1: 105,
    factMonth2: 108,
    factMonth3: 112,
    factQuarter: 325,
    deviationReason: '',
    achievementQuarterAbs: 101.56,
    achievementQuarterMethod: 100.8,
    achievementYearAbs: 52.1,
    achievementYearMethod: 51.4,
    target2026: 1250,
    target2027: 1400,
    target2028: 1550,
    minValue: 1000,
    maxValue: 1800,
    methodology:
      'Численность вновь созданных рабочих мест по данным регионального мониторинга занятости.',
    responsibleExecution: 'Фёдоров В.Г.',
    responsibleInput: 'Морозова Л.П.',
  },
]

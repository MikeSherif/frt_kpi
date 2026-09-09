/** @typedef {'month' | 'quarter'} EmployeeHistoryScope */

/**
 * @typedef {Object} HistoryEntry
 * @property {string} id
 * @property {string} datetime
 * @property {string} employee
 * @property {string} indicatorName
 * @property {string} changedField
 * @property {string} oldValue
 * @property {string} newValue
 * @property {EmployeeHistoryScope} [scope]
 */

/** @type {HistoryEntry[]} */
export const EMPLOYEE_HISTORY_ENTRIES = [
  {
    id: 'emp-hist-1',
    datetime: '02.06.2026 11:15:08',
    employee: 'Илюхина Е.А.',
    indicatorName:
      'Количество граждан, переселенных из непригодного для проживания жилищного фонда',
    changedField: 'Факт нарастающим итогом Май',
    oldValue: '135',
    newValue: '142',
    scope: 'month',
  },
  {
    id: 'emp-hist-2',
    datetime: '29.05.2026 16:40:22',
    employee: 'Илюхина Е.А.',
    indicatorName: 'Объём инвестиций в основной капитал',
    changedField: 'Факт нарастающим итогом Апрель',
    oldValue: '300',
    newValue: '310',
    scope: 'month',
  },
  {
    id: 'emp-hist-3',
    datetime: '03.06.2026 09:12:44',
    employee: 'Илюхина Е.А.',
    indicatorName: 'Количество созданных рабочих мест',
    changedField: 'Факт нарастающим итогом Май',
    oldValue: '105',
    newValue: '108',
    scope: 'month',
  },
  {
    id: 'emp-hist-4',
    datetime: '04.06.2026 10:02:17',
    employee: 'Илюхина Е.А.',
    indicatorName:
      'Количество граждан, переселенных из непригодного для проживания жилищного фонда',
    changedField: 'Факт на II квартал (нараст. итогом)',
    oldValue: '—',
    newValue: '420',
    scope: 'quarter',
  },
  {
    id: 'emp-hist-5',
    datetime: '04.06.2026 10:05:51',
    employee: 'Илюхина Е.А.',
    indicatorName: 'Объём инвестиций в основной капитал',
    changedField: 'Причина отклонения',
    oldValue: '—',
    newValue: 'Сдвиг поставки оборудования',
    scope: 'quarter',
  },
  {
    id: 'emp-hist-6',
    datetime: '05.06.2026 14:28:03',
    employee: 'Илюхина Е.А.',
    indicatorName: 'Доля граждан, удовлетворённых качеством предоставления услуг',
    changedField: 'Факт на II квартал (нараст. итогом)',
    oldValue: '85',
    newValue: '86',
    scope: 'quarter',
  },
]

export function getEmployeeHistory(mode = 'month') {
  return EMPLOYEE_HISTORY_ENTRIES.filter((entry) => entry.scope === mode)
}

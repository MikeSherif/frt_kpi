/** @typedef {Object} AdminHistoryEntry
 * @property {string} id
 * @property {string} datetime
 * @property {string} employee
 * @property {string} indicatorName
 * @property {string} changedField
 * @property {string} oldValue
 * @property {string} newValue
 */

/** @type {AdminHistoryEntry[]} */
export const ADMIN_HISTORY_ENTRIES = [
  {
    id: 'hist-1',
    datetime: '29.05.2026 10:10:01',
    employee: 'Иванова Е.А.',
    indicatorName:
      'Количество граждан, переселенных из непригодного для проживания жилищного фонда',
    changedField: 'Факт нарастающим итогом Май',
    oldValue: '900',
    newValue: '970',
  },
  {
    id: 'hist-2',
    datetime: '28.05.2026 16:42:18',
    employee: 'Петров С.В.',
    indicatorName: 'Объём инвестиций в основной капитал',
    changedField: 'Факт нарастающим итогом Апрель',
    oldValue: '310',
    newValue: '325',
  },
  {
    id: 'hist-3',
    datetime: '27.05.2026 11:05:44',
    employee: 'Орлова Е.К.',
    indicatorName: 'Объём инвестиций в основной капитал',
    changedField: 'Причина отклонения',
    oldValue: '—',
    newValue: 'Задержка поставки оборудования по объекту № 12',
  },
  {
    id: 'hist-4',
    datetime: '26.05.2026 09:18:33',
    employee: 'Кузнецова О.Л.',
    indicatorName:
      'Доля граждан, удовлетворённых качеством предоставления услуг',
    changedField: 'Факт на II квартал (нараст. итогом)',
    oldValue: '84',
    newValue: '87',
  },
  {
    id: 'hist-5',
    datetime: '25.05.2026 14:27:09',
    employee: 'Илюхина Е.А.',
    indicatorName: 'Количество созданных рабочих мест',
    changedField: 'Факт нарастающим итогом Май',
    oldValue: '105',
    newValue: '108',
  },
]

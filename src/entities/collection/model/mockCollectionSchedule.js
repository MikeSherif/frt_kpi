/** @typedef {Object} CollectionScheduleRow
 * @property {string} id
 * @property {string} label
 * @property {string|null} startDate
 * @property {string|null} durationDays
 * @property {string|null} extendDate
 */

/** @type {CollectionScheduleRow[]} */
export const COLLECTION_SCHEDULE_MOCK = [
  { id: 'quarter', label: 'Квартал', startDate: null, durationDays: null, extendDate: null },
  { id: 'june', label: 'Июнь', startDate: '30.06.2026', durationDays: '1', extendDate: null },
  { id: 'may', label: 'Май', startDate: '28.05.2026', durationDays: '1', extendDate: null },
  { id: 'april', label: 'Апрель', startDate: '20.04.2026', durationDays: '1', extendDate: null },
]

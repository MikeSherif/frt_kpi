/** @typedef {Object} AdminReport
 * @property {string} id
 * @property {string} label
 * @property {boolean} available
 */

/** @type {AdminReport[]} */
export const ADMIN_REPORTS = [
  { id: 'apr-kpe', label: 'Отчет апрель КПЭ', available: true },
  { id: 'apr-fkpe', label: 'Отчет апрель ФКПЭ', available: true },
  { id: 'may-kpe', label: 'Отчет май КПЭ', available: true },
  { id: 'may-fkpe', label: 'Отчет май ФКПЭ', available: true },
  { id: 'jun-kpe', label: 'Отчет июнь КПЭ', available: false },
  { id: 'jun-fkpe', label: 'Отчет июнь ФКПЭ', available: false },
  { id: 'q2-kpe', label: 'Отчет II квартал КПЭ', available: false },
  { id: 'q2-fkpe', label: 'Отчет II квартал ФКПЭ', available: false },
  { id: 'q2-dkpe', label: 'Отчет II квартал ДКПЭ', available: false },
  { id: 'q2-kpe-hr', label: 'Отчет II квартал КПЭ кадры', available: false },
  { id: 'q2-fkpe-hr', label: 'Отчет II квартал ФКПЭ кадры', available: false },
  { id: 'q2-dkpe-hr', label: 'Отчет II квартал ДКПЭ кадры', available: false },
]

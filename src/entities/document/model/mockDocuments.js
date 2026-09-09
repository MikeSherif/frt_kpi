/** @typedef {Object} AdminDocument
 * @property {string} id
 * @property {string} name
 * @property {string} uploadedAt
 */

/** @type {AdminDocument[]} */
export const ADMIN_DOCUMENTS_MOCK = [
  { id: 'doc-1', name: 'Фин. модель когни.pdf', uploadedAt: '30.05.2026 10:21:13' },
  { id: 'doc-2', name: 'Методика.docx', uploadedAt: '28.05.2026 14:05:42' },
  { id: 'doc-3', name: 'План-график II квартал.xlsx', uploadedAt: '25.05.2026 09:18:07' },
]

/** @type {AdminDocument[]} */
export const EMPLOYEE_DOCUMENTS_MOCK = [
  { id: 'emp-doc-1', name: 'Пояснение к факту_май.pdf', uploadedAt: '02.06.2026 11:04:18' },
  { id: 'emp-doc-2', name: 'Справка_переселение.docx', uploadedAt: '29.05.2026 16:22:41' },
  { id: 'emp-doc-3', name: 'Расчёт_инвестиции.xlsx', uploadedAt: '21.05.2026 09:47:03' },
]

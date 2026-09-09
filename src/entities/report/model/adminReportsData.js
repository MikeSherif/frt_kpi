import { ADMIN_KPI_ROWS_BY_BLOCK } from '@/entities/kpi'

/** @typedef {Object} AdminReport
 * @property {string} id
 * @property {string} label
 * @property {boolean} available
 * @property {'kpe' | 'fkpe' | 'dkpe'} blockId
 * @property {string} period
 * @property {'month' | 'quarter'} kind
 * @property {boolean} [hr]
 * @property {string} generatedAt
 */

/** @type {AdminReport[]} */
export const ADMIN_REPORTS = [
  {
    id: 'apr-kpe',
    label: 'Отчет апрель КПЭ',
    available: true,
    blockId: 'kpe',
    period: 'Апрель 2026',
    kind: 'month',
    generatedAt: '05.05.2026 09:14',
  },
  {
    id: 'apr-fkpe',
    label: 'Отчет апрель ФКПЭ',
    available: true,
    blockId: 'fkpe',
    period: 'Апрель 2026',
    kind: 'month',
    generatedAt: '05.05.2026 09:18',
  },
  {
    id: 'may-kpe',
    label: 'Отчет май КПЭ',
    available: true,
    blockId: 'kpe',
    period: 'Май 2026',
    kind: 'month',
    generatedAt: '03.06.2026 10:02',
  },
  {
    id: 'may-fkpe',
    label: 'Отчет май ФКПЭ',
    available: true,
    blockId: 'fkpe',
    period: 'Май 2026',
    kind: 'month',
    generatedAt: '03.06.2026 10:11',
  },
  {
    id: 'jun-kpe',
    label: 'Отчет июнь КПЭ',
    available: false,
    blockId: 'kpe',
    period: 'Июнь 2026',
    kind: 'month',
    generatedAt: '',
  },
  {
    id: 'jun-fkpe',
    label: 'Отчет июнь ФКПЭ',
    available: false,
    blockId: 'fkpe',
    period: 'Июнь 2026',
    kind: 'month',
    generatedAt: '',
  },
  {
    id: 'q2-kpe',
    label: 'Отчет II квартал КПЭ',
    available: false,
    blockId: 'kpe',
    period: 'II квартал 2026',
    kind: 'quarter',
    generatedAt: '',
  },
  {
    id: 'q2-fkpe',
    label: 'Отчет II квартал ФКПЭ',
    available: false,
    blockId: 'fkpe',
    period: 'II квартал 2026',
    kind: 'quarter',
    generatedAt: '',
  },
  {
    id: 'q2-dkpe',
    label: 'Отчет II квартал ДКПЭ',
    available: false,
    blockId: 'dkpe',
    period: 'II квартал 2026',
    kind: 'quarter',
    generatedAt: '',
  },
  {
    id: 'q2-kpe-hr',
    label: 'Отчет II квартал КПЭ кадры',
    available: false,
    blockId: 'kpe',
    period: 'II квартал 2026',
    kind: 'quarter',
    hr: true,
    generatedAt: '',
  },
  {
    id: 'q2-fkpe-hr',
    label: 'Отчет II квартал ФКПЭ кадры',
    available: false,
    blockId: 'fkpe',
    period: 'II квартал 2026',
    kind: 'quarter',
    hr: true,
    generatedAt: '',
  },
  {
    id: 'q2-dkpe-hr',
    label: 'Отчет II квартал ДКПЭ кадры',
    available: false,
    blockId: 'dkpe',
    period: 'II квартал 2026',
    kind: 'quarter',
    hr: true,
    generatedAt: '',
  },
]

export function getReportById(id) {
  return ADMIN_REPORTS.find((report) => report.id === id) ?? null
}

export function getReportRows(report) {
  if (!report) return []
  return ADMIN_KPI_ROWS_BY_BLOCK[report.blockId] ?? []
}

export function getReportFactField(report) {
  if (!report || report.kind === 'quarter') return 'factQuarter'
  if (report.period.startsWith('Апрель')) return 'factMonth1'
  if (report.period.startsWith('Май')) return 'factMonth2'
  return 'factMonth3'
}

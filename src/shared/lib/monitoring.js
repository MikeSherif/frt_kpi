export const QUARTERS = [
  { id: 'q1', label: 'I квартал', months: ['Январь', 'Февраль', 'Март'] },
  { id: 'q2', label: 'II квартал', months: ['Апрель', 'Май', 'Июнь'] },
  { id: 'q3', label: 'III квартал', months: ['Июль', 'Август', 'Сентябрь'] },
  { id: 'q4', label: 'IV квартал', months: ['Октябрь', 'Ноябрь', 'Декабрь'] },
]

export const MONITORING_SECTIONS = [
  { id: 'indicators', label: 'Показатели', path: 'indicators' },
  { id: 'answers', label: 'Ответы', path: 'answers' },
  { id: 'documents', label: 'Документы', path: 'documents' },
  { id: 'history', label: 'История', path: 'history' },
  { id: 'collection', label: 'Сбор данных', path: 'collection' },
]

export const ADMIN_MONITORING_SECTIONS = [
  { id: 'indicators', label: 'Показатели', path: 'indicators' },
  { id: 'reports', label: 'Отчеты', path: 'reports' },
  { id: 'documents', label: 'Документы', path: 'documents' },
  { id: 'history', label: 'История', path: 'history' },
  { id: 'collection', label: 'Сбор данных', path: 'collection' },
]

export const ADMIN_KPI_BLOCKS = [
  { id: 'kpe', title: 'Ключевые показатели эффективности' },
  { id: 'fkpe', title: 'ФКПЭ' },
  { id: 'dkpe', title: 'ДКПЭ' },
  { id: 'depremium', title: 'Показатели депремирования' },
]

export const EMPLOYEE_KPI_BLOCKS = ADMIN_KPI_BLOCKS

export const EMPLOYEE_MONITORING_SECTIONS = [
  { id: 'indicators', label: 'Показатели', path: 'indicators' },
  { id: 'documents', label: 'Документы', path: 'documents' },
  { id: 'history', label: 'История', path: 'history' },
]

/** @typedef {'month' | 'quarter'} EmployeeViewMode */

export const AVAILABLE_YEARS = [2025, 2026]

export function getQuarterById(quarterId) {
  return QUARTERS.find((q) => q.id === quarterId) ?? QUARTERS[1]
}

export function formatNumber(value) {
  if (value === null || value === undefined || value === '') return '—'
  if (typeof value === 'number') {
    return Number.isInteger(value) ? String(value) : value.toFixed(2).replace('.', ',')
  }
  return String(value)
}

export function formatPercent(value) {
  if (value === null || value === undefined || value === '') return '—'
  const num = typeof value === 'number' ? value : parseFloat(value)
  if (Number.isNaN(num)) return '—'
  return `${num.toFixed(2).replace('.', ',')}%`
}

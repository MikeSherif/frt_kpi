import { getEmployeeHistory } from '@/entities/history'
import { AdminDocumentsPanel } from '@/widgets/admin-documents-panel'
import { AdminHistoryTable } from '@/widgets/admin-history-table'

export function EmployeeSectionContent({ section, viewMode = 'month' }) {
  if (section === 'documents') {
    return <AdminDocumentsPanel scope="employee" />
  }

  if (section === 'history') {
    return <AdminHistoryTable entries={getEmployeeHistory(viewMode)} />
  }

  return null
}

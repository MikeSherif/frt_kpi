import { AdminCollectionPanel } from '@/widgets/admin-collection-panel'
import { AdminDocumentsPanel } from '@/widgets/admin-documents-panel'
import { AdminHistoryTable } from '@/widgets/admin-history-table'
import { AdminReportsGrid } from '@/widgets/admin-reports-grid'
import './AdminSectionContent.scss'

const SECTION_TITLES = {
  reports: 'Отчеты',
  documents: 'Документы',
  history: 'История',
  collection: 'Сбор данных',
}

export function AdminSectionContent({ section }) {
  if (section === 'reports') {
    return <AdminReportsGrid />
  }

  if (section === 'documents') {
    return <AdminDocumentsPanel />
  }

  if (section === 'history') {
    return <AdminHistoryTable />
  }

  if (section === 'collection') {
    return <AdminCollectionPanel />
  }

  const title = SECTION_TITLES[section] ?? section

  return (
    <div className="admin-section-content">
      <p className="admin-section-content__hint">
        Раздел «{title}» — заглушка для админ-интерфейса.
      </p>
    </div>
  )
}

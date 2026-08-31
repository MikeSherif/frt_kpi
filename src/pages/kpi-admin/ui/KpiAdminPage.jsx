import { Navigate, useParams } from 'react-router-dom'
import { ADMIN_MONITORING_SECTIONS } from '@/shared/lib/monitoring'
import { KpiAdminSections } from '@/widgets/kpi-admin-sections'
import { MonitoringHeader } from '@/widgets/monitoring-header'
import { MonitoringToolbar } from '@/widgets/monitoring-toolbar'
import { AdminSectionContent } from './AdminSectionContent'
import './KpiAdminPage.scss'

const ADMIN_BASE_PATH = '/admin/kpi'
const ADMIN_SECTIONS = ['indicators', 'reports', 'documents', 'history', 'collection']

const PAGE_LABELS = {
  indicators: 'Показатель КПЭ Админ',
  reports: 'КПЭ админ отчеты',
  documents: 'КПЭ Админ документы',
  history: 'КПЭ Админ история',
  collection: 'КПЭ Админ сбор',
}

export function KpiAdminPage() {
  const { section } = useParams()
  const isIndicators = !section || section === 'indicators'
  const activeSection = section ?? 'indicators'
  const pageLabel = PAGE_LABELS[activeSection] ?? PAGE_LABELS.indicators

  if (section && section !== 'indicators' && !ADMIN_SECTIONS.includes(section)) {
    return <Navigate to={`${ADMIN_BASE_PATH}/2026`} replace />
  }

  return (
    <div className="kpi-admin-page">
      <MonitoringHeader pageLabel={pageLabel} basePath={ADMIN_BASE_PATH} />
      <MonitoringToolbar
        basePath={ADMIN_BASE_PATH}
        sections={ADMIN_MONITORING_SECTIONS}
      />
      <main className="kpi-admin-page__main">
        {isIndicators ? (
          <KpiAdminSections />
        ) : (
          <AdminSectionContent section={section} />
        )}
      </main>
    </div>
  )
}

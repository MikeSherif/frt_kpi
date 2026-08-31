import { Navigate, useParams } from 'react-router-dom'
import { useMonitoringStore } from '@/entities/monitoring'
import { CollapsibleSection } from '@/shared/ui/CollapsibleSection'
import { KpiTable } from '@/widgets/kpi-table'
import { MonitoringHeader } from '@/widgets/monitoring-header'
import { MonitoringToolbar } from '@/widgets/monitoring-toolbar'
import { MonitoringSectionContent } from '../ui/MonitoringSectionContent'
import './KpiMonitoringPage.scss'

export function KpiMonitoringPage() {
  const { section } = useParams()
  const kpiSectionExpanded = useMonitoringStore((s) => s.kpiSectionExpanded)
  const toggleKpiSection = useMonitoringStore((s) => s.toggleKpiSection)

  if (section && section !== 'indicators' && !['answers', 'documents', 'history', 'collection'].includes(section)) {
    return <Navigate to="/monitoring/2026" replace />
  }

  const isIndicators = !section || section === 'indicators'

  return (
    <div className="kpi-monitoring-page">
      <MonitoringHeader />
      <MonitoringToolbar />
      <main className="kpi-monitoring-page__main">
        {isIndicators ? (
          <CollapsibleSection
            className="kpi-monitoring-page__section"
            title="Ключевые показатели эффективности"
            expanded={kpiSectionExpanded}
            onToggle={toggleKpiSection}
          >
            <KpiTable />
          </CollapsibleSection>
        ) : (
          <MonitoringSectionContent section={section} />
        )}
      </main>
    </div>
  )
}

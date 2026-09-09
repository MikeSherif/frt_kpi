import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useMonitoringStore } from '@/entities/monitoring'
import { MONITORING_SECTIONS } from '@/shared/lib/monitoring'
import { ROUTE_ROOTS } from '@/shared/lib/paths'
import { FullViewToggle } from '@/features/full-view-toggle'
import { MonitoringSectionNav } from '@/features/monitoring-section-nav'
import { QuarterTabs } from '@/features/quarter-tabs'
import './MonitoringToolbar.scss'

export function MonitoringToolbar({
  basePath = ROUTE_ROOTS.monitoring,
  sections = MONITORING_SECTIONS,
  actions = null,
  showFullView = true,
}) {
  const { year } = useParams()
  const setYear = useMonitoringStore((s) => s.setYear)

  useEffect(() => {
    const parsed = Number(year)
    if (!Number.isNaN(parsed)) setYear(parsed)
  }, [year, setYear])

  return (
    <div className="monitoring-toolbar">
      <div className="monitoring-toolbar__row monitoring-toolbar__row--primary">
        <QuarterTabs />
        <div className="monitoring-toolbar__actions">
          {actions}
          {showFullView ? <FullViewToggle /> : null}
        </div>
      </div>
      <div className="monitoring-toolbar__row">
        <MonitoringSectionNav basePath={basePath} sections={sections} />
      </div>
    </div>
  )
}

import { ADMIN_KPI_ROWS_BY_BLOCK } from '@/entities/kpi'
import { useMonitoringStore } from '@/entities/monitoring'
import { ADMIN_KPI_BLOCKS } from '@/shared/lib/monitoring'
import { CollapsibleSection } from '@/shared/ui/CollapsibleSection'
import { KpiAdminTable } from '@/widgets/kpi-admin-table'
import './KpiAdminSections.scss'

export function KpiAdminSections() {
  const adminSectionsExpanded = useMonitoringStore((s) => s.adminSectionsExpanded)
  const toggleAdminSection = useMonitoringStore((s) => s.toggleAdminSection)

  return (
    <div className="kpi-admin-sections">
      {ADMIN_KPI_BLOCKS.map((block) => {
        const expanded = adminSectionsExpanded[block.id]
        const rows = ADMIN_KPI_ROWS_BY_BLOCK[block.id] ?? []

        return (
          <CollapsibleSection
            key={block.id}
            className="kpi-admin-sections__item"
            title={block.title}
            variant="card"
            expanded={expanded}
            onToggle={() => toggleAdminSection(block.id)}
          >
            <KpiAdminTable rows={rows} />
          </CollapsibleSection>
        )
      })}
    </div>
  )
}

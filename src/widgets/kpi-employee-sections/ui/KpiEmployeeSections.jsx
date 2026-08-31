import { EMPLOYEE_KPI_ROWS_BY_BLOCK } from '@/entities/kpi'
import { useEmployeeKpiStore } from '@/entities/employee'
import { EMPLOYEE_KPI_BLOCKS } from '@/shared/lib/monitoring'
import { CollapsibleSection } from '@/shared/ui/CollapsibleSection'
import { KpiEmployeeTable } from '@/widgets/kpi-employee-table'
import './KpiEmployeeSections.scss'

/** @param {{ viewMode: 'month' | 'quarter' }} props */
export function KpiEmployeeSections({ viewMode }) {
  const sectionsExpanded = useEmployeeKpiStore((s) => s.sectionsExpanded)
  const toggleSection = useEmployeeKpiStore((s) => s.toggleSection)

  return (
    <div className="kpi-employee-sections">
      {EMPLOYEE_KPI_BLOCKS.map((block) => {
        const expanded = sectionsExpanded[block.id]
        const rows = EMPLOYEE_KPI_ROWS_BY_BLOCK[block.id] ?? []

        return (
          <CollapsibleSection
            key={block.id}
            className="kpi-employee-sections__item"
            title={block.title}
            variant="card"
            expanded={expanded}
            onToggle={() => toggleSection(block.id)}
          >
            <KpiEmployeeTable rows={rows} viewMode={viewMode} />
          </CollapsibleSection>
        )
      })}
    </div>
  )
}

import { Navigate, useParams } from 'react-router-dom'
import { SubmitForApprovalButton } from '@/features/submit-for-approval'
import { EMPLOYEE_MONITORING_SECTIONS } from '@/shared/lib/monitoring'
import { ROUTE_ROOTS } from '@/shared/lib/paths'
import { KpiEmployeeSections } from '@/widgets/kpi-employee-sections'
import { MonitoringHeader } from '@/widgets/monitoring-header'
import { MonitoringToolbar } from '@/widgets/monitoring-toolbar'
import { EmployeeSectionContent } from './EmployeeSectionContent'
import './KpiEmployeePage.scss'

const EMPLOYEE_SECTIONS = ['indicators', 'documents', 'history']
const EMPLOYEE_BASE_PATH = ROUTE_ROOTS.employee

const PAGE_LABELS = {
  month: 'Показатель КПЭ Сотрудник - месяц',
  quarter: 'Показатель КПЭ Сотрудник - квартал',
}

export function KpiEmployeePage() {
  const { year = '2026', mode, section } = useParams()
  const isIndicators = !section || section === 'indicators'
  const viewMode = mode === 'quarter' ? 'quarter' : 'month'

  if (mode !== 'month' && mode !== 'quarter') {
    return <Navigate to={`${EMPLOYEE_BASE_PATH}/2026/month`} replace />
  }

  if (section && section !== 'indicators' && !EMPLOYEE_SECTIONS.includes(section)) {
    return <Navigate to={`${EMPLOYEE_BASE_PATH}/${year}/${mode}`} replace />
  }

  return (
    <div className="kpi-employee-page">
      <MonitoringHeader pageLabel={PAGE_LABELS[viewMode]} basePath={EMPLOYEE_BASE_PATH} />
      <MonitoringToolbar
        basePath={EMPLOYEE_BASE_PATH}
        sections={EMPLOYEE_MONITORING_SECTIONS}
        actions={viewMode === 'quarter' ? <SubmitForApprovalButton /> : null}
        showFullView={false}
      />
      <main className="kpi-employee-page__main">
        {isIndicators ? (
          <KpiEmployeeSections viewMode={viewMode} />
        ) : (
          <EmployeeSectionContent section={section} />
        )}
      </main>
    </div>
  )
}

import { ADMIN_REPORTS } from '@/entities/report'
import { cn } from '@/shared/lib/classnames'
import './AdminReportsGrid.scss'

export function AdminReportsGrid() {
  return (
    <div className="admin-reports-grid">
      {ADMIN_REPORTS.map((report) => (
        <button
          key={report.id}
          type="button"
          className={cn(
            'admin-reports-grid__item',
            report.available
              ? 'admin-reports-grid__item--available'
              : 'admin-reports-grid__item--disabled',
          )}
          disabled={!report.available}
        >
          {report.label}
        </button>
      ))}
    </div>
  )
}

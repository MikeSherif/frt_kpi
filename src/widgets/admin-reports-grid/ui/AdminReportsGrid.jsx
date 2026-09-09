import { useState } from 'react'
import { ADMIN_REPORTS } from '@/entities/report'
import { AdminReportPreview } from '@/widgets/admin-report-preview'
import { Modal } from '@/shared/ui/Modal'
import { cn } from '@/shared/lib/classnames'
import './AdminReportsGrid.scss'

export function AdminReportsGrid() {
  const [activeReport, setActiveReport] = useState(null)

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
          onClick={() => report.available && setActiveReport(report)}
        >
          {report.label}
        </button>
      ))}

      <Modal
        open={Boolean(activeReport)}
        title={activeReport?.label}
        onClose={() => setActiveReport(null)}
        footer={
          <>
            <button
              type="button"
              className="admin-reports-grid__secondary"
              onClick={() => setActiveReport(null)}
            >
              Закрыть
            </button>
            <button
              type="button"
              className="admin-reports-grid__primary"
              onClick={() => window.print()}
            >
              Печать / PDF
            </button>
          </>
        }
      >
        {activeReport ? <AdminReportPreview report={activeReport} /> : null}
      </Modal>
    </div>
  )
}

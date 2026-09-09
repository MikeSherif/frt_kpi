import { getReportFactField, getReportRows } from '@/entities/report'
import { formatNumber } from '@/shared/lib/monitoring'
import './AdminReportPreview.scss'

const BLOCK_TITLES = {
  kpe: 'Ключевые показатели эффективности',
  fkpe: 'ФКПЭ',
  dkpe: 'ДКПЭ',
}

export function AdminReportPreview({ report }) {
  const rows = getReportRows(report)
  const factField = getReportFactField(report)

  return (
    <article className="admin-report-preview">
      <p className="admin-report-preview__note">
        Детальный макет отчёта ещё не утверждён. Ниже — рабочий предпросмотр по данным
        показателей за выбранный период.
      </p>
      <header className="admin-report-preview__meta">
        <div>
          <span className="admin-report-preview__label">Период</span>
          <strong>{report.period}</strong>
        </div>
        <div>
          <span className="admin-report-preview__label">Блок</span>
          <strong>{BLOCK_TITLES[report.blockId] ?? report.blockId}</strong>
        </div>
        <div>
          <span className="admin-report-preview__label">Сформирован</span>
          <strong>{report.generatedAt || '—'}</strong>
        </div>
        <div>
          <span className="admin-report-preview__label">Статус</span>
          <strong>{report.hr ? 'Кадровый отчёт' : 'Основной отчёт'}</strong>
        </div>
      </header>
      <table className="admin-report-preview__table">
        <thead>
          <tr>
            <th>№</th>
            <th>Показатель</th>
            <th>Ед. изм.</th>
            <th>План</th>
            <th>Факт</th>
            <th>Отклонение</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const fact = row[factField]
            const plan = row.planQuarter
            const hasNumbers = typeof fact === 'number' && typeof plan === 'number'
            const delta = hasNumbers ? fact - plan : null

            return (
              <tr key={row.id} className={row.kind === 'subrow' ? 'admin-report-preview__row--sub' : ''}>
                <td>{row.index}</td>
                <td>{row.title}</td>
                <td>{row.unit}</td>
                <td>{formatNumber(plan)}</td>
                <td>{formatNumber(fact)}</td>
                <td>{delta == null ? '—' : formatNumber(delta)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </article>
  )
}

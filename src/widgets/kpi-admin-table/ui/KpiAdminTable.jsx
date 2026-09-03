import { useMemo } from 'react'
import { useMonitoringStore } from '@/entities/monitoring'
import { formatNumber, getQuarterById } from '@/shared/lib/monitoring'
import { cn } from '@/shared/lib/classnames'
import { AdminEditableCell } from './AdminEditableCell'
import {
  ResponsibleExecutionCell,
  ResponsibleInputCell,
} from './ResponsibleCell'
import './AdminEditableCell.scss'
import './ResponsibleCell.scss'
import './KpiAdminTable.scss'

export function KpiAdminTable({ rows }) {
  const quarterId = useMonitoringStore((s) => s.quarterId)
  const quarter = useMemo(() => getQuarterById(quarterId), [quarterId])
  const [m1, m2, m3] = quarter.months

  return (
    <div className="kpi-admin-table">
      <p className="kpi-admin-table__hint">
        Наведите на значение показателя и нажмите, чтобы исправить данные сотрудника.
      </p>
      <div className="kpi-admin-table__scroll">
        <table className="kpi-admin-table__grid">
          <thead className="kpi-admin-table__head">
            <tr className="kpi-admin-table__head-row">
              <th
                className="kpi-admin-table__th kpi-admin-table__th--sticky kpi-admin-table__th--index"
                rowSpan={2}
              >
                № п/п
              </th>
              <th
                className="kpi-admin-table__th kpi-admin-table__th--sticky kpi-admin-table__th--title"
                rowSpan={2}
              >
                Ключевой показатель эффективности
              </th>
              <th className="kpi-admin-table__th" rowSpan={2}>
                Уд. вес (%)
              </th>
              <th className="kpi-admin-table__th" rowSpan={2}>
                Ед. изм.
              </th>
              <th className="kpi-admin-table__th" rowSpan={2}>
                План на {quarter.label.toLowerCase()} (нараст. итогом)
              </th>
              <th className="kpi-admin-table__th kpi-admin-table__th--group" colSpan={3}>
                Факт нарастающим итогом
              </th>
              <th className="kpi-admin-table__th" rowSpan={2}>
                Факт на {quarter.label.toLowerCase()} (нараст. итогом)
              </th>
              <th className="kpi-admin-table__th kpi-admin-table__th--wide" rowSpan={2}>
                Причина отклонения
              </th>
              <th className="kpi-admin-table__th kpi-admin-table__th--person" rowSpan={2}>
                Ответственный за выполнение
              </th>
              <th className="kpi-admin-table__th kpi-admin-table__th--person" rowSpan={2}>
                Ответственный за ввод
              </th>
            </tr>
            <tr className="kpi-admin-table__head-row kpi-admin-table__head-row--sub">
              <th className="kpi-admin-table__th kpi-admin-table__th--month">{m1}</th>
              <th className="kpi-admin-table__th kpi-admin-table__th--month">{m2}</th>
              <th className="kpi-admin-table__th kpi-admin-table__th--month kpi-admin-table__th--month-current">
                {m3}
              </th>
            </tr>
          </thead>
          <tbody className="kpi-admin-table__body">
            {rows.map((row) => (
              <tr
                key={row.id}
                className={cn(
                  'kpi-admin-table__row',
                  row.kind === 'subrow' && 'kpi-admin-table__row--sub',
                )}
              >
                <td className="kpi-admin-table__td kpi-admin-table__td--sticky kpi-admin-table__td--index">
                  {row.index}
                </td>
                <td className="kpi-admin-table__td kpi-admin-table__td--sticky kpi-admin-table__td--title">
                  {row.title}
                </td>
                <td className="kpi-admin-table__td kpi-admin-table__td--num">
                  {formatNumber(row.weight)}
                </td>
                <td className="kpi-admin-table__td">{row.unit}</td>
                <td className="kpi-admin-table__td kpi-admin-table__td--num">
                  <AdminEditableCell
                    rowId={row.id}
                    field="planQuarter"
                    defaultValue={row.planQuarter}
                    type="number"
                  />
                </td>
                <td className="kpi-admin-table__td kpi-admin-table__td--num">
                  <AdminEditableCell
                    rowId={row.id}
                    field="factMonth1"
                    defaultValue={row.factMonth1}
                    type="number"
                  />
                </td>
                <td className="kpi-admin-table__td kpi-admin-table__td--num">
                  <AdminEditableCell
                    rowId={row.id}
                    field="factMonth2"
                    defaultValue={row.factMonth2}
                    type="number"
                  />
                </td>
                <td className="kpi-admin-table__td kpi-admin-table__td--num kpi-admin-table__td--month-current">
                  <AdminEditableCell
                    rowId={row.id}
                    field="factMonth3"
                    defaultValue={row.factMonth3}
                    type="number"
                  />
                </td>
                <td className="kpi-admin-table__td kpi-admin-table__td--num">
                  <AdminEditableCell
                    rowId={row.id}
                    field="factQuarter"
                    defaultValue={row.factQuarter}
                    type="number"
                  />
                </td>
                <td className="kpi-admin-table__td kpi-admin-table__td--text">
                  <AdminEditableCell
                    rowId={row.id}
                    field="deviationReason"
                    defaultValue={row.deviationReason}
                    type="textarea"
                  />
                </td>
                <td className="kpi-admin-table__td kpi-admin-table__td--person">
                  <ResponsibleExecutionCell person={row.responsibleExecution} />
                </td>
                <td className="kpi-admin-table__td kpi-admin-table__td--person">
                  <ResponsibleInputCell
                    persons={row.responsibleInput}
                    onAdd={() => {}}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

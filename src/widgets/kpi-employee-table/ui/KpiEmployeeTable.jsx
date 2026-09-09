import { useMemo } from 'react'
import { useMonitoringStore } from '@/entities/monitoring'
import { formatNumber, formatPercent, getQuarterById } from '@/shared/lib/monitoring'
import { EditableCell } from '@/shared/ui/EditableCell'
import { cn } from '@/shared/lib/classnames'
import './KpiEmployeeTable.scss'

/**
 * @param {{ rows: import('@/entities/kpi/model/employeeMockData').EmployeeKpiRow[], viewMode: 'month' | 'quarter' }} props
 */
export function KpiEmployeeTable({ rows, viewMode }) {
  const quarterId = useMonitoringStore((s) => s.quarterId)
  const fullView = useMonitoringStore((s) => s.fullView)
  const quarter = useMemo(() => getQuarterById(quarterId), [quarterId])
  const [m1, m2, m3] = quarter.months
  const isMonthView = viewMode === 'month'
  const isQuarterView = viewMode === 'quarter'

  return (
    <div
      className={cn(
        'kpi-employee-table',
        `kpi-employee-table--${viewMode}`,
        fullView && 'kpi-employee-table--full-view',
      )}
    >
      <div className="kpi-employee-table__scroll">
        <table className="kpi-employee-table__grid">
          <thead className="kpi-employee-table__head">
            <tr className="kpi-employee-table__head-row">
              <th
                className="kpi-employee-table__th kpi-employee-table__th--sticky kpi-employee-table__th--index"
                rowSpan={2}
              >
                № п/п
              </th>
              <th
                className="kpi-employee-table__th kpi-employee-table__th--sticky kpi-employee-table__th--title"
                rowSpan={2}
              >
                Ключевой показатель эффективности
              </th>
              <th className="kpi-employee-table__th" rowSpan={2}>
                Уд. вес (%)
              </th>
              <th className="kpi-employee-table__th" rowSpan={2}>
                Ед. изм.
              </th>
              <th className="kpi-employee-table__th" rowSpan={2}>
                План на {quarter.label.toLowerCase()}
              </th>
              <th className="kpi-employee-table__th kpi-employee-table__th--group" colSpan={3}>
                Факт нарастающим итогом
              </th>
              {!isMonthView ? (
                <th
                  className={cn(
                    'kpi-employee-table__th',
                    isQuarterView && 'kpi-employee-table__th--highlight',
                  )}
                  rowSpan={2}
                >
                  Факт на {quarter.label.toLowerCase()} (нараст. итогом)
                </th>
              ) : null}
              {!isMonthView ? (
                <th
                  className={cn(
                    'kpi-employee-table__th kpi-employee-table__th--wide',
                    isQuarterView && 'kpi-employee-table__th--highlight',
                  )}
                  rowSpan={2}
                >
                  Причина отклонения
                </th>
              ) : null}
              {fullView ? (
                <>
                  <th className="kpi-employee-table__th" rowSpan={2}>
                    % достижения квартального плана (абс. цифра)
                  </th>
                  <th className="kpi-employee-table__th" rowSpan={2}>
                    % достижения квартального плана (методика)
                  </th>
                  <th className="kpi-employee-table__th" rowSpan={2}>
                    % достижения годового плана (абс. цифра)
                  </th>
                  <th className="kpi-employee-table__th" rowSpan={2}>
                    % достижения годового плана (методика)
                  </th>
                  <th className="kpi-employee-table__th" rowSpan={2}>
                    Целевое значение на 2026
                  </th>
                  <th className="kpi-employee-table__th" rowSpan={2}>
                    Целевое значение на 2027
                  </th>
                  <th className="kpi-employee-table__th" rowSpan={2}>
                    Целевое значение на 2028
                  </th>
                  <th className="kpi-employee-table__th" rowSpan={2}>
                    Минимальное значение
                  </th>
                  <th className="kpi-employee-table__th" rowSpan={2}>
                    Предельное значение
                  </th>
                  <th
                    className="kpi-employee-table__th kpi-employee-table__th--methodology"
                    rowSpan={2}
                  >
                    Методика
                  </th>
                </>
              ) : null}
              <th className="kpi-employee-table__th kpi-employee-table__th--person" rowSpan={2}>
                Ответственный за выполнение
              </th>
              <th className="kpi-employee-table__th kpi-employee-table__th--person" rowSpan={2}>
                Ответственный за ввод
              </th>
            </tr>
            <tr className="kpi-employee-table__head-row kpi-employee-table__head-row--sub">
              <th className="kpi-employee-table__th kpi-employee-table__th--month">{m1}</th>
              <th className="kpi-employee-table__th kpi-employee-table__th--month">{m2}</th>
              <th
                className={cn(
                  'kpi-employee-table__th kpi-employee-table__th--month',
                  isMonthView && 'kpi-employee-table__th--highlight',
                )}
              >
                {m3}
              </th>
            </tr>
          </thead>
          <tbody className="kpi-employee-table__body">
            {rows.map((row) => (
              <tr
                key={row.id}
                className={cn(
                  'kpi-employee-table__row',
                  row.kind === 'subrow' && 'kpi-employee-table__row--sub',
                )}
              >
                <td className="kpi-employee-table__td kpi-employee-table__td--sticky kpi-employee-table__td--index">
                  {row.index}
                </td>
                <td className="kpi-employee-table__td kpi-employee-table__td--sticky kpi-employee-table__td--title">
                  <span className="kpi-employee-table__title-text">{row.title}</span>
                  {row.note ? (
                    <span className="kpi-employee-table__note">{row.note}</span>
                  ) : null}
                </td>
                <td className="kpi-employee-table__td kpi-employee-table__td--num">
                  {formatNumber(row.weight)}
                </td>
                <td className="kpi-employee-table__td">{row.unit}</td>
                <td className="kpi-employee-table__td kpi-employee-table__td--num">
                  {formatNumber(row.planQuarter)}
                </td>
                <td className="kpi-employee-table__td kpi-employee-table__td--num">
                  {formatNumber(row.factMonth1)}
                </td>
                <td className="kpi-employee-table__td kpi-employee-table__td--num">
                  {formatNumber(row.factMonth2)}
                </td>
                <td
                  className={cn(
                    'kpi-employee-table__td kpi-employee-table__td--num',
                    isMonthView && 'kpi-employee-table__td--highlight',
                  )}
                >
                  {isMonthView ? (
                    <EditableCell
                      rowId={row.id}
                      field="factMonth3"
                      defaultValue={row.factMonth3}
                      viewMode="month"
                      activeMode={viewMode}
                    />
                  ) : (
                    formatNumber(row.factMonth3)
                  )}
                </td>
                {!isMonthView ? (
                  <td
                    className={cn(
                      'kpi-employee-table__td kpi-employee-table__td--num',
                      isQuarterView && 'kpi-employee-table__td--highlight',
                    )}
                  >
                    <EditableCell
                      rowId={row.id}
                      field="factQuarter"
                      defaultValue={row.factQuarter}
                      viewMode="quarter"
                      activeMode={viewMode}
                    />
                  </td>
                ) : null}
                {!isMonthView ? (
                  <td
                    className={cn(
                      'kpi-employee-table__td kpi-employee-table__td--text',
                      isQuarterView && 'kpi-employee-table__td--highlight',
                    )}
                  >
                    <EditableCell
                      rowId={row.id}
                      field="deviationReason"
                      defaultValue={row.deviationReason}
                      viewMode="quarter"
                      activeMode={viewMode}
                      type="textarea"
                    />
                  </td>
                ) : null}
                {fullView ? (
                  <>
                    <td className="kpi-employee-table__td kpi-employee-table__td--num">
                      {formatPercent(row.achievementQuarterAbs)}
                    </td>
                    <td className="kpi-employee-table__td kpi-employee-table__td--num">
                      {formatPercent(row.achievementQuarterMethod)}
                    </td>
                    <td className="kpi-employee-table__td kpi-employee-table__td--num">
                      {formatPercent(row.achievementYearAbs)}
                    </td>
                    <td className="kpi-employee-table__td kpi-employee-table__td--num">
                      {formatPercent(row.achievementYearMethod)}
                    </td>
                    <td className="kpi-employee-table__td kpi-employee-table__td--num">
                      {formatNumber(row.target2026)}
                    </td>
                    <td className="kpi-employee-table__td kpi-employee-table__td--num">
                      {formatNumber(row.target2027)}
                    </td>
                    <td className="kpi-employee-table__td kpi-employee-table__td--num">
                      {formatNumber(row.target2028)}
                    </td>
                    <td className="kpi-employee-table__td kpi-employee-table__td--num">
                      {formatNumber(row.minValue)}
                    </td>
                    <td className="kpi-employee-table__td kpi-employee-table__td--num">
                      {formatNumber(row.maxValue)}
                    </td>
                    <td className="kpi-employee-table__td kpi-employee-table__td--methodology">
                      {row.methodology}
                    </td>
                  </>
                ) : null}
                <td className="kpi-employee-table__td">{row.responsibleExecution}</td>
                <td className="kpi-employee-table__td">{row.responsibleInput}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

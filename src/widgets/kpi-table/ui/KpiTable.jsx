import { useMemo } from 'react'
import { KPI_MOCK_ROWS } from '@/entities/kpi'
import { useMonitoringStore } from '@/entities/monitoring'
import {
  formatNumber,
  formatPercent,
  getQuarterById,
} from '@/shared/lib/monitoring'
import { cn } from '@/shared/lib/classnames'
import './KpiTable.scss'

export function KpiTable() {
  const quarterId = useMonitoringStore((s) => s.quarterId)
  const fullView = useMonitoringStore((s) => s.fullView)
  const quarter = useMemo(() => getQuarterById(quarterId), [quarterId])
  const [m1, m2, m3] = quarter.months

  return (
    <div className={cn('kpi-table', fullView && 'kpi-table--full-view')}>
      <div className="kpi-table__scroll">
        <table className="kpi-table__grid">
          <thead className="kpi-table__head">
            <tr className="kpi-table__head-row">
              <th className="kpi-table__th kpi-table__th--sticky kpi-table__th--index" rowSpan={2}>
                № п/п
              </th>
              <th
                className="kpi-table__th kpi-table__th--sticky kpi-table__th--title"
                rowSpan={2}
              >
                Ключевой показатель эффективности
              </th>
              <th className="kpi-table__th" rowSpan={2}>
                Уд. вес (%)
              </th>
              <th className="kpi-table__th" rowSpan={2}>
                Ед. изм.
              </th>
              <th className="kpi-table__th" rowSpan={2}>
                План на {quarter.label.toLowerCase()}
              </th>
              <th className="kpi-table__th kpi-table__th--group" colSpan={3}>
                Факт нарастающим итогом
              </th>
              <th className="kpi-table__th" rowSpan={2}>
                Факт на {quarter.label.toLowerCase()}
              </th>
              <th className="kpi-table__th kpi-table__th--wide" rowSpan={2}>
                Причина отклонения
              </th>
              <th className="kpi-table__th" rowSpan={2}>
                % достижения квартального плана (абс. цифра)
              </th>
              <th className="kpi-table__th" rowSpan={2}>
                % достижения квартального плана (методика)
              </th>
              <th className="kpi-table__th" rowSpan={2}>
                % достижения годового плана (абс. цифра)
              </th>
              <th className="kpi-table__th" rowSpan={2}>
                % достижения годового плана (методика)
              </th>
              <th className="kpi-table__th" rowSpan={2}>
                Целевое значение на 2026
              </th>
              <th className="kpi-table__th" rowSpan={2}>
                Целевое значение на 2027
              </th>
              <th className="kpi-table__th" rowSpan={2}>
                Целевое значение на 2028
              </th>
              <th className="kpi-table__th" rowSpan={2}>
                Минимальное значение
              </th>
              <th className="kpi-table__th" rowSpan={2}>
                Предельное значение
              </th>
              {fullView ? (
                <>
                  <th className="kpi-table__th kpi-table__th--methodology" rowSpan={2}>
                    Методика
                  </th>
                  <th className="kpi-table__th" rowSpan={2}>
                    Ответственный за выполнение
                  </th>
                  <th className="kpi-table__th" rowSpan={2}>
                    Ответственный за ввод
                  </th>
                </>
              ) : null}
            </tr>
            <tr className="kpi-table__head-row kpi-table__head-row--sub">
              <th className="kpi-table__th kpi-table__th--month">{m1}</th>
              <th className="kpi-table__th kpi-table__th--month">{m2}</th>
              <th className="kpi-table__th kpi-table__th--month kpi-table__th--month-current">
                {m3}
              </th>
            </tr>
          </thead>
          <tbody className="kpi-table__body">
            {KPI_MOCK_ROWS.map((row) => (
              <tr
                key={row.id}
                className={cn(
                  'kpi-table__row',
                  row.kind === 'subrow' && 'kpi-table__row--sub',
                )}
              >
                <td className="kpi-table__td kpi-table__td--sticky kpi-table__td--index">
                  {row.index}
                </td>
                <td className="kpi-table__td kpi-table__td--sticky kpi-table__td--title">
                  {row.title}
                </td>
                <td className="kpi-table__td kpi-table__td--num">
                  {formatNumber(row.weight)}
                </td>
                <td className="kpi-table__td">{row.unit}</td>
                <td className="kpi-table__td kpi-table__td--num">
                  {formatNumber(row.planQuarter)}
                </td>
                <td className="kpi-table__td kpi-table__td--num">
                  {formatNumber(row.factMonth1)}
                </td>
                <td className="kpi-table__td kpi-table__td--num">
                  {formatNumber(row.factMonth2)}
                </td>
                <td className="kpi-table__td kpi-table__td--num kpi-table__td--month-current">
                  {formatNumber(row.factMonth3)}
                </td>
                <td className="kpi-table__td kpi-table__td--num">
                  {formatNumber(row.factQuarter)}
                </td>
                <td className="kpi-table__td kpi-table__td--text">
                  {row.deviationReason || '—'}
                </td>
                <td className="kpi-table__td kpi-table__td--num">
                  {formatPercent(row.achievementQuarterAbs)}
                </td>
                <td className="kpi-table__td kpi-table__td--num">
                  {formatPercent(row.achievementQuarterMethod)}
                </td>
                <td className="kpi-table__td kpi-table__td--num">
                  {formatPercent(row.achievementYearAbs)}
                </td>
                <td className="kpi-table__td kpi-table__td--num">
                  {formatPercent(row.achievementYearMethod)}
                </td>
                <td className="kpi-table__td kpi-table__td--num">
                  {formatNumber(row.target2026)}
                </td>
                <td className="kpi-table__td kpi-table__td--num">
                  {formatNumber(row.target2027)}
                </td>
                <td className="kpi-table__td kpi-table__td--num">
                  {formatNumber(row.target2028)}
                </td>
                <td className="kpi-table__td kpi-table__td--num">
                  {formatNumber(row.minValue)}
                </td>
                <td className="kpi-table__td kpi-table__td--num">
                  {formatNumber(row.maxValue)}
                </td>
                {fullView ? (
                  <>
                    <td className="kpi-table__td kpi-table__td--methodology">
                      {row.methodology}
                    </td>
                    <td className="kpi-table__td">{row.responsibleExecution}</td>
                    <td className="kpi-table__td">{row.responsibleInput}</td>
                  </>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

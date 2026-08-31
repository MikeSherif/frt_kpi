import { Link } from 'react-router-dom'
import { useMonitoringStore } from '@/entities/monitoring'
import { AVAILABLE_YEARS } from '@/shared/lib/monitoring'
import { cn } from '@/shared/lib/classnames'
import './MonitoringHeader.scss'

export function MonitoringHeader({
  pageLabel,
  basePath = '/monitoring',
}) {
  const year = useMonitoringStore((s) => s.year)
  const setYear = useMonitoringStore((s) => s.setYear)

  return (
    <header className="monitoring-header">
      {pageLabel ? (
        <p className="monitoring-header__page-label">{pageLabel}</p>
      ) : null}
      <div className="monitoring-header__years">
        {AVAILABLE_YEARS.map((y) => (
          <Link
            key={y}
            to={`${basePath}/${y}`}
            className={cn(
              'monitoring-header__year',
              y === year && 'monitoring-header__year--active',
            )}
            onClick={() => setYear(y)}
          >
            {y}
          </Link>
        ))}
      </div>
      <h1 className="monitoring-header__title">
        Мониторинг исполнения КПЭ, ФКПЭ, ДКПЭ {year} года
      </h1>
    </header>
  )
}

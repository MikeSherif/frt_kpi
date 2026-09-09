import { Link } from 'react-router-dom'
import { ROUTE_ROOTS } from '@/shared/lib/paths'
import './NotFoundPage.scss'

export function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1 className="not-found-page__title">Страница не найдена</h1>
      <p className="not-found-page__text">Проверьте адрес или перейдите в нужный раздел.</p>
      <nav className="not-found-page__nav">
        <Link to={`${ROUTE_ROOTS.admin}/2026`}>Админ</Link>
        <Link to={`${ROUTE_ROOTS.employee}/2026/month`}>Сотрудник</Link>
        <Link to={`${ROUTE_ROOTS.monitoring}/2026`}>Мониторинг</Link>
      </nav>
    </div>
  )
}

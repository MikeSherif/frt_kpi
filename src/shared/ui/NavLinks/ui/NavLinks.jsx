import { NavLink } from 'react-router-dom'
import { cn } from '@/shared/lib/classnames'
import './NavLinks.scss'

export function NavLinks({ items, className }) {
  return (
    <nav className={cn('nav-links', className)} aria-label="Разделы мониторинга">
      {items.map((item) => (
        <NavLink
          key={item.id}
          to={item.to}
          className={({ isActive }) =>
            cn('nav-links__link', isActive && 'nav-links__link--active')
          }
          end={item.end}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

import { cn } from '@/shared/lib/classnames'
import './TabList.scss'

export function TabList({ items, activeId, onSelect, className, variant = 'default' }) {
  return (
    <div className={cn('tab-list', `tab-list--${variant}`, className)} role="tablist">
      {items.map((item) => {
        const isActive = item.id === activeId
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={cn('tab-list__item', isActive && 'tab-list__item--active')}
            onClick={() => onSelect?.(item.id)}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}

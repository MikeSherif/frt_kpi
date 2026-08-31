import { cn } from '@/shared/lib/classnames'
import './CollapsibleSection.scss'

export function CollapsibleSection({
  title,
  expanded,
  onToggle,
  children,
  className,
  variant = 'default',
}) {
  return (
    <section
      className={cn(
        'collapsible-section',
        variant === 'card' && 'collapsible-section--card',
        expanded && 'collapsible-section--expanded',
        className,
      )}
    >
      <button
        type="button"
        className={cn(
          'collapsible-section__header',
          variant === 'card' && !expanded && 'collapsible-section__header--centered',
        )}
        aria-expanded={expanded}
        onClick={onToggle}
      >
        {variant === 'card' && expanded ? (
          <span
            className={cn(
              'collapsible-section__chevron',
              'collapsible-section__chevron--open',
            )}
            aria-hidden
          />
        ) : null}
        <span
          className={cn(
            'collapsible-section__title',
            variant === 'card' && expanded && 'collapsible-section__title--accent',
          )}
        >
          {title}
        </span>
        {variant === 'default' || (variant === 'card' && !expanded) ? (
          <span
            className={cn(
              'collapsible-section__chevron',
              expanded && 'collapsible-section__chevron--open',
              variant === 'card' && !expanded && 'collapsible-section__chevron--end',
            )}
            aria-hidden
          />
        ) : null}
      </button>
      {expanded ? <div className="collapsible-section__body">{children}</div> : null}
    </section>
  )
}

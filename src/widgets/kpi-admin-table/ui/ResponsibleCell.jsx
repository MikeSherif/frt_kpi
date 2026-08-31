import { cn } from '@/shared/lib/classnames'
import './ResponsibleCell.scss'

function IconCheck() {
  return (
    <svg className="responsible-cell__icon responsible-cell__icon--check" viewBox="0 0 16 16" aria-hidden>
      <circle cx="8" cy="8" r="7" fill="currentColor" />
      <path d="M5 8.2 7 10.2 11 6.2" stroke="#fff" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

function IconPlus({ onClick }) {
  return (
    <button type="button" className="responsible-cell__add" onClick={onClick} aria-label="Добавить">
      +
    </button>
  )
}

export function ResponsibleExecutionCell({ person }) {
  return (
    <div className="responsible-cell responsible-cell--execution">
      <span className="responsible-cell__name">{person.name}</span>
      {person.verified ? <IconCheck /> : null}
    </div>
  )
}

export function ResponsibleInputCell({ persons, onAdd }) {
  return (
    <div className="responsible-cell responsible-cell--input">
      {persons.map((person) => (
        <span key={person.name} className="responsible-cell__name">
          {person.name}
        </span>
      ))}
      <IconPlus onClick={onAdd} />
    </div>
  )
}

export function ResponsibleCellGroup({ className, children }) {
  return <div className={cn('responsible-cell-group', className)}>{children}</div>
}

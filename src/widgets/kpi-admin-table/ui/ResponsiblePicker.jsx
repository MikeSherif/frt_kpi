import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { RESPONSIBLE_PEOPLE_CATALOG, useAdminKpiStore } from '@/entities/kpi'
import { DeleteIcon } from '@/shared/ui/DeleteIcon'
import './ResponsiblePicker.scss'

function IconCheck() {
  return (
    <svg className="responsible-picker__check" viewBox="0 0 16 16" aria-hidden>
      <circle cx="8" cy="8" r="7" fill="currentColor" />
      <path d="M5 8.2 7 10.2 11 6.2" stroke="#fff" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

export function ResponsiblePicker({ rowId, field, people, verifiedNames = [] }) {
  const triggerRef = useRef(null)
  const popoverRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [coords, setCoords] = useState({ top: 0, left: 0 })
  const assigned = useAdminKpiStore((s) => s.edits[rowId]?.[field] ?? people)
  const addPerson = useAdminKpiStore((s) => s.addPerson)
  const removePerson = useAdminKpiStore((s) => s.removePerson)

  const updatePosition = () => {
    if (!triggerRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    const width = 280
    const left = Math.min(rect.left, window.innerWidth - width - 12)
    setCoords({ top: rect.bottom + 6, left: Math.max(12, left) })
  }

  useEffect(() => {
    if (!open) return undefined
    updatePosition()
    const onClick = (event) => {
      if (
        triggerRef.current?.contains(event.target) ||
        popoverRef.current?.contains(event.target)
      ) {
        return
      }
      setOpen(false)
    }
    window.addEventListener('mousedown', onClick)
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition, true)
    return () => {
      window.removeEventListener('mousedown', onClick)
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition, true)
    }
  }, [open])

  const available = useMemo(() => {
    const assignedNames = new Set(assigned.map((item) => item.name))
    const normalized = query.trim().toLowerCase()
    return RESPONSIBLE_PEOPLE_CATALOG.filter((person) => {
      if (assignedNames.has(person.name)) return false
      if (!normalized) return true
      return person.name.toLowerCase().includes(normalized)
    })
  }, [assigned, query])

  const addCustom = () => {
    const name = query.trim()
    if (!name) return
    addPerson(rowId, field, { name }, people)
    setQuery('')
  }

  return (
    <div className="responsible-picker">
      <ul className="responsible-picker__list">
        {assigned.map((person) => (
          <li key={person.name} className="responsible-picker__item">
            <span className="responsible-picker__name">{person.name}</span>
            {verifiedNames.includes(person.name) ? <IconCheck /> : null}
            <button
              type="button"
              className="responsible-picker__remove"
              aria-label={`Удалить ${person.name}`}
              onClick={() => removePerson(rowId, field, person.name, people)}
            >
              <DeleteIcon className="responsible-picker__remove-icon" />
            </button>
          </li>
        ))}
      </ul>
      <button
        ref={triggerRef}
        type="button"
        className="responsible-picker__add"
        aria-label="Добавить ответственного"
        onClick={() => {
          setQuery('')
          setOpen((prev) => !prev)
        }}
      >
        +
      </button>
      {open
        ? createPortal(
            <div
              ref={popoverRef}
              className="responsible-picker__popover"
              style={{ top: coords.top, left: coords.left }}
            >
              <p className="responsible-picker__title">Добавить ответственного</p>
              <input
                className="responsible-picker__search"
                value={query}
                placeholder="Поиск или новое ФИО"
                autoFocus
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    if (available[0]) {
                      addPerson(rowId, field, available[0], people)
                      setQuery('')
                    } else {
                      addCustom()
                    }
                  }
                }}
              />
              <div className="responsible-picker__options">
                {available.length ? (
                  available.map((person) => (
                    <button
                      key={person.id}
                      type="button"
                      className="responsible-picker__option"
                      onClick={() => {
                        addPerson(rowId, field, { name: person.name }, people)
                        setQuery('')
                      }}
                    >
                      {person.name}
                    </button>
                  ))
                ) : (
                  <p className="responsible-picker__empty">Никого не найдено</p>
                )}
              </div>
              {query.trim() ? (
                <button type="button" className="responsible-picker__custom" onClick={addCustom}>
                  Добавить «{query.trim()}»
                </button>
              ) : null}
            </div>,
            document.body,
          )
        : null}
    </div>
  )
}

export function ResponsibleExecutionCell({ person }) {
  return (
    <div className="responsible-picker responsible-picker--single">
      <span className="responsible-picker__name">{person.name}</span>
      {person.verified ? <IconCheck /> : null}
    </div>
  )
}

export function ResponsibleInputCell(props) {
  return <ResponsiblePicker {...props} />
}

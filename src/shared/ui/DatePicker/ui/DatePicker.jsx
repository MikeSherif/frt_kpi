import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  formatDisplayDate,
  getCalendarCells,
  getMonthLabel,
  getWeekdays,
  isSameDay,
  parseDisplayDate,
} from '@/shared/lib/date'
import { cn } from '@/shared/lib/classnames'
import './DatePicker.scss'

export function DatePicker({ value, placeholder = 'Выбор даты', onChange, className }) {
  const triggerRef = useRef(null)
  const popoverRef = useRef(null)
  const [open, setOpen] = useState(false)
  const selected = parseDisplayDate(value)
  const initial = selected ?? new Date(2026, 5, 1)
  const [viewYear, setViewYear] = useState(initial.getFullYear())
  const [viewMonth, setViewMonth] = useState(initial.getMonth())
  const [coords, setCoords] = useState({ top: 0, left: 0 })

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
    const selectedDate = parseDisplayDate(value) ?? new Date()
    setViewYear(selectedDate.getFullYear())
    setViewMonth(selectedDate.getMonth())

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
  }, [open, value])

  const shiftMonth = (delta) => {
    const next = new Date(viewYear, viewMonth + delta, 1)
    setViewYear(next.getFullYear())
    setViewMonth(next.getMonth())
  }

  const today = new Date()

  return (
    <div className={cn('date-picker', className)}>
      <button
        ref={triggerRef}
        type="button"
        className={cn('date-picker__trigger', !value && 'date-picker__trigger--empty')}
        onClick={() => setOpen((prev) => !prev)}
      >
        {value || placeholder}
      </button>
      {open
        ? createPortal(
            <div
              ref={popoverRef}
              className="date-picker__popover"
              style={{ top: coords.top, left: coords.left }}
            >
              <div className="date-picker__nav">
                <button type="button" className="date-picker__nav-btn" onClick={() => shiftMonth(-1)}>
                  ‹
                </button>
                <span className="date-picker__month">{getMonthLabel(viewYear, viewMonth)}</span>
                <button type="button" className="date-picker__nav-btn" onClick={() => shiftMonth(1)}>
                  ›
                </button>
              </div>
              <div className="date-picker__weekdays">
                {getWeekdays().map((day) => (
                  <span key={day} className="date-picker__weekday">
                    {day}
                  </span>
                ))}
              </div>
              <div className="date-picker__grid">
                {getCalendarCells(viewYear, viewMonth).map((cell) => (
                  <button
                    key={cell.key}
                    type="button"
                    className={cn(
                      'date-picker__day',
                      !cell.current && 'date-picker__day--muted',
                      isSameDay(cell.date, selected) && 'date-picker__day--selected',
                      isSameDay(cell.date, today) && 'date-picker__day--today',
                    )}
                    onClick={() => {
                      onChange?.(formatDisplayDate(cell.date))
                      setOpen(false)
                    }}
                  >
                    {cell.day}
                  </button>
                ))}
              </div>
              <div className="date-picker__footer">
                <button
                  type="button"
                  className="date-picker__footer-btn"
                  onClick={() => {
                    onChange?.(formatDisplayDate(today))
                    setOpen(false)
                  }}
                >
                  Сегодня
                </button>
                <button
                  type="button"
                  className="date-picker__footer-btn"
                  onClick={() => {
                    onChange?.(null)
                    setOpen(false)
                  }}
                >
                  Очистить
                </button>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  )
}

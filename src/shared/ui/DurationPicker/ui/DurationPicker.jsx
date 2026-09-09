import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/shared/lib/classnames'
import './DurationPicker.scss'

const OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export function DurationPicker({
  value,
  placeholder = 'Выбор',
  onChange,
  className,
}) {
  const triggerRef = useRef(null)
  const popoverRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [coords, setCoords] = useState({ top: 0, left: 0 })
  const selected = value ? Number(value) : null

  const updatePosition = () => {
    if (!triggerRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    setCoords({ top: rect.bottom + 6, left: rect.left })
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

  return (
    <div className={cn('duration-picker', className)}>
      <button
        ref={triggerRef}
        type="button"
        className={cn(
          'duration-picker__trigger',
          !value && 'duration-picker__trigger--empty',
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        {value ? `${value} дн.` : placeholder}
      </button>
      {open
        ? createPortal(
            <div
              ref={popoverRef}
              className="duration-picker__popover"
              style={{ top: coords.top, left: coords.left }}
            >
              <p className="duration-picker__title">Рабочие дни</p>
              <div className="duration-picker__options">
                {OPTIONS.map((days) => (
                  <button
                    key={days}
                    type="button"
                    className={cn(
                      'duration-picker__option',
                      selected === days && 'duration-picker__option--active',
                    )}
                    onClick={() => {
                      onChange?.(String(days))
                      setOpen(false)
                    }}
                  >
                    {days}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="duration-picker__clear"
                onClick={() => {
                  onChange?.(null)
                  setOpen(false)
                }}
              >
                Очистить
              </button>
            </div>,
            document.body,
          )
        : null}
    </div>
  )
}

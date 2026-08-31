import { cn } from '@/shared/lib/classnames'
import './SchedulePicker.scss'

export function SchedulePicker({
  value,
  placeholder,
  onChange,
  type = 'date',
  className,
}) {
  const isEmpty = !value

  if (type === 'duration') {
    return (
      <input
        type="text"
        className={cn(
          'schedule-picker',
          'schedule-picker--input',
          isEmpty && 'schedule-picker--placeholder',
          className,
        )}
        value={value ?? ''}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
      />
    )
  }

  return (
    <button
      type="button"
      className={cn(
        'schedule-picker',
        isEmpty && 'schedule-picker--empty',
        className,
      )}
      onClick={() => {
        if (isEmpty) onChange?.('30.06.2026')
      }}
    >
      {value || placeholder}
    </button>
  )
}

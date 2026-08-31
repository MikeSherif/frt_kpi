import { cn } from '@/shared/lib/classnames'
import './Switch.scss'

export function Switch({ checked, onChange, label, className }) {
  return (
    <label className={cn('switch', className)}>
      {label ? <span className="switch__label">{label}</span> : null}
      <span className="switch__control">
        <input
          type="checkbox"
          className="switch__input"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <span className="switch__track" aria-hidden />
        <span className="switch__thumb" aria-hidden />
      </span>
    </label>
  )
}

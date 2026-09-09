import { cn } from '@/shared/lib/classnames'
import './Modal.scss'

export function Modal({ open, title, onClose, children, footer, className }) {
  if (!open) return null

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button type="button" className="modal__backdrop" aria-label="Закрыть" onClick={onClose} />
      <div className={cn('modal__dialog', className)}>
        <header className="modal__header">
          <h2 id="modal-title" className="modal__title">
            {title}
          </h2>
          <button type="button" className="modal__close" onClick={onClose} aria-label="Закрыть">
            ×
          </button>
        </header>
        <div className="modal__body">{children}</div>
        {footer ? <footer className="modal__footer">{footer}</footer> : null}
      </div>
    </div>
  )
}

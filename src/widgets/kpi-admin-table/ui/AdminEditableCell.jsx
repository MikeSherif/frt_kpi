import { useEffect, useRef, useState } from 'react'
import { useAdminKpiStore } from '@/entities/kpi'
import { formatNumber } from '@/shared/lib/monitoring'
import { cn } from '@/shared/lib/classnames'
import './AdminEditableCell.scss'

export function AdminEditableCell({
  rowId,
  field,
  defaultValue = '',
  type = 'text',
  className,
}) {
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef(null)
  const rawValue = useAdminKpiStore((s) => {
    const edit = s.edits[rowId]
    if (edit && field in edit) return edit[field]
    return defaultValue ?? ''
  })
  const setCellValue = useAdminKpiStore((s) => s.setCellValue)

  const displayValue =
    type === 'number' ? formatNumber(rawValue === '' ? null : rawValue) : rawValue || '—'

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
      if (type !== 'textarea') inputRef.current.select()
    }
  }, [isEditing, type])

  const commit = (value) => {
    setCellValue(rowId, field, value)
    setIsEditing(false)
  }

  if (isEditing) {
    if (type === 'textarea') {
      return (
        <textarea
          ref={inputRef}
          className={cn('admin-editable-cell admin-editable-cell--input', className)}
          defaultValue={rawValue}
          rows={2}
          onBlur={(e) => commit(e.target.value)}
        />
      )
    }

    return (
      <input
        ref={inputRef}
        type="text"
        className={cn('admin-editable-cell admin-editable-cell--input', className)}
        defaultValue={rawValue}
        onBlur={(e) => commit(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') commit(e.currentTarget.value)
          if (e.key === 'Escape') setIsEditing(false)
        }}
      />
    )
  }

  return (
    <button
      type="button"
      className={cn(
        'admin-editable-cell',
        type === 'number' && 'admin-editable-cell--num',
        className,
      )}
      title="Нажмите, чтобы изменить"
      onClick={() => setIsEditing(true)}
    >
      {displayValue}
    </button>
  )
}

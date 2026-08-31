import { useEmployeeKpiStore } from '@/entities/employee'
import { cn } from '@/shared/lib/classnames'
import './EditableCell.scss'
import './EditableCell.scss'

export function EditableCell({
  rowId,
  field,
  defaultValue = '',
  viewMode,
  activeMode,
  type = 'text',
  className,
}) {
  const value = useEmployeeKpiStore((s) => {
    const edit = s.edits[rowId]
    if (edit && field in edit) return edit[field]
    return defaultValue ?? ''
  })
  const setCellValue = useEmployeeKpiStore((s) => s.setCellValue)
  const isEditable = viewMode === activeMode

  if (!isEditable) {
    return (
      <span className={cn('editable-cell editable-cell--readonly', className)}>
        {value || '—'}
      </span>
    )
  }

  if (type === 'textarea') {
    return (
      <textarea
        className={cn('editable-cell editable-cell--input editable-cell--textarea', className)}
        value={value}
        rows={2}
        onChange={(e) => setCellValue(rowId, field, e.target.value)}
      />
    )
  }

  return (
    <input
      type="text"
      className={cn('editable-cell editable-cell--input', className)}
      value={value}
      onChange={(e) => setCellValue(rowId, field, e.target.value)}
    />
  )
}

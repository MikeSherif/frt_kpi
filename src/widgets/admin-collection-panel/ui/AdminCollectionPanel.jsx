import { useCollectionStore } from '@/entities/collection'
import { DatePicker } from '@/shared/ui/DatePicker'
import { DurationPicker } from '@/shared/ui/DurationPicker'
import './AdminCollectionPanel.scss'

export function AdminCollectionPanel() {
  const rows = useCollectionStore((s) => s.rows)
  const updateRow = useCollectionStore((s) => s.updateRow)

  return (
    <div className="admin-collection-panel">
      <div className="admin-collection-panel__wrap">
        <table className="admin-collection-table">
          <thead className="admin-collection-table__head">
            <tr>
              <th className="admin-collection-table__th admin-collection-table__th--label">
                Данные
              </th>
              <th className="admin-collection-table__th">Дата начала сбора</th>
              <th className="admin-collection-table__th">Продолжительность, раб. дней</th>
              <th className="admin-collection-table__th">Продлить сбор</th>
            </tr>
          </thead>
          <tbody className="admin-collection-table__body">
            {rows.map((row) => (
              <tr key={row.id} className="admin-collection-table__row">
                <td className="admin-collection-table__td admin-collection-table__td--label">
                  {row.label}
                </td>
                <td className="admin-collection-table__td">
                  <DatePicker
                    value={row.startDate}
                    placeholder="Выбор даты"
                    onChange={(value) => updateRow(row.id, 'startDate', value)}
                  />
                </td>
                <td className="admin-collection-table__td">
                  <DurationPicker
                    value={row.durationDays}
                    placeholder="Выбор"
                    onChange={(value) => updateRow(row.id, 'durationDays', value)}
                  />
                </td>
                <td className="admin-collection-table__td">
                  <DatePicker
                    value={row.extendDate}
                    placeholder="Выбор даты"
                    onChange={(value) => updateRow(row.id, 'extendDate', value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

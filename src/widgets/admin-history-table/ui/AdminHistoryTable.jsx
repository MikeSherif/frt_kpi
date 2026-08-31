import { ADMIN_HISTORY_ENTRIES } from '@/entities/history'
import './AdminHistoryTable.scss'

export function AdminHistoryTable() {
  return (
    <div className="admin-history-table">
      <div className="admin-history-table__wrap">
        <table className="admin-history-table__grid">
          <thead className="admin-history-table__head">
            <tr>
              <th className="admin-history-table__th admin-history-table__th--datetime">
                Дата и время
              </th>
              <th className="admin-history-table__th admin-history-table__th--employee">
                Сотрудник, внесший изменения
              </th>
              <th className="admin-history-table__th admin-history-table__th--name">
                Наименование показателя
              </th>
              <th className="admin-history-table__th admin-history-table__th--field">
                Что заменено
              </th>
              <th className="admin-history-table__th admin-history-table__th--value">
                Прошлое значение
              </th>
              <th className="admin-history-table__th admin-history-table__th--value">
                Новое значение
              </th>
            </tr>
          </thead>
          <tbody className="admin-history-table__body">
            {ADMIN_HISTORY_ENTRIES.map((entry) => (
              <tr key={entry.id} className="admin-history-table__row">
                <td className="admin-history-table__td admin-history-table__td--datetime">
                  {entry.datetime}
                </td>
                <td className="admin-history-table__td">{entry.employee}</td>
                <td className="admin-history-table__td admin-history-table__td--name">
                  {entry.indicatorName}
                </td>
                <td className="admin-history-table__td">{entry.changedField}</td>
                <td className="admin-history-table__td admin-history-table__td--value">
                  {entry.oldValue}
                </td>
                <td className="admin-history-table__td admin-history-table__td--value">
                  {entry.newValue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

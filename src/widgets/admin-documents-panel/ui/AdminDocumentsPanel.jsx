import { useDocumentsStore } from '@/entities/document'
import { DeleteIcon } from '@/shared/ui/DeleteIcon'
import { DocumentIcon } from '@/shared/ui/DocumentIcon'
import './AdminDocumentsPanel.scss'

export function AdminDocumentsPanel() {
  const documents = useDocumentsStore((s) => s.documents)
  const addDocument = useDocumentsStore((s) => s.addDocument)
  const removeDocument = useDocumentsStore((s) => s.removeDocument)
  const saveAll = useDocumentsStore((s) => s.saveAll)
  const saveMessage = useDocumentsStore((s) => s.saveMessage)

  return (
    <div className="admin-documents-panel">
      <div className="admin-documents-panel__toolbar">
        <button
          type="button"
          className="admin-documents-panel__action"
          onClick={() => addDocument()}
        >
          <span className="admin-documents-panel__action-icon">+</span>
          Добавить документ
        </button>
        <button type="button" className="admin-documents-panel__action" onClick={saveAll}>
          Сохранить все
        </button>
        {saveMessage === 'saved' ? (
          <span className="admin-documents-panel__saved">Сохранено</span>
        ) : null}
      </div>

      <div className="admin-documents-panel__table-wrap">
        <table className="admin-documents-table">
          <thead className="admin-documents-table__head">
            <tr>
              <th className="admin-documents-table__th admin-documents-table__th--name">
                Документ
              </th>
              <th className="admin-documents-table__th admin-documents-table__th--date">
                Дата и время загрузки
              </th>
              <th className="admin-documents-table__th admin-documents-table__th--delete">
                Удалить
              </th>
            </tr>
          </thead>
          <tbody className="admin-documents-table__body">
            {documents.map((doc) => (
              <tr key={doc.id} className="admin-documents-table__row">
                <td className="admin-documents-table__td admin-documents-table__td--name">
                  <button type="button" className="admin-documents-table__link">
                    <DocumentIcon className="admin-documents-table__doc-icon" />
                    <span>{doc.name}</span>
                  </button>
                </td>
                <td className="admin-documents-table__td admin-documents-table__td--date">
                  {doc.uploadedAt}
                </td>
                <td className="admin-documents-table__td admin-documents-table__td--delete">
                  <button
                    type="button"
                    className="admin-documents-table__delete"
                    aria-label={`Удалить ${doc.name}`}
                    onClick={() => removeDocument(doc.id)}
                  >
                    <DeleteIcon className="admin-documents-table__delete-icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

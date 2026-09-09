import { create } from 'zustand'
import { ADMIN_DOCUMENTS_MOCK, EMPLOYEE_DOCUMENTS_MOCK } from './mockDocuments'

function formatNow() {
  const now = new Date()
  const pad = (n) => String(n).padStart(2, '0')
  return `${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
}

export const useDocumentsStore = create((set, get) => ({
  lists: {
    admin: [...ADMIN_DOCUMENTS_MOCK],
    employee: [...EMPLOYEE_DOCUMENTS_MOCK],
  },
  saveMessage: { admin: '', employee: '' },

  addDocument: (name, scope = 'admin') => {
    const id = `${scope}-doc-${Date.now()}`
    set((state) => {
      const current = state.lists[scope] ?? []
      return {
        lists: {
          ...state.lists,
          [scope]: [
            ...current,
            {
              id,
              name: name || `Новый документ ${current.length + 1}.pdf`,
              uploadedAt: formatNow(),
            },
          ],
        },
        saveMessage: { ...state.saveMessage, [scope]: '' },
      }
    })
  },

  removeDocument: (id, scope = 'admin') =>
    set((state) => ({
      lists: {
        ...state.lists,
        [scope]: (state.lists[scope] ?? []).filter((doc) => doc.id !== id),
      },
      saveMessage: { ...state.saveMessage, [scope]: '' },
    })),

  saveAll: (scope = 'admin') => {
    set((state) => ({
      saveMessage: { ...state.saveMessage, [scope]: 'saved' },
    }))
    return get().lists[scope] ?? []
  },
}))

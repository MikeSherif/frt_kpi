import { create } from 'zustand'
import { ADMIN_DOCUMENTS_MOCK } from './mockDocuments'

function formatNow() {
  const now = new Date()
  const pad = (n) => String(n).padStart(2, '0')
  return `${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
}

export const useDocumentsStore = create((set, get) => ({
  documents: [...ADMIN_DOCUMENTS_MOCK],
  saveMessage: '',

  addDocument: (name) => {
    const id = `doc-${Date.now()}`
    set((state) => ({
      documents: [
        ...state.documents,
        { id, name: name || `Новый документ ${state.documents.length + 1}.pdf`, uploadedAt: formatNow() },
      ],
      saveMessage: '',
    }))
  },

  removeDocument: (id) =>
    set((state) => ({
      documents: state.documents.filter((doc) => doc.id !== id),
      saveMessage: '',
    })),

  saveAll: () => {
    set({ saveMessage: 'saved' })
    return get().documents
  },
}))

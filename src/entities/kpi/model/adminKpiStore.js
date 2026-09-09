import { create } from 'zustand'

export const useAdminKpiStore = create((set, get) => ({
  edits: {},

  setCellValue: (rowId, field, value) =>
    set((state) => ({
      edits: {
        ...state.edits,
        [rowId]: {
          ...state.edits[rowId],
          [field]: value,
        },
      },
    })),

  getCellValue: (rowId, field, fallback = '') => {
    const edit = get().edits[rowId]
    if (edit && field in edit) return edit[field]
    return fallback ?? ''
  },

  getPeople: (rowId, field, fallback = []) => {
    const edit = get().edits[rowId]
    if (edit && field in edit) return edit[field]
    return fallback
  },

  addPerson: (rowId, field, person, fallback = []) =>
    set((state) => {
      const current = state.edits[rowId]?.[field] ?? fallback
      if (current.some((item) => item.name === person.name)) return state
      return {
        edits: {
          ...state.edits,
          [rowId]: {
            ...state.edits[rowId],
            [field]: [...current, person],
          },
        },
      }
    }),

  removePerson: (rowId, field, name, fallback = []) =>
    set((state) => {
      const current = state.edits[rowId]?.[field] ?? fallback
      return {
        edits: {
          ...state.edits,
          [rowId]: {
            ...state.edits[rowId],
            [field]: current.filter((item) => item.name !== name),
          },
        },
      }
    }),
}))

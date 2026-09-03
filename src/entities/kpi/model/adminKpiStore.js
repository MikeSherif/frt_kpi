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
}))

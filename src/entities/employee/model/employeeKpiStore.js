import { create } from 'zustand'

const DEFAULT_EMPLOYEE_SECTIONS = {
  kpe: true,
  fkpe: false,
  dkpe: false,
  depremium: false,
}

export const useEmployeeKpiStore = create((set, get) => ({
  sectionsExpanded: { ...DEFAULT_EMPLOYEE_SECTIONS },
  edits: {},
  submitStatus: 'idle',

  toggleSection: (sectionId) =>
    set((state) => ({
      sectionsExpanded: {
        ...state.sectionsExpanded,
        [sectionId]: !state.sectionsExpanded[sectionId],
      },
    })),

  setCellValue: (rowId, field, value) =>
    set((state) => ({
      edits: {
        ...state.edits,
        [rowId]: {
          ...state.edits[rowId],
          [field]: value,
        },
      },
      submitStatus: 'idle',
    })),

  getCellValue: (rowId, field, fallback = '') => {
    const edit = get().edits[rowId]
    if (edit && field in edit) return edit[field]
    return fallback ?? ''
  },

  submitForApproval: () => {
    set({ submitStatus: 'submitted' })
  },
}))

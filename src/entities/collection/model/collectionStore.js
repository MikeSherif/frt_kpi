import { create } from 'zustand'
import { COLLECTION_SCHEDULE_MOCK } from './mockCollectionSchedule'

export const useCollectionStore = create((set) => ({
  rows: COLLECTION_SCHEDULE_MOCK.map((row) => ({ ...row })),

  updateRow: (id, field, value) =>
    set((state) => ({
      rows: state.rows.map((row) =>
        row.id === id ? { ...row, [field]: value || null } : row,
      ),
    })),
}))

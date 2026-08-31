import { create } from 'zustand'

const DEFAULT_ADMIN_SECTIONS = {
  kpe: true,
  fkpe: false,
  dkpe: false,
  depremium: false,
}

export const useMonitoringStore = create((set) => ({
  year: 2026,
  quarterId: 'q2',
  fullView: true,
  kpiSectionExpanded: true,
  adminSectionsExpanded: { ...DEFAULT_ADMIN_SECTIONS },

  setYear: (year) => set({ year }),
  setQuarterId: (quarterId) => set({ quarterId }),
  setFullView: (fullView) => set({ fullView }),
  toggleKpiSection: () =>
    set((state) => ({ kpiSectionExpanded: !state.kpiSectionExpanded })),
  toggleAdminSection: (sectionId) =>
    set((state) => ({
      adminSectionsExpanded: {
        ...state.adminSectionsExpanded,
        [sectionId]: !state.adminSectionsExpanded[sectionId],
      },
    })),
}))

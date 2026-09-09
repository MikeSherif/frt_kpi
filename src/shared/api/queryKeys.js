export const queryKeys = {
  kpi: {
    all: ['kpi'],
    monitoring: (year, quarterId) => ['kpi', 'monitoring', year, quarterId],
    admin: (year, quarterId) => ['kpi', 'admin', year, quarterId],
    employee: (year, quarterId, mode) => ['kpi', 'employee', year, quarterId, mode],
  },
  documents: {
    all: ['documents'],
    list: (year) => ['documents', year],
  },
  history: {
    all: ['history'],
    list: (year, quarterId) => ['history', year, quarterId],
  },
  collection: {
    all: ['collection'],
    schedule: (year, quarterId) => ['collection', year, quarterId],
  },
  reports: {
    all: ['reports'],
    list: (year, quarterId) => ['reports', year, quarterId],
    detail: (id) => ['reports', 'detail', id],
  },
}

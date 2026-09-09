export const queryKeys = {
  kpi: {
    all: ['kpi'],
    monitoring: (year, quarterId) => ['kpi', 'monitoring', year, quarterId],
    admin: (year, quarterId) => ['kpi', 'admin', year, quarterId],
    employee: (year, quarterId, mode) => ['kpi', 'employee', year, quarterId, mode],
  },
  documents: {
    all: ['documents'],
    list: (year, scope = 'admin') => ['documents', scope, year],
  },
  history: {
    all: ['history'],
    list: (year, quarterId, scope = 'admin', mode) => ['history', scope, year, quarterId, mode],
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

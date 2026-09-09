import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '@/shared/api'
import { ADMIN_DOCUMENTS_MOCK, EMPLOYEE_DOCUMENTS_MOCK } from '../model/mockDocuments'

export function useDocumentsQuery(year, scope = 'admin') {
  return useQuery({
    queryKey: queryKeys.documents.list(year, scope),
    queryFn: () =>
      Promise.resolve(scope === 'employee' ? EMPLOYEE_DOCUMENTS_MOCK : ADMIN_DOCUMENTS_MOCK),
  })
}

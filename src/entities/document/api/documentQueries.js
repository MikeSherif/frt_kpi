import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '@/shared/api'
import { ADMIN_DOCUMENTS_MOCK } from '../model/mockDocuments'

export function useDocumentsQuery(year) {
  return useQuery({
    queryKey: queryKeys.documents.list(year),
    queryFn: () => Promise.resolve(ADMIN_DOCUMENTS_MOCK),
  })
}

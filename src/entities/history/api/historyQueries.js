import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '@/shared/api'
import { ADMIN_HISTORY_ENTRIES } from '../model/adminHistoryData'

export function useHistoryQuery(year, quarterId) {
  return useQuery({
    queryKey: queryKeys.history.list(year, quarterId),
    queryFn: () => Promise.resolve(ADMIN_HISTORY_ENTRIES),
  })
}

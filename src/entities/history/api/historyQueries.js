import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '@/shared/api'
import { ADMIN_HISTORY_ENTRIES } from '../model/adminHistoryData'
import { getEmployeeHistory } from '../model/employeeHistoryData'

export function useHistoryQuery(year, quarterId, scope = 'admin', mode = 'month') {
  return useQuery({
    queryKey: queryKeys.history.list(year, quarterId, scope, mode),
    queryFn: () =>
      Promise.resolve(scope === 'employee' ? getEmployeeHistory(mode) : ADMIN_HISTORY_ENTRIES),
  })
}

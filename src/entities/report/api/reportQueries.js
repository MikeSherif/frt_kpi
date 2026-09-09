import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '@/shared/api'
import { ADMIN_REPORTS, getReportById } from '../model/adminReportsData'

export function useReportsQuery(year, quarterId) {
  return useQuery({
    queryKey: queryKeys.reports.list(year, quarterId),
    queryFn: () => Promise.resolve(ADMIN_REPORTS),
  })
}

export function useReportQuery(id) {
  return useQuery({
    queryKey: queryKeys.reports.detail(id),
    queryFn: () => Promise.resolve(getReportById(id)),
    enabled: Boolean(id),
  })
}

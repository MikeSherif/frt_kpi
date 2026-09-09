import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '@/shared/api'
import { KPI_MOCK_ROWS } from '../model/mockData'
import { ADMIN_KPI_ROWS_BY_BLOCK } from '../model/adminMockData'
import { EMPLOYEE_KPI_ROWS_BY_BLOCK } from '../model/employeeMockData'

function delay(data) {
  return Promise.resolve(data)
}

export function useMonitoringKpiQuery(year, quarterId) {
  return useQuery({
    queryKey: queryKeys.kpi.monitoring(year, quarterId),
    queryFn: () => delay(KPI_MOCK_ROWS),
  })
}

export function useAdminKpiQuery(year, quarterId) {
  return useQuery({
    queryKey: queryKeys.kpi.admin(year, quarterId),
    queryFn: () => delay(ADMIN_KPI_ROWS_BY_BLOCK),
  })
}

export function useEmployeeKpiQuery(year, quarterId, mode) {
  return useQuery({
    queryKey: queryKeys.kpi.employee(year, quarterId, mode),
    queryFn: () => delay(EMPLOYEE_KPI_ROWS_BY_BLOCK),
  })
}

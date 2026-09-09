import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { KpiAdminPage } from '@/pages/kpi-admin'
import { KpiEmployeePage } from '@/pages/kpi-employee'
import { KpiMonitoringPage } from '@/pages/kpi-monitoring'
import { NotFoundPage } from '@/pages/not-found'
import { PlaceholderPage } from '@/pages/placeholder'
import { ROUTE_ROOTS } from '@/shared/lib/paths'

function getBasename() {
  const base = import.meta.env.BASE_URL
  if (!base || base === '/') return undefined
  return base.replace(/\/$/, '')
}

export function RouterProvider() {
  return (
    <BrowserRouter basename={getBasename()}>
      <Routes>
        <Route path="/" element={<Navigate to={`${ROUTE_ROOTS.admin}/2026`} replace />} />
        <Route path="/monitoring/:year" element={<KpiMonitoringPage />} />
        <Route path="/monitoring/:year/:section" element={<KpiMonitoringPage />} />
        <Route path="/admin/kpi/:year" element={<KpiAdminPage />} />
        <Route path="/admin/kpi/:year/:section" element={<KpiAdminPage />} />
        <Route path="/employee/kpi/:year/:mode" element={<KpiEmployeePage />} />
        <Route path="/employee/kpi/:year/:mode/:section" element={<KpiEmployeePage />} />
        <Route path="/placeholder/:slug" element={<PlaceholderPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

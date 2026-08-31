import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { KpiAdminPage } from '@/pages/kpi-admin'
import { KpiEmployeePage } from '@/pages/kpi-employee'
import { KpiMonitoringPage } from '@/pages/kpi-monitoring'
import { PlaceholderPage } from '@/pages/placeholder'

export function RouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/kpi/2026" replace />} />
        <Route path="/monitoring/:year" element={<KpiMonitoringPage />} />
        <Route path="/monitoring/:year/:section" element={<KpiMonitoringPage />} />
        <Route path="/admin/kpi/:year" element={<KpiAdminPage />} />
        <Route path="/admin/kpi/:year/:section" element={<KpiAdminPage />} />
        <Route path="/employee/kpi/:year/:mode" element={<KpiEmployeePage />} />
        <Route path="/employee/kpi/:year/:mode/:section" element={<KpiEmployeePage />} />
        <Route path="/placeholder/:slug" element={<PlaceholderPage />} />
        <Route path="*" element={<Navigate to="/admin/kpi/2026" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

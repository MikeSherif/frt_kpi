export const ROUTE_ROOTS = {
  admin: '/admin/kpi',
  employee: '/employee/kpi',
  monitoring: '/monitoring',
}

export function buildMonitoringPath({ year, section } = {}) {
  const base = `${ROUTE_ROOTS.monitoring}/${year}`
  if (!section || section === 'indicators') return base
  return `${base}/${section}`
}

export function buildAdminPath({ year, section } = {}) {
  const base = `${ROUTE_ROOTS.admin}/${year}`
  if (!section || section === 'indicators') return base
  return `${base}/${section}`
}

export function buildEmployeePath({ year, mode = 'month', section } = {}) {
  const base = `${ROUTE_ROOTS.employee}/${year}/${mode}`
  if (!section || section === 'indicators') return base
  return `${base}/${section}`
}

export function buildSectionPath({ basePath = ROUTE_ROOTS.monitoring, year, mode, section } = {}) {
  if (basePath === ROUTE_ROOTS.employee) {
    return buildEmployeePath({ year, mode, section })
  }
  if (basePath === ROUTE_ROOTS.admin) {
    return buildAdminPath({ year, section })
  }
  return buildMonitoringPath({ year, section })
}

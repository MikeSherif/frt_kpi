import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { MONITORING_SECTIONS } from '@/shared/lib/monitoring'
import { buildSectionPath, ROUTE_ROOTS } from '@/shared/lib/paths'
import { NavLinks } from '@/shared/ui/NavLinks'

export function MonitoringSectionNav({
  basePath = ROUTE_ROOTS.monitoring,
  sections = MONITORING_SECTIONS,
}) {
  const { year = '2026', mode } = useParams()

  const items = useMemo(
    () =>
      sections.map((section) => ({
        id: section.id,
        label: section.label,
        to: buildSectionPath({
          basePath,
          year,
          mode,
          section: section.path,
        }),
        end: section.path === 'indicators',
      })),
    [basePath, mode, sections, year],
  )

  return <NavLinks className="monitoring-section-nav" items={items} />
}

import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { MONITORING_SECTIONS } from '@/shared/lib/monitoring'
import { NavLinks } from '@/shared/ui/NavLinks'

export function MonitoringSectionNav({
  basePath = '/monitoring',
  sections = MONITORING_SECTIONS,
}) {
  const { year = '2026' } = useParams()

  const items = useMemo(
    () =>
      sections.map((section) => ({
        id: section.id,
        label: section.label,
        to:
          section.path === 'indicators'
            ? `${basePath}/${year}`
            : `${basePath}/${year}/${section.path}`,
        end: section.path === 'indicators',
      })),
    [basePath, sections, year],
  )

  return <NavLinks className="monitoring-section-nav" items={items} />
}
import { useMonitoringStore } from '@/entities/monitoring'
import { QUARTERS } from '@/shared/lib/monitoring'
import { TabList } from '@/shared/ui/TabList'

export function QuarterTabs() {
  const quarterId = useMonitoringStore((s) => s.quarterId)
  const setQuarterId = useMonitoringStore((s) => s.setQuarterId)

  return (
    <TabList
      className="quarter-tabs"
      items={QUARTERS}
      activeId={quarterId}
      onSelect={setQuarterId}
    />
  )
}

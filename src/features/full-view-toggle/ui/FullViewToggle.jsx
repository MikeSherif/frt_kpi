import { useMonitoringStore } from '@/entities/monitoring'
import { Switch } from '@/shared/ui/Switch'

export function FullViewToggle() {
  const fullView = useMonitoringStore((s) => s.fullView)
  const setFullView = useMonitoringStore((s) => s.setFullView)

  return (
    <Switch
      className="full-view-toggle"
      label="Полный вид"
      checked={fullView}
      onChange={setFullView}
    />
  )
}

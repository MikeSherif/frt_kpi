import { useEmployeeKpiStore } from '@/entities/employee'
import './SubmitForApprovalButton.scss'

export function SubmitForApprovalButton() {
  const submitForApproval = useEmployeeKpiStore((s) => s.submitForApproval)
  const submitStatus = useEmployeeKpiStore((s) => s.submitStatus)

  return (
    <button
      type="button"
      className="submit-for-approval"
      disabled={submitStatus === 'submitted'}
      onClick={submitForApproval}
    >
      {submitStatus === 'submitted' ? 'Отправлено' : 'Отправить на согласование'}
    </button>
  )
}

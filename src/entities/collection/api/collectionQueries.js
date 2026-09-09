import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '@/shared/api'
import { COLLECTION_SCHEDULE_MOCK } from '../model/mockCollectionSchedule'

export function useCollectionScheduleQuery(year, quarterId) {
  return useQuery({
    queryKey: queryKeys.collection.schedule(year, quarterId),
    queryFn: () => Promise.resolve(COLLECTION_SCHEDULE_MOCK),
  })
}

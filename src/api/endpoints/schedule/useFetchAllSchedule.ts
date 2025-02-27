import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FetchAllSchedulesResponse } from './schedules';
import { useParams } from 'next/navigation';

export const fetchSchedules = async (storeId: string) => {
  const allSchedule = await axios.get<FetchAllSchedulesResponse>(
    `/api/stores/${storeId}/schedules`,
  );

  return allSchedule.data.schedules;
};

export const useFetchSchedule = (shiftDate?: string, status?: string) => {
  const { storeId } = useParams();

  return useQuery({
    queryKey: ['schedule', { shiftDate, status }],
    queryFn: () => fetchSchedules(storeId as string),
    enabled: !!storeId,
    staleTime: 1000 * 5,
  });
};

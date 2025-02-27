import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import { useParams } from 'next/navigation';
import { WorkerScheduleResponse } from './workerSchedule';

type WorkerScheduleParams = {
  storeId: string;
  userId: string;
  date: string;
};

const workerSchedule = async ({
  storeId,
  userId,
  date,
}: WorkerScheduleParams) => {
  const scheduleOfWorker = await axios.get<WorkerScheduleResponse>(
    `/api/stores/${storeId}/workers/${userId}/schedules?date=${date}`,
  );

  return scheduleOfWorker.data;
};

export const useWorkerSchedule = (dateInfo: string) => {
  // const params = useParams();
  const storeId = '2';
  const date = dateInfo;

  const workerScheduleParams = {
    storeId: storeId,
    userId: '2',
    date: date,
  };

  return useQuery({
    queryKey: ['workerSchedule'],
    queryFn: () => workerSchedule(workerScheduleParams),
    enabled: !!workerScheduleParams.storeId && !!workerScheduleParams.userId,
    staleTime: 1000 * 5,
  });
};

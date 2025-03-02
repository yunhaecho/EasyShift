import {
  // useQuery,
  queryOptions,
  // useQueryClient,
  // skipToken,
  useSuspenseQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import { WorkerScheduleResponse } from './workerSchedule';
// import { useParams } from 'next/navigation';
//
// 데이터 있다 가정하고 부르기

type WorkerScheduleParams = {
  storeId: string;
  userId: string;
  date: string;
};

const workerScheduleQueryOptions = (
  workerScheduleParams: WorkerScheduleParams,
) =>
  queryOptions({
    queryKey: ['workerSchedule', workerScheduleParams],
    queryFn: () =>
      workerSchedule({
        storeId: workerScheduleParams.storeId,
        userId: workerScheduleParams.userId,
        date: workerScheduleParams.date,
      }),
  });

export const useWorkerScheduleQuery = (dateInfo: string) => {
  // const params = useParams();
  const storeId = '2';
  const date = dateInfo;

  const workerScheduleParams = {
    storeId: storeId,
    userId: '2',
    date: date,
  };

  return useSuspenseQuery(workerScheduleQueryOptions(workerScheduleParams));
};

const workerSchedule = async ({
  storeId,
  userId,
  date,
}: WorkerScheduleParams) => {
  const scheduleOfWorker = await axios.get<WorkerScheduleResponse>(
    `/api/stores/${storeId}/workers/${userId}/schedules`,
    {
      params: { date },
    },
  );

  return scheduleOfWorker.data;
};

// useWorkerScheduleQuery({
//   ...workerScheduleQueryOptions(workerScheduleParams),
// });

// const queryClient = useQueryClient();

// queryClient.getQueryData(workerScheduleOptions().queryKey);

// queryClient.invalidateQueries({
//   queryKey: workerScheduleOptions().queryKey,
// });

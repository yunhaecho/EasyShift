import { queryOptions } from '@tanstack/react-query';
import axios from 'axios';
import { UserScheduleResponse } from './types';

// 데이터 있다 가정하고 부르기

interface UserScheduleParams {
  storeId: number | null | undefined;
  userId: number | null | undefined;
  date: string;
}

const getUserSchedule = async ({
  storeId,
  userId,
  date,
}: UserScheduleParams) => {
  const scheduleOfWorker = await axios.get<UserScheduleResponse>(
    `/api/stores/${storeId}/workers/${userId}/schedules`,
    {
      params: { date },
    },
  );

  return scheduleOfWorker.data;
};

export const userScheduleQueryOptions = (
  userScheduleParams: UserScheduleParams,
) =>
  queryOptions({
    queryKey: ['userSchedule', userScheduleParams],
    queryFn: () =>
      getUserSchedule({
        storeId: userScheduleParams.storeId as number,
        userId: userScheduleParams.userId as number,
        date: userScheduleParams.date,
      }),
    enabled:
      !!userScheduleParams.storeId &&
      !!userScheduleParams.userId &&
      !!userScheduleParams.date,
  });

// useWorkerScheduleQuery({
//   ...workerScheduleQueryOptions(workerScheduleParams),
// });

// const queryClient = useQueryClient();

// queryClient.getQueryData(workerScheduleOptions().queryKey);

// queryClient.invalidateQueries({
//   queryKey: workerScheduleOptions().queryKey,
// });

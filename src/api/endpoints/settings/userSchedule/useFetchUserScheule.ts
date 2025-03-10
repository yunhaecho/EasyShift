import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import axios from 'axios';
import { UserScheduleResponse } from './types';

// 데이터 있다 가정하고 부르기

type UserScheduleParams = {
  storeId: number;
  userId: number;
  date: string;
};

const userScheduleQueryOptions = (userScheduleParams: UserScheduleParams) =>
  queryOptions({
    queryKey: ['userSchedule', userScheduleParams],
    queryFn: () =>
      userSchedule({
        storeId: userScheduleParams.storeId,
        userId: userScheduleParams.userId,
        date: userScheduleParams.date,
      }),
  });

export const useUserScheduleQuery = (
  storeId: number,
  userId: number,
  dateInfo: string,
) => {
  // const params = useParams();
  const date = dateInfo;

  const userScheduleParams = {
    storeId,
    userId,
    date: date,
  };

  return useSuspenseQuery(userScheduleQueryOptions(userScheduleParams));
};

const userSchedule = async ({ storeId, userId, date }: UserScheduleParams) => {
  const scheduleOfWorker = await axios.get<UserScheduleResponse>(
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

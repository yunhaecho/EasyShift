'use client';

import { GetSchedulesScheduleIdAllResponse } from '@/api/endpoints/schedule/types';
import { schedulesQueryOptions } from '@/api/endpoints/schedule/useFetchAllSchedule';
import { storesQueryOptions } from '@/api/endpoints/stores/storesQueryOptions';
import { GetStoresStoreIdUsersResponse } from '@/api/endpoints/stores/types';
import { ScheduleDetailPageContext } from '@/app/context/ScheduleDetailPageContext';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

const ScheduleDetailPageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const params = useParams();
  const scheduleId = Number(params.scheduleId);
  const storeId = Number(params.storeId);

  const { data: scheduleData } =
    useSuspenseQuery<GetSchedulesScheduleIdAllResponse>(
      schedulesQueryOptions.getSchedulesScheduleIdAll(scheduleId),
    );

  const { data: workerData } = useSuspenseQuery<GetStoresStoreIdUsersResponse>(
    storesQueryOptions.getStoresStoreIdUsers(storeId),
  );

  return (
    <ScheduleDetailPageContext.Provider value={{ scheduleData, workerData }}>
      {children}
    </ScheduleDetailPageContext.Provider>
  );
};

export default ScheduleDetailPageProvider;

'use client';

import { useUserScheduleQuery } from '@/api/endpoints/settings/userSchedule/useFetchUserScheule';
import { storesQueryOptions } from '@/api/endpoints/stores/storesQueryOptions';
import UserPageContext from '@/app/context/UserPageContext';
import useMonthlyCalendar from '@/hooks/useMonthlyCalendar';
import { useSuspenseQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { useState } from 'react';

const UserPageProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: storesData } = useSuspenseQuery(storesQueryOptions.getStores());
  const [selectedStoreId, setSelectedStoreId] = useState<number | null>(
    storesData.stores[0].storeId || null,
  );

  const { currentMonth, currentYear } = useMonthlyCalendar();
  const date = new Date(currentYear, currentMonth);
  const { data: userScheduleData } = useUserScheduleQuery(
    selectedStoreId?.toString() || '',
    `${format(date, 'yyyy-MM')}`,
  );

  return (
    <UserPageContext.Provider
      value={{
        schedules: userScheduleData?.schedules || [],
        stores: storesData.stores || [],
        selectedStoreId,
        setSelectedStoreId,
      }}
    >
      {children}
    </UserPageContext.Provider>
  );
};

export default UserPageProvider;

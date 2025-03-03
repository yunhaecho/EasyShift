'use client';

import { storesQueryOptions } from '@/api/endpoints/stores/storesQueryOptions';
import { schedulesQueryOptions } from '@/api/endpoints/schedule/useFetchAllSchedule';
import { GetStoresStoreIdResponse } from '@/api/endpoints/stores/types';
import { GetSchedulesScheduleTemplateIdDateResponse } from '@/api/endpoints/schedule/types';
import { HomePageContext } from '@/app/context/HomePageContext';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useWeeklyCalendar from '../hooks/useWeeklyCalendar';

const HomePageProvider = ({
  children,
  storeId,
}: {
  children: React.ReactNode;
  storeId: number;
}) => {
  const { data: storeData } = useQuery<GetStoresStoreIdResponse>(
    storesQueryOptions.getStoresStoreId(storeId),
  );

  const [shifts, setShifts] =
    useState<GetSchedulesScheduleTemplateIdDateResponse | null>(
      storeData?.selectedScheduleTemplate || null,
    );
  const [selectedScheduleTemplateId, setSelectedScheduleTemplateId] = useState<
    number | null
  >(storeData?.selectedScheduleTemplate?.scheduleTemplateId || null);

  const { currentWeekDates, setCurrentDate, goToNextWeek, goToPreviousWeek } =
    useWeeklyCalendar();

  const queryClient = useQueryClient();

  const fetchShifts = async () => {
    if (!selectedScheduleTemplateId) {
      console.log('selectedScheduleTemplateId is null, skipping fetchShifts');
      return;
    }
    const response = await queryClient.fetchQuery(
      schedulesQueryOptions.getSchedulesScheduleTemplateIdDate(
        selectedScheduleTemplateId,
        currentWeekDates[0].fullDate.toISOString(),
      ),
    );
    setShifts(response);
  };

  const handleNextWeek = () => {
    goToNextWeek();
    fetchShifts();
  };

  const handlePreviousWeek = () => {
    goToPreviousWeek();
    fetchShifts();
  };

  return (
    <HomePageContext.Provider
      value={{
        storeData: storeData || null,
        shiftData: shifts || storeData?.selectedScheduleTemplate || null,
        selectedScheduleTemplateId,
        setSelectedScheduleTemplateId,
        currentWeekDates,
        setCurrentDate,
        goToNextWeek: handleNextWeek,
        goToPreviousWeek: handlePreviousWeek,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};

export default HomePageProvider;

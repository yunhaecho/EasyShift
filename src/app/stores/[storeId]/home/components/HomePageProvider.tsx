'use client';

import { storesQueryOptions } from '@/api/endpoints/stores/storesQueryOptions';
import { schedulesQueryOptions } from '@/api/endpoints/schedule/useFetchAllSchedule';
import { GetStoresStoreIdResponse } from '@/api/endpoints/stores/types';
import { HomePageContext } from '@/app/context/HomePageContext';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useWeeklyCalendar from '../hooks/useWeeklyCalendar';
import { useParams } from 'next/navigation';
import { addDays } from 'date-fns';
import { GetSchedulesScheduleTemplateIdDateResponse } from '@/api/endpoints/schedule/types';

const HomePageProvider = ({ children }: { children: React.ReactNode }) => {
  const { storeId } = useParams();
  const { currentWeekDates, setCurrentDate } = useWeeklyCalendar();

  const { data: storeData } = useSuspenseQuery<GetStoresStoreIdResponse>(
    storesQueryOptions.getStoresStoreId(parseInt(storeId as string)),
  );

  const [selectedScheduleTemplateId, setSelectedScheduleTemplateId] = useState<
    number | null
  >(storeData?.selectedScheduleTemplate?.scheduleTemplateId ?? null);
  const [showMyScheduleOnly, setShowMyScheduleOnly] = useState(false);

  const { data: shiftData } =
    useSuspenseQuery<GetSchedulesScheduleTemplateIdDateResponse>(
      schedulesQueryOptions.getSchedulesScheduleTemplateIdDate(
        selectedScheduleTemplateId || 0,
        currentWeekDates[0].fullDateString,
      ),
    );

  const goToNextWeek = () => {
    setCurrentDate(prevDate => addDays(prevDate, 7));
  };

  const goToPreviousWeek = () => {
    setCurrentDate(prevDate => addDays(prevDate, -7));
  };

  const handleSelectedScheduleTemplate = (scheduleTemplateId: number) => {
    setSelectedScheduleTemplateId(scheduleTemplateId);
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <HomePageContext.Provider
      value={{
        storeData: storeData || null,
        shiftData: shiftData?.shifts || null,
        selectedScheduleTemplateId,
        showMyScheduleOnly,
        setShowMyScheduleOnly,
        currentWeekDates,
        setCurrentDate,
        goToNextWeek,
        goToPreviousWeek,
        handleSelectedScheduleTemplate,
        handleToday,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};

export default HomePageProvider;

'use client';

import { storesQueryOptions } from '@/api/endpoints/stores/storesQueryOptions';
import { schedulesQueryOptions } from '@/api/endpoints/schedule/useFetchAllSchedule';
import {
  GetStoresStoreIdResponse,
  ShiftTemplateResponse,
} from '@/api/endpoints/stores/types';
import { HomePageContext } from '@/app/context/HomePageContext';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import useWeeklyCalendar from '../hooks/useWeeklyCalendar';
import { useParams } from 'next/navigation';
import { addDays } from 'date-fns';

const HomePageProvider = ({ children }: { children: React.ReactNode }) => {
  const { storeId } = useParams();
  const { data: storeData } = useQuery<GetStoresStoreIdResponse>(
    storesQueryOptions.getStoresStoreId(parseInt(storeId as string)),
  );
  const [shiftsData, setShiftsData] = useState<ShiftTemplateResponse[] | null>(
    null,
  );

  const [selectedScheduleTemplateId, setSelectedScheduleTemplateId] = useState<
    number | null
  >(storeData?.selectedScheduleTemplate?.scheduleTemplateId ?? null);
  const [showMyScheduleOnly, setShowMyScheduleOnly] = useState(false);

  const { currentWeekDates, setCurrentDate } = useWeeklyCalendar();

  const queryClient = useQueryClient();

  useEffect(() => {
    if (storeData?.selectedScheduleTemplate?.shifts && !shiftsData) {
      console.log(
        'Setting initial shiftsData from storeData:',
        storeData.selectedScheduleTemplate.shifts,
      );
      setShiftsData(storeData.selectedScheduleTemplate.shifts);
      setSelectedScheduleTemplateId(
        storeData.selectedScheduleTemplate.scheduleTemplateId,
      );
    }
  }, [storeData, shiftsData]);

  useEffect(() => {
    if (selectedScheduleTemplateId && currentWeekDates.length > 0) {
      fetchShifts(selectedScheduleTemplateId);
    }
  }, [currentWeekDates]);

  const fetchShifts = async (scheduleTemplateId: number) => {
    console.log(
      'Fetching shifts with date:',
      currentWeekDates[0].fullDateString,
    );
    try {
      const response = await queryClient.fetchQuery(
        schedulesQueryOptions.getSchedulesScheduleTemplateIdDate(
          scheduleTemplateId,
          currentWeekDates[0].fullDateString,
        ),
      );
      setShiftsData(response.shifts);
    } catch (error) {
      console.error('Error fetching shifts:', error);
    }
  };

  const goToNextWeek = () => {
    setCurrentDate(prevDate => addDays(prevDate, 7));
  };

  const goToPreviousWeek = () => {
    setCurrentDate(prevDate => addDays(prevDate, -7));
  };

  const handleSelectedScheduleTemplate = (scheduleTemplateId: number) => {
    setSelectedScheduleTemplateId(scheduleTemplateId);
    if (currentWeekDates.length > 0) {
      fetchShifts(scheduleTemplateId);
    }
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <HomePageContext.Provider
      value={{
        storeData: storeData || null,
        shiftData: shiftsData || null,
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

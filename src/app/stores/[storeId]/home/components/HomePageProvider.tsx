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

  const [shiftsData, setShiftsData] = useState<ShiftTemplateResponse[] | null>(
    null,
  );
  const [selectedScheduleTemplateId, setSelectedScheduleTemplateId] = useState<
    number | null
  >(null);
  const [showMyScheduleOnly, setShowMyScheduleOnly] = useState(false);

  const { currentWeekDates, setCurrentDate, goToNextWeek, goToPreviousWeek } =
    useWeeklyCalendar();

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
    if (selectedScheduleTemplateId) {
      console.log(
        'Fetching shifts after week update:',

        selectedScheduleTemplateId,
        currentWeekDates[0].fullDate.toISOString().split('T')[0],
      );
      fetchShifts(selectedScheduleTemplateId);
    }
  }, [currentWeekDates]);

  const fetchShifts = async (scheduleTemplateId: number) => {
    try {
      const response = await queryClient.fetchQuery(
        schedulesQueryOptions.getSchedulesScheduleTemplateIdDate(
          scheduleTemplateId,
          currentWeekDates[0].fullDate.toISOString().split('T')[0],
        ),
      );

      setShiftsData(response.shifts);
    } catch (error) {
      console.error('Error fetching shifts:', error);
    }
  };

  return (
    <HomePageContext.Provider
      value={{
        storeData: storeData || null,
        shiftData: shiftsData || null,
        selectedScheduleTemplateId,
        setSelectedScheduleTemplateId,
        showMyScheduleOnly,
        setShowMyScheduleOnly,
        currentWeekDates,
        setCurrentDate,
        goToNextWeek,
        goToPreviousWeek,
        fetchShifts,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};

export default HomePageProvider;

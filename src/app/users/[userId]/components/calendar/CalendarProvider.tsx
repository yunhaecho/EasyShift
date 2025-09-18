import React, { useContext } from 'react';
import { CalendarContext } from '@/app/context/CalendarContext';
import { useParams } from 'next/navigation';
import UserPageContext from '@/app/context/UserPageContext';
import useCalendarNavivation from '@/hooks/useMonthlyCalendar';
import { useQuery } from '@tanstack/react-query';
import { userScheduleQueryOptions } from '@/api/endpoints/settings/userSchedule/useFetchUserScheule';
const CalendarProvider = ({ children }: { children: React.ReactNode }) => {
  const { userId } = useParams();
  const { selectedStoreId } = useContext(UserPageContext);
  const { currentYear, currentMonth, goToPrevOrNextMonth } =
    useCalendarNavivation();

  const { data: userSchedulesData, isLoading } = useQuery(
    userScheduleQueryOptions({
      storeId: selectedStoreId,
      userId,
      date: `${currentYear}-${currentMonth + 1}`,
    }),
  );

  return (
    <CalendarContext.Provider
      value={{
        storeId: selectedStoreId,
        userId: Number(userId),
        currentMonth: currentMonth,
        currentYear: currentYear,
        schedules: userSchedulesData?.schedules ?? [],
        isLoading: isLoading,
        goToPrevOrNextMonth: goToPrevOrNextMonth,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarProvider;

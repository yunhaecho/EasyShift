import { useUserScheduleQuery } from '@/api/endpoints/settings/userSchedule/useFetchUserScheule';
import { format } from 'date-fns';
import { createContext } from 'react';
import useMonthlyCalendar from '@/hooks/useMonthlyCalendar';
import { JSX } from 'react';
import { UserScheduleResponse } from '@/api/endpoints/settings/userSchedule/types';

export const DialogContext = createContext<UserScheduleResponse>({
  schedules: [],
});

export const Provider = ({ children }: { children: JSX.Element[] }) => {
  const { currentMonth, currentYear } = useMonthlyCalendar();
  const date = new Date(currentYear, currentMonth);

  const { data } = useUserScheduleQuery('2', `${format(date, 'yyyy-MM')}`);

  return (
    <DialogContext.Provider value={data}>{children}</DialogContext.Provider>
  );
};

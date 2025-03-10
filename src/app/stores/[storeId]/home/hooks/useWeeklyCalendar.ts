'use client';

import { useMemo, useState } from 'react';
import { format, addDays, startOfWeek } from 'date-fns';

const useWeeklyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(() => new Date());

  const currentWeekDates = useMemo(() => {
    const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
    return Array.from({ length: 7 }).map((_, index) => {
      const date = addDays(weekStart, index);
      return {
        day: format(date, 'd'),
        month: format(date, 'MMM'),
        year: format(date, 'yyyy'),
        dayOfWeek: format(date, 'EEE'),
        fullDate: date,
      };
    });
  }, [currentDate]);

  return {
    currentWeekDates,
    setCurrentDate,
  };
};

export default useWeeklyCalendar;

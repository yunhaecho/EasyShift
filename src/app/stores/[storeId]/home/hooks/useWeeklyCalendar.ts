'use client';

import { useMemo, useState } from 'react';
import { getCurrentWeekDates } from '@/utils/dateUtils';

const useWeeklyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(() => new Date());

  const currentWeekDates = useMemo(() => {
    return getCurrentWeekDates(currentDate);
  }, [currentDate]);

  return {
    currentWeekDates,
    setCurrentDate,
  };
};

export default useWeeklyCalendar;

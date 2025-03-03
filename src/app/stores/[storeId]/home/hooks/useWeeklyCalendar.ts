'use client';

import { useCallback, useMemo, useState } from 'react';
import { getCurrentWeekDates } from '@/utils/dateUtils';
import { addWeeks, subWeeks } from 'date-fns';

const useWeeklyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const currentWeekDates = useMemo(
    () => getCurrentWeekDates(currentDate),
    [currentDate],
  );

  const goToPreviousWeek = useCallback(() => {
    setCurrentDate(prevDate => subWeeks(prevDate, 1));
  }, []);

  const goToNextWeek = useCallback(() => {
    setCurrentDate(prevDate => addWeeks(prevDate, 1));
  }, []);

  return {
    currentDate,
    setCurrentDate,
    currentWeekDates,
    goToPreviousWeek,
    goToNextWeek,
  };
};

export default useWeeklyCalendar;

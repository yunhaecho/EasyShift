'use client';

import { useCallback, useMemo, useState } from 'react';
import { getCurrentWeekDates } from '@/utils/dateUtils';
import {
  subWeeks,
  addWeeks,
  startOfMonth,
  endOfMonth,
  isWithinInterval,
} from 'date-fns';

const useScheduleCalendar = (initialDate: Date) => {
  const initialMonthStart = useMemo(
    () => startOfMonth(initialDate),
    [initialDate],
  );
  const initialMonthEnd = useMemo(() => endOfMonth(initialDate), [initialDate]);

  const [currentDate, setCurrentDate] = useState(initialMonthStart);

  const currentWeekDates = useMemo(() => {
    const weekDates = getCurrentWeekDates(currentDate);
    return weekDates.some(date =>
      isWithinInterval(date.fullDateString, {
        start: initialMonthStart,
        end: initialMonthEnd,
      }),
    )
      ? weekDates
      : [];
  }, [currentDate, initialMonthStart, initialMonthEnd]);

  const canGoPrevious = useMemo(() => {
    const previousWeekDates = getCurrentWeekDates(subWeeks(currentDate, 1));
    return previousWeekDates.some(date =>
      isWithinInterval(date.fullDateString, {
        start: initialMonthStart,
        end: initialMonthEnd,
      }),
    );
  }, [currentDate, initialMonthStart, initialMonthEnd]);

  const canGoNext = useMemo(() => {
    const nextWeekDates = getCurrentWeekDates(addWeeks(currentDate, 1));
    return nextWeekDates.some(date =>
      isWithinInterval(date.fullDateString, {
        start: initialMonthStart,
        end: initialMonthEnd,
      }),
    );
  }, [currentDate, initialMonthStart, initialMonthEnd]);

  const goToPreviousWeek = useCallback(() => {
    setCurrentDate(prevDate => {
      const newDate = subWeeks(prevDate, 1);
      const newWeekDates = getCurrentWeekDates(newDate);

      return newWeekDates.some(date =>
        isWithinInterval(date.fullDateString, {
          start: initialMonthStart,
          end: initialMonthEnd,
        }),
      )
        ? newDate
        : prevDate;
    });
  }, [initialMonthStart, initialMonthEnd]);

  const goToNextWeek = useCallback(() => {
    setCurrentDate(prevDate => {
      const newDate = addWeeks(prevDate, 1);
      const newWeekDates = getCurrentWeekDates(newDate);

      return newWeekDates.some(date =>
        isWithinInterval(date.fullDateString, {
          start: initialMonthStart,
          end: initialMonthEnd,
        }),
      )
        ? newDate
        : prevDate;
    });
  }, [initialMonthStart, initialMonthEnd]);

  return {
    currentDate,
    setCurrentDate,
    currentWeekDates,
    goToPreviousWeek,
    goToNextWeek,
    canGoPrevious,
    canGoNext,
  };
};

export default useScheduleCalendar;

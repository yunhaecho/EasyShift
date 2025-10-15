import {
  addDays,
  endOfMonth,
  endOfWeek,
  isSameDay,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import { useMemo, useState, useCallback } from 'react';

function useCalendarDays(currentMonth: Date) {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const calendarDays = useMemo(() => {
    const days = [];
    let day = calendarStart;
    while (day <= calendarEnd) {
      days.push(new Date(day));
      day = addDays(day, 1);
    }
    return days;
  }, [calendarStart, calendarEnd]);

  const resetSelectedDates = useCallback(() => {
    setSelectedDates([]);
  }, []);

  const handleDateClick = useCallback((date: Date) => {
    setSelectedDates(prevDates => {
      const isSelected = prevDates.some(d => isSameDay(d, date));
      return isSelected
        ? prevDates.filter(d => !isSameDay(d, date))
        : [...prevDates, date];
    });
  }, []);

  return {
    calendarDays,
    monthStart,
    monthEnd,
    selectedDates,
    resetSelectedDates,
    handleDateClick,
  };
}

export default useCalendarDays;

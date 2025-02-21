'use client';

import { useCallback, useMemo, useState } from 'react';
import { getCurrentWeekDates } from '@/utils/dateUtils';
import { subWeeks } from 'date-fns';
import { addWeeks } from 'date-fns';
import { WeekDate } from '../types';

interface CalendarHook {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
  currentWeekDates: WeekDate[];
  goToPreviousWeek: () => void;
  goToNextWeek: () => void;
  isWorkerInfoModalOpen: boolean;
  toggleWorkerInfoModal: () => void;
}

const useCalendar = (): CalendarHook => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isWorkerInfoModalOpen, setIsWorkerInfoModalOpen] = useState(false);

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

  const toggleWorkerInfoModal = useCallback(() => {
    setIsWorkerInfoModalOpen(prev => !prev);
  }, []);

  return {
    currentDate,
    setCurrentDate,
    currentWeekDates,
    goToPreviousWeek,
    goToNextWeek,
    isWorkerInfoModalOpen,
    toggleWorkerInfoModal,
  };
};

export default useCalendar;

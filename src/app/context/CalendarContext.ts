"use client"

import { UserSchedule } from '@/api/endpoints/schedule/userSchedule/types';
import { createContext } from 'react';

type CalendarContextType = {
  storeId: number | null;
  userId: number;
  currentMonth: number;
  currentYear: number;
  schedules: UserSchedule[];
  isLoading: boolean;
  goToPrevOrNextMonth: (deltaMonth: number) => void;
};

export const CalendarContext = createContext<CalendarContextType>({
  storeId: 0,
  userId: 0,
  currentMonth: 0,
  currentYear: 0,
  schedules: [],
  isLoading: false,
  goToPrevOrNextMonth: () => {},
});

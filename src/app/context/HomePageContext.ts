'use client';

import {
  GetStoresStoreIdResponse,
  ShiftTemplateResponse,
} from '@/api/endpoints/stores/types';
import { createContext } from 'react';
import { WeekDate } from '../stores/[storeId]/home/types';

export const HomePageContext = createContext<{
  storeData: GetStoresStoreIdResponse | null;
  shiftData: ShiftTemplateResponse[] | null;
  selectedScheduleTemplateId: number | null;
  setSelectedScheduleTemplateId: (id: number | null) => void;
  currentWeekDates: WeekDate[];
  setCurrentDate: (date: Date) => void;
  goToNextWeek: () => void;
  goToPreviousWeek: () => void;
  fetchShifts: (scheduleTemplateId: number) => void;
}>({
  storeData: null,
  shiftData: null,
  selectedScheduleTemplateId: null,
  setSelectedScheduleTemplateId: () => {},
  currentWeekDates: [],
  setCurrentDate: () => {},
  goToNextWeek: () => {},
  goToPreviousWeek: () => {},
  fetchShifts: () => {},
});

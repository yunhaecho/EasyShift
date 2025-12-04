'use client';

import {
  GetStoresStoreIdResponse,
  ShiftTemplateResponse,
} from '@/api/endpoints/stores/types';
import { createContext } from 'react';
import { WeekDate } from '../(app)/stores/[storeId]/home/types';

export const HomePageContext = createContext<{
  storeData: GetStoresStoreIdResponse | null;
  shiftData: ShiftTemplateResponse[] | null;
  selectedScheduleTemplateId: number | null;
  showMyScheduleOnly: boolean;
  setShowMyScheduleOnly: (show: boolean) => void;
  currentWeekDates: WeekDate[];
  setCurrentDate: (date: Date) => void;
  goToNextWeek: () => void;
  goToPreviousWeek: () => void;
  handleSelectedScheduleTemplate: (scheduleTemplateId: number) => void;

  handleToday: () => void;
}>({
  storeData: null,
  shiftData: null,
  selectedScheduleTemplateId: null,
  showMyScheduleOnly: false,
  setShowMyScheduleOnly: () => {},
  currentWeekDates: [],
  setCurrentDate: () => {},
  goToNextWeek: () => {},
  goToPreviousWeek: () => {},
  handleSelectedScheduleTemplate: () => {},
  handleToday: () => {},
});

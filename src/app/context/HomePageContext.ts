'use client';

import { GetStoresStoreIdResponse } from '@/api/endpoints/stores/types';
import { createContext } from 'react';
import { WeekDate } from '../stores/[storeId]/home/types';
import { GetSchedulesScheduleTemplateIdDateResponse } from '@/api/endpoints/schedule/types';

export const HomePageContext = createContext<{
  storeData: GetStoresStoreIdResponse | null;
  shiftData: GetSchedulesScheduleTemplateIdDateResponse | null;
  selectedScheduleTemplateId: number | null;
  setSelectedScheduleTemplateId: (id: number | null) => void;
  currentWeekDates: WeekDate[];
  setCurrentDate: (date: Date) => void;
  goToNextWeek: () => void;
  goToPreviousWeek: () => void;
}>({
  storeData: null,
  shiftData: null,
  selectedScheduleTemplateId: null,
  setSelectedScheduleTemplateId: () => {},
  currentWeekDates: [],
  setCurrentDate: () => {},
  goToNextWeek: () => {},
  goToPreviousWeek: () => {},
});

'use client';

import {
  GetSchedulesScheduleIdAllResponse,
  GetSchedulesScheduleIdLeaveRequestsResponse,
} from '@/api/endpoints/schedule/types';
import { GetStoresStoreIdUsersResponse } from '@/api/endpoints/stores/types';
import { createContext } from 'react';
import { WeekDate } from '../stores/[storeId]/home/types';

export const ScheduleDetailPageContext = createContext<{
  scheduleData: GetSchedulesScheduleIdAllResponse | null;
  workerData: GetStoresStoreIdUsersResponse | null;
  leaveRequestData: GetSchedulesScheduleIdLeaveRequestsResponse | null;
  currentWeekDates: WeekDate[];
  goToNextWeek: () => void;
  goToPreviousWeek: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}>({
  scheduleData: null,
  workerData: null,
  leaveRequestData: null,
  currentWeekDates: [],
  goToNextWeek: () => {},
  goToPreviousWeek: () => {},
  canGoNext: false,
  canGoPrevious: false,
});

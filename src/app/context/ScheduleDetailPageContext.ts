'use client';

import {
  GetSchedulesScheduleIdAllResponse,
  GetSchedulesScheduleIdLeaveRequestsResponse,
} from '@/api/endpoints/schedule/types';
import { GetStoresStoreIdUsersResponse } from '@/api/endpoints/stores/types';
import { createContext } from 'react';

export const ScheduleDetailPageContext = createContext<{
  scheduleData: GetSchedulesScheduleIdAllResponse | null;
  workerData: GetStoresStoreIdUsersResponse | null;
  leaveRequestData: GetSchedulesScheduleIdLeaveRequestsResponse | null;
}>({
  scheduleData: null,
  workerData: null,
  leaveRequestData: null,
});

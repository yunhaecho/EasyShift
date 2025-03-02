'use client';

import { GetSchedulesScheduleIdAllResponse } from '@/api/endpoints/schedule/types';
import { GetStoresStoreIdUsersResponse } from '@/api/endpoints/stores/types';
import { createContext } from 'react';

export const ScheduleDetailPageContext = createContext<{
  scheduleData: GetSchedulesScheduleIdAllResponse | null;
  workerData: GetStoresStoreIdUsersResponse | null;
}>({
  scheduleData: null,
  workerData: null,
});

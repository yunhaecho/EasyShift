'use client';

import {
  GetStoresStoreIdScheduleTemplatesResponse,
  GetStoresStoreIdUsersResponse,
} from '@/api/endpoints/stores/types';
import { createContext } from 'react';

export const SettingsPageContext = createContext<{
  storeUserData: GetStoresStoreIdUsersResponse | null;
  scheduleTemplateData: GetStoresStoreIdScheduleTemplatesResponse | null;
}>({
  storeUserData: null,
  scheduleTemplateData: null,
});

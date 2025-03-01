'use client';

import { GetStoresStoreIdResponse } from '@/api/endpoints/stores/types';
import { createContext } from 'react';

export const HomePageContext = createContext<{
  data: GetStoresStoreIdResponse | null;
  selectedScheduleTemplateId: string | null;
  setSelectedScheduleTemplateId: (id: string | null) => void;
}>({
  data: null,
  selectedScheduleTemplateId: null,
  setSelectedScheduleTemplateId: () => {},
});

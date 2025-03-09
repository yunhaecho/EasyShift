'use client';

import { UserSchedule } from '@/api/endpoints/settings/userSchedule/types';
import { Store } from '@/api/endpoints/stores/types';
import { createContext } from 'react';

interface UserPageContextType {
  schedules: UserSchedule[];
  stores: Store[];
  selectedStoreId: number | null;
  setSelectedStoreId: (storeId: number | null) => void;
}

const UserPageContext = createContext<UserPageContextType>({
  schedules: [],
  stores: [],
  selectedStoreId: null,
  setSelectedStoreId: () => {},
});

export default UserPageContext;

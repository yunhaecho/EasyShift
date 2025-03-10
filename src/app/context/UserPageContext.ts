'use client';

import { GetStoresResponse } from '@/api/endpoints/stores/types';
import { createContext } from 'react';

interface UserPageContextType {
  stores: GetStoresResponse['stores'] | null;
  selectedStoreId: number | null;
  setSelectedStoreId: (storeId: number | null) => void;
}

const UserPageContext = createContext<UserPageContextType>({
  stores: null,
  selectedStoreId: null,
  setSelectedStoreId: () => {},
});

export default UserPageContext;

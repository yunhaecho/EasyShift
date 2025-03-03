import { GetStoresResponse } from '@/api/endpoints/stores/types';
import { createContext } from 'react';

export const GlobalNavBarContext = createContext<{
  data: GetStoresResponse | null;
  selectedStoreId: number | null;
  setSelectedStoreId: (storeId: number) => void;
}>({
  data: null,
  selectedStoreId: null,
  setSelectedStoreId: () => {},
});

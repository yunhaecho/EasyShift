import { Store } from '@/api/endpoints/stores/types';
import { createContext } from 'react';

export const GlobalNavBarContext = createContext<{
  storeMockData: Store[] | null;
  addStore: (store: Store) => void;
  deleteStore: (storeId: number) => void;
}>({
  storeMockData: null,
  addStore: () => {},
  deleteStore: () => {},
});

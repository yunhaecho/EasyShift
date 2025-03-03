import { GetStoresResponse } from '@/api/endpoints/stores/types';
import { createContext } from 'react';

export const GlobalNavBarContext = createContext<{
  data: GetStoresResponse | null;
}>({
  data: null,
});

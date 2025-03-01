import axios from 'axios';
import { queryKeys } from './stores.keys';
import { GetStoresResponse } from './types';
const getStores = async () => {
  const response = await axios.get<GetStoresResponse>('/api/stores');
  return response.data;
};

export const storesQueryOptions = {
  getStores: () => ({
    queryKey: queryKeys.stores,
    queryFn: getStores,
  }),
};

import axios from 'axios';
import { queryKeys } from './stores.keys';
import { GetStoresResponse, GetStoresStoreIdResponse } from './types';

/* 매장 목록 조회 */
const getStores = async () => {
  const response = await axios.get<GetStoresResponse>('/api/stores');
  return response.data;
};

/* 매장 Home 조회 */
const getStoresStoreId = async (storeId: string) => {
  const response = await axios.get<GetStoresStoreIdResponse>(
    `/api/stores/${storeId}`,
  );
  return response.data;
};

export const storesQueryOptions = {
  getStores: () => ({
    queryKey: queryKeys.stores,
    queryFn: getStores,
  }),
  getStoresStoreId: (storeId: string) => ({
    queryKey: queryKeys.storesStoreId(storeId),
    queryFn: () => getStoresStoreId(storeId),
  }),
};

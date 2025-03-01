import axios from 'axios';
import { queryKeys } from './stores.keys';
import {
  GetStoresResponse,
  GetStoresStoreIdResponse,
  GetStoresStoreIdScheduleTemplatesResponse,
  GetStoresStoreIdUsersResponse,
} from './types';

/* 매장 목록 조회 */
const getStores = async () => {
  const response = await axios.get<GetStoresResponse>('/api/stores');
  return response.data;
};

/* 매장 Home 조회 */
const getStoresStoreId = async (storeId: number) => {
  const response = await axios.get<GetStoresStoreIdResponse>(
    `/api/stores/${storeId}`,
  );
  return response.data;
};

/* 매장 스케줄 템플릿 목록 조회 */
const getStoresStoreIdScheduleTemplates = async (storeId: number) => {
  const response = await axios.get<GetStoresStoreIdScheduleTemplatesResponse>(
    `/api/stores/${storeId}/schedule-templates`,
  );
  return response.data;
};

/* 매장 사용자 목록 조회 */
const getStoresStoreIdUsers = async (storeId: number) => {
  const response = await axios.get<GetStoresStoreIdUsersResponse>(
    `/api/stores/${storeId}/users`,
  );
  return response.data;
};

export const storesQueryOptions = {
  getStores: () => ({
    queryKey: queryKeys.stores,
    queryFn: getStores,
  }),
  getStoresStoreId: (storeId: number) => ({
    queryKey: queryKeys.storesStoreId(storeId),
    queryFn: () => getStoresStoreId(storeId),
  }),
  getStoresStoreIdScheduleTemplates: (storeId: number) => ({
    queryKey: queryKeys.storesStoreIdScheduleTemplates(storeId),
    queryFn: () => getStoresStoreIdScheduleTemplates(storeId),
  }),
  getStoresStoreIdUsers: (storeId: number) => ({
    queryKey: queryKeys.storesStoreIdUsers(storeId),
    queryFn: () => getStoresStoreIdUsers(storeId),
  }),
};

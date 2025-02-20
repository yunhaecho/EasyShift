import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { queryKeys } from './stores.keys';
import { FetchHomeResponse } from './stores';

const fetchHome = async ({ queryKey }: { queryKey: readonly unknown[] }) => {
  const [, storeId] = queryKey as [string, string];

  if (!storeId) {
    throw new Error('storeId is required');
  }

  const response = await axios.get<FetchHomeResponse>(`/api/stores`, {
    params: { storeId },
  });

  return response.data;
};

export const useFetchHome = (
  props: { storeId?: string } = { storeId: '1' },
) => {
  const { storeId = '1' } = props;

  return useQuery({
    queryKey: queryKeys.home(storeId),
    queryFn: fetchHome,
  });
};

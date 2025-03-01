import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { queryKeys } from './stores.keys';
import { FetchHomeResponse } from './types';

const fetchHome = async ({ queryKey }: { queryKey: readonly unknown[] }) => {
  const [, storeId, selectedScheduleId] = queryKey as [
    string,
    string,
    string | undefined,
  ];

  if (!storeId) {
    throw new Error('storeId is required');
  }

  const response = await axios.get<FetchHomeResponse>(`/api/stores`, {
    params: { storeId, selectedScheduleId },
  });

  return response.data;
};

export const useFetchHome = (props: {
  storeId: string;
  selectedScheduleId?: string;
}) => {
  const { storeId, selectedScheduleId } = props;
  return useQuery({
    queryKey: queryKeys.home(storeId, selectedScheduleId),
    queryFn: fetchHome,
    enabled: !!storeId,
  });
};

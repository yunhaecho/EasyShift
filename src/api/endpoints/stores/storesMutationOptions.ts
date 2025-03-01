import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { queryKeys } from './stores.keys';
import { PostStoreRequest } from './types';

/* 매장 생성 */
const postStore = async (storeData: PostStoreRequest) => {
  const response = await axios.post('/api/stores', storeData);
  return response.data;
};

export const useStoresMutationOptions = () => {
  const queryClient = useQueryClient();

  return {
    postStore: (storeData: PostStoreRequest) => ({
      mutationFn: () => postStore(storeData),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: queryKeys.stores });
      },
    }),
  };
};

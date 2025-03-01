import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { queryKeys } from './stores.keys';
import { PostStoreRequest } from './types';
import toast from 'react-hot-toast';

/* 매장 생성 */
const postStore = async (storeData: PostStoreRequest) => {
  const response = await axios.post('/api/stores', storeData);
  return response.data;
};

export const usePostStore = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (storeData: PostStoreRequest) => postStore(storeData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.stores });
      toast.success('Store created successfully');
    },
    onError: () => {
      toast.error('Failed to create store');
    },
  });
};

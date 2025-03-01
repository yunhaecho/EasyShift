import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { queryKeys } from './stores.keys';
import { CreateStoreRequest } from './types';
import toast from 'react-hot-toast';

const createStore = async (storeData: CreateStoreRequest) => {
  const response = await axios.post('/api/stores', storeData);
  return response.data;
};

export const useCreateStoreMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (storeData: CreateStoreRequest) => createStore(storeData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.stores });
      toast.success('Store created successfully');
    },
    onError: () => {
      toast.error('Failed to create store');
    },
  });
};

import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { UpdateStoreRequest } from './types';
import { queryKeys } from './stores.keys';
import toast from 'react-hot-toast';

const updateStore = async (storeId: number, storeData: UpdateStoreRequest) => {
  const response = await axios.patch(`/api/stores/${storeId}`, storeData);
  return response.data;
};

export const useUpdateStoreMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      storeId,
      storeData,
    }: {
      storeId: number;
      storeData: UpdateStoreRequest;
    }) => updateStore(storeId, storeData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.stores });
      toast.success('Store updated successfully');
    },
    onError: () => {
      toast.error('Failed to update store');
    },
  });
};

import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { queryKeys } from './stores.keys';
import toast from 'react-hot-toast';

const deleteStore = async (storeId: number) => {
  const response = await axios.delete(`/api/stores/${storeId}`);
  return response.data;
};

export const useDeleteStoreMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ storeId }: { storeId: number }) => deleteStore(storeId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.stores });
      toast.success('Store deleted successfully');
    },
    onError: () => {
      toast.error('Failed to delete store');
    },
  });
};

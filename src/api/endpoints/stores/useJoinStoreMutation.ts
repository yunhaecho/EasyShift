import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { queryKeys } from './stores.keys';
import toast from 'react-hot-toast';

const joinStore = async (storeCode: string) => {
  const response = await axios.post(`/api/stores/join`, {
    storeCode,
  });
  return response.data;
};

const useJoinStoreMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: joinStore,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.stores,
      });
      toast.success('Joined the store successfully');
    },
    onError: () => {
      toast.error('Failed to join the store');
    },
  });
};

export default useJoinStoreMutation;

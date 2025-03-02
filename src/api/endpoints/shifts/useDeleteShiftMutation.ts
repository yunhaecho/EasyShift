import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { queryKeys } from './shifts.keys';

const deleteShift = async (shiftId: number) => {
  const response = await axios.delete(`/api/shifts/${shiftId}`);
  return response.data;
};

const useDeleteShiftMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteShift,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.shifts,
      });
      toast.success('Shift deleted successfully');
    },
    onError: () => {
      toast.error('Failed to delete shift');
    },
  });
};

export default useDeleteShiftMutation;

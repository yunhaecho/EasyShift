import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { queryKeys } from './shifts.keys';
import toast from 'react-hot-toast';

const updateShift = async (shiftId: number, userId: number) => {
  const response = await axios.patch(`/api/shifts/${shiftId}`, { userId });
  return response.data;
};

const useUpdateShiftMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ shiftId, userId }: { shiftId: number; userId: number }) =>
      updateShift(shiftId, userId),
    onSuccess: (_, { shiftId, userId }) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.shiftsShiftIdUserId(shiftId, userId),
      });
      toast.success('Shift updated successfully');
    },
    onError: () => {
      toast.error('Failed to update shift');
    },
  });
};

export default useUpdateShiftMutation;

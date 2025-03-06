import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { LeaveRequest } from './types';
import toast from 'react-hot-toast';
import { queryKeys } from './stores.keys';

const createLeaveRequest = async ({
  scheduleId,
  leaveRequest,
}: {
  scheduleId: number;
  leaveRequest: LeaveRequest;
}) => {
  const response = await axios.post(
    `/api/schedules/${scheduleId}/leave-requests`,
    leaveRequest,
  );
  return response.data;
};

const useCreateLeaveRequestMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createLeaveRequest,
    onSuccess: (_, { scheduleId }) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.schedulesScheduleIdLeaveRequests(scheduleId),
      });
      toast.success('Leave request submitted successfully');
    },
    onError: () => {
      toast.error('Failed to submit leave request');
    },
  });
};

export default useCreateLeaveRequestMutation;

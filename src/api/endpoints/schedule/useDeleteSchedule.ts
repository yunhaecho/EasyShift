import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const deleteSchedulesMutation = async (scheduleId: string) => {
  const response = await axios.delete(`/api/schedules/${scheduleId}`, {
    headers: {
      Authorization: `Bearer 1234`, //temp
    },
  });
  return response.data;
};

export const useDeleteScheduleMutation = () => {
  return useMutation({
    mutationFn: (scheduleId: string) => deleteSchedulesMutation(scheduleId),
  });
};

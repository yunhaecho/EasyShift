import { API_CONFIG } from '@/api/config';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

export const fetchGeneratedScheduleMutation = async (
  scheduleId: string,
  token: string,
) => {
  const response = await axios.post(
    API_CONFIG.ENDPOINTS.SCHEDULES.GET_AUTO_ASSIGN_SCHEDULE(scheduleId),
    {},
    {
      headers: {
        Authorization: `${token}`,
      },
    },
  );
  return response.data;
};

export const useFetchGeneratedScheduleMutation = (scheduleId: string) => {
  return useMutation({
    mutationFn: () => {
      const accessToken = Cookies.get('accessToken');
      if (!accessToken) {
        toast.error('Access token is required');
        throw new Error('Access token is required');
      }
      return fetchGeneratedScheduleMutation(scheduleId, accessToken);
    },
    onSuccess: () => {
      toast.success('생성 완료!', { id: 'generate-schdule-toast' });
    },
    onError: () => {
      toast.error('생성 실패', { id: 'generate-schedule-toast' });
    },
  });
};

import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { queryKeys } from './stores.keys';
import toast from 'react-hot-toast';

const deleteScheduleTemplate = async (scheduleTemplateId: number) => {
  const response = await axios.delete(
    `/api/schedule-templates/${scheduleTemplateId}`,
  );
  return response.data;
};

const useDeleteScheduleTemplateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteScheduleTemplate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.scheduleTemplates });
      toast.success('Schedule template deleted successfully');
    },
    onError: () => {
      toast.error('Failed to delete schedule template');
    },
  });
};

export default useDeleteScheduleTemplateMutation;

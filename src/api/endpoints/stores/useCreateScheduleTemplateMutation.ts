import axios from 'axios';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateScheduleTemplateRequest } from './types';
import { queryKeys } from './stores.keys';
import toast from 'react-hot-toast';

const createScheduleTemplate = async (
  storeId: number,
  scheduleTemplateData: CreateScheduleTemplateRequest,
) => {
  const response = await axios.post(
    `/api/stores/${storeId}/schedule-templates`,
    scheduleTemplateData,
  );
  return response.data;
};

export const useCreateScheduleTemplateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      storeId,
      scheduleTemplateData,
    }: {
      storeId: number;
      scheduleTemplateData: CreateScheduleTemplateRequest;
    }) => createScheduleTemplate(storeId, scheduleTemplateData),
    onSuccess: (_, { storeId }) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.storesStoreIdScheduleTemplates(storeId),
      });
      toast.success('Schedule template created successfully');
    },
    onError: () => {
      toast.error('Failed to create schedule template');
    },
  });
};

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export type AddNewScheduleQueryParamsProps = {
  storeId: string;
  scheduleTemplateId: number;
  scheduleName: string;
  scheduleMonth: string;
  description: string;
  shiftDetails: Array<{
    shiftTemplateId: number;
    expectedWorkers: number;
  }>;
};

const AddNewScheduleMutation = async (
  addNewScheduleQueryParams: AddNewScheduleQueryParamsProps,
) => {
  const response = await axios.post<AddNewScheduleQueryParamsProps>(
    '/api/schedules/',
    addNewScheduleQueryParams,
  );
  return response;
};

export const useAddNewScheduleMutation = () => {
  return useMutation({
    mutationFn: (addNewScheduleQueryParams: AddNewScheduleQueryParamsProps) =>
      AddNewScheduleMutation(addNewScheduleQueryParams),
  });
};

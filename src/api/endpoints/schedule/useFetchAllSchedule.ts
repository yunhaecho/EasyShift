import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FetchAllSchedulesResponse } from './schedules';
import { useParams } from 'next/navigation';
import { queryKeys } from './schedules.keys';
import {
  GetSchedulesScheduleIdAllResponse,
  GetSchedulesScheduleTemplateIdDateResponse,
} from './types';

export const fetchSchedules = async (storeId: string) => {
  const allSchedule = await axios.get<FetchAllSchedulesResponse>(
    `/api/stores/${storeId}/schedules`,
  );

  return allSchedule.data.schedules;
};

export const useFetchSchedule = (shiftDate?: string, status?: string) => {
  const { storeId } = useParams();

  return useQuery({
    queryKey: ['schedule', { shiftDate, status }],
    queryFn: () => fetchSchedules(storeId as string),
    enabled: !!storeId,
    staleTime: 1000 * 5,
  });
};

/* 스케줄 조회(all) */
const getSchedulesScheduleIdAll = async (scheduleId: number) => {
  const response = await axios.get<GetSchedulesScheduleIdAllResponse>(
    `/api/schedules/${scheduleId}/all`,
  );

  return response.data;
};

/* 일주일치 스케줄 조회(캘린더 인디케이터) */
const getSchedulesScheduleTemplateIdDate = async (
  scheduleTemplateId: number,
  date: string,
) => {
  const response = await axios.get<GetSchedulesScheduleTemplateIdDateResponse>(
    `/api/schedules/${scheduleTemplateId}?date=${date}`,
  );

  return response.data;
};

export const schedulesQueryOptions = {
  getSchedulesScheduleTemplateIdDate: (
    scheduleTemplateId: number,
    date: string,
  ) => ({
    queryKey: queryKeys.schedulesScheduleTemplateIdDate(
      scheduleTemplateId,
      date,
    ),
    queryFn: () => getSchedulesScheduleTemplateIdDate(scheduleTemplateId, date),
  }),
  getSchedulesScheduleIdAll: (scheduleId: number) => ({
    queryKey: queryKeys.schedulesScheduleIdAll(scheduleId),
    queryFn: () => getSchedulesScheduleIdAll(scheduleId),
  }),
};

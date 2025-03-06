import { queryOptions, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { queryKeys } from './schedules.keys';
import {
  FetchAllSchedulesResponse,
  GetSchedulesScheduleIdAllResponse,
  GetSchedulesScheduleIdLeaveRequestsResponse,
  GetSchedulesScheduleTemplateIdDateResponse,
} from './types';

const fetchSchedulesQueryOptions = (
  storeId: number,
  shiftDate?: string,
  status?: string,
) =>
  queryOptions({
    queryKey: ['schedule', { shiftDate, status }],
    queryFn: () => fetchSchedulesQuery(storeId),
  });

export const fetchSchedulesQuery = async (storeId: number) => {
  const allSchedule = await axios.get<FetchAllSchedulesResponse>(
    `/api/stores/${storeId}/schedules`,
  );

  return allSchedule.data.schedules;
};

export const useFetchAllScheduleQuery = (
  shiftDate?: string,
  status?: string,
) => {
  const { storeId } = useParams();

  return useQuery(
    fetchSchedulesQueryOptions(parseInt(storeId as string), shiftDate, status),
  );
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

/* 휴무 신청 유저 조회 */
const getScheduleScheduleIdLeaveRequests = async (scheduleId: number) => {
  const response = await axios.get<GetSchedulesScheduleIdLeaveRequestsResponse>(
    `/api/schedules/${scheduleId}/leave-requests`,
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
  getScheduleScheduleIdLeaveRequests: (scheduleId: number) => ({
    queryKey: queryKeys.schedulesScheduleIdLeaveRequests(scheduleId),
    queryFn: () => getScheduleScheduleIdLeaveRequests(scheduleId),
  }),
};

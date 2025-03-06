import { ShiftTemplateResponse, User } from '../stores/types';

export type GetSchedulesScheduleTemplateIdDateResponse = {
  scheduleTemplateId: number;
  scheduleTemplateName: string;
  shifts: Array<ShiftTemplateResponse>;
};

export type GetSchedulesScheduleIdAllResponse = {
  scheduleId: number;
  scheduleName: string;
  shifts: Array<ShiftTemplateResponse>;
};

export type GetSchedulesScheduleIdLeaveRequestsResponse = {
  schedule: {
    scheduleId: number;
    scheduleName: string;
  };
  users: Array<User>;
};

export type FetchAllSchedulesResponse = {
  schedules: Array<{
    id: string;
    scheduleName: string;
    shiftDate: string;
    status: string;
    description: string;
  }>;
};

export type LeaveRequest = Array<string>;

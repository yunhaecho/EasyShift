import { ShiftTemplateResponse } from '../stores/types';

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

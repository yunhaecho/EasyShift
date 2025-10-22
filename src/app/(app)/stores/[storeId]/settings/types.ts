export type Worker = {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  avatarUrl: string;
  role: string;
};

export type ScheduleTemplate = {
  id: number;
  name: string;
  shifts: Shift[];
};

export type Shift = {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
};

//스케줄 생성 api type
export type ShiftDetail = {
  shiftTemplateId: number;
  expectedWorkers: number;
};

export type AddNewScheduleParams = {
  storeId: string;
  scheduleTemplateId: number;
  scheduleName: string;
  scheduleMonth: string;
  description: string;
  shiftDetails: ShiftDetail[];
};

import { LeaveRequest } from '../schedule/types';

export type GetStoresResponse = {
  stores: Array<Store>;
};

export type StoreRequest = {
  storeName: string;
  description: string;
};

export type CreateStoreRequest = StoreRequest;

export type UpdateStoreRequest = StoreRequest;

export type GetStoresStoreIdResponse = {
  storeId: number;
  scheduleTemplates: Array<{
    scheduleTemplateId: number;
    scheduleTemplateName: string;
  }>;
  selectedScheduleTemplate: {
    scheduleTemplateId: number;
    scheduleTemplateName: string;
    shifts: Array<ShiftTemplateResponse>;
  };
};

export type GetStoresStoreIdScheduleTemplatesResponse = {
  scheduleTemplates: Array<{
    scheduleTemplateId: number;
    scheduleTemplateName: string;
    shiftTemplates: Array<ShiftTemplate>;
  }>;
};

export type CreateScheduleTemplateRequest = {
  scheduleTemplateName: string;
  shiftTemplates: Array<{
    shiftTemplateName: string;
    startTime: string;
    endTime: string;
  }>;
};

export type GetStoresStoreIdUsersResponse = {
  storeId: number;
  storeName: string;
  description: string;
  users: Array<User>;
};

export type ShiftTemplateResponse = {
  shiftTemplateId: number;
  shiftTemplateName: string;
  startTime: string;
  endTime: string;
  dates: Array<{
    date: string;
    assignedShifts: Array<{
      shiftId: number;
      userId: number;
      userName: string;
    }>;
  }>;
};

export type Store = {
  storeId: number;
  storeName: string;
  description: string;
};

export type ScheduleTemplate = {
  scheduleTemplateId: number;
  scheduleTemplateName: string;
  shiftTemplates: Array<ShiftTemplate>;
};

export type ShiftTemplate = {
  shiftTemplateName: string;
  startTime: string;
  endTime: string;
};

export type User = {
  userId: number;
  name: string;
  email?: string;
  phoneNumber?: string;
  avatarUrl?: string;
  leaveRequests?: LeaveRequest;
};

export type GetStoresInfoStoreCodeResponse = {
  storeId: number;
  storeName: string;
  description: string;
};

export type JoinStoreRequest = {
  storeCode: string;
};

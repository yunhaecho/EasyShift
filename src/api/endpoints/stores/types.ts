export type PostStoreRequest = {
  storeName: string;
  description: string;
};

export type GetStoresResponse = {
  stores: Array<Store>;
};

export type GetStoresStoreIdResponse = {
  storeId: number;
  scheduleTemplates: Array<{
    scheduleTemplateId: number;
    scheduleTemplateName: string;
  }>;
  selectedScheduleTemplate: {
    scheduleTemplateId: number;
    scheduleTemplateName: string;
    shifts: Array<{
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
    }>;
  };
};

export type Store = {
  storeId: number;
  storeName: string;
  description: string;
};

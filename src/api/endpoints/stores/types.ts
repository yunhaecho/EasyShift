export type PostStoreRequest = {
  storeName: string;
  description: string;
};

export type GetStoresResponse = {
  stores: Array<Store>;
};

export type Store = {
  storeId: number;
  storeName: string;
  description: string;
};

export interface FetchHomeResponse {
  storeId: number;
  schedules: Array<{
    scheduleId: number;
    scheduleName: string;
  }>;
  selectedSchedule: {
    scheduleId: number;
    scheduleName: string;
    shifts: Array<{
      shiftId: number;
      shiftName: string;
      startTime: string;
      endTime: string;
      dates: Array<{
        date: string;
        assignedShifts: Array<{
          assignedShiftId: number;
          userId: number;
          userName: string;
        }>;
      }>;
    }>;
  };
}

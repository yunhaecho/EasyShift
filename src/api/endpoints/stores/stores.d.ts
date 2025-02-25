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

export interface FetchHomeResponse {
  id: number;
  name: string;
  schedules: Array<{
    id: number;
    scheduleName: string;
  }>;
  selectedSchedule: {
    id: number;
    scheduleName: string;
    shifts: Array<{
      id: number;
      shiftName: string;
      startTime: string;
      endTime: string;
      dates: Array<{
        id: number;
        shiftDate: string;
        assignedUser: Array<{
          id: number;
          name: string;
        }>;
      }>;
    }>;
  };
}

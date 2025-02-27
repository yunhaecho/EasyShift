export type FetchAllSchedulesResponse = {
  schedules: Array<{
    id: number;
    scheduleName: string;
    shiftDate: string;
    status: string;
    description: string;
  }>;
};

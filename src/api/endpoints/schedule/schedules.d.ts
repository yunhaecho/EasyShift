export type FetchAllSchedulesResponse = {
  schedules: Array<{
    id: string;
    scheduleName: string;
    shiftDate: string;
    status: string;
    description: string;
  }>;
};

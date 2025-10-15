export type UserSchedule = {
  id: string;
  scheduleName: string;
  shifts: Array<{
    id: string;
    shiftDate: string;
    shiftName: string;
    startTime: string;
    endTime: string;
  }>;
};

export type UserScheduleResponse = {
  schedules: UserSchedule[];
};

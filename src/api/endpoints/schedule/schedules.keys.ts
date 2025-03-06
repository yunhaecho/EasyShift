export const queryKeys = {
  schedules: ['schedules'] as const,
  schedulesScheduleTemplateIdDate: (scheduleTemplateId: number, date: string) =>
    [...queryKeys.schedules, scheduleTemplateId, date] as const,
  schedulesScheduleIdAll: (scheduleId: number) =>
    [...queryKeys.schedules, scheduleId] as const,

  leaveRequests: ['leave-requests'] as const,
  schedulesScheduleIdLeaveRequests: (scheduleId: number) =>
    [...queryKeys.leaveRequests, scheduleId] as const,
};

import { UserSchedule } from '@/api/endpoints/settings/userSchedule/types';

/**
 * 스케줄별 쉬프트 요약
 * @param schedules
 * @returns {Record<string, Record<string, number>>}
 */
export const getShiftSummaryBySchedule = (schedules: UserSchedule[]) => {
  const summary: Record<string, Record<string, number>> = {};

  schedules.forEach(schedule => {
    const { scheduleName, shifts } = schedule;

    if (!summary[scheduleName]) {
      summary[scheduleName] = {};
    }

    shifts.forEach(shift => {
      const { shiftName } = shift;
      summary[scheduleName][shiftName] =
        (summary[scheduleName][shiftName] || 0) + 1;
    });
  });

  return summary;
};

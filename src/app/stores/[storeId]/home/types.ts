import { FetchHomeResponse } from '@/api/endpoints/stores/stores';

export interface WeeklyCalendarProps {
  currentDate: Date;
  data: FetchHomeResponse;
}

export interface WeeklyNavigatorProps {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
}

export interface Schedule {
  shifts: number[];
}

export interface ModalContentProps {
  schedules: Schedule[];
  addSchedule: () => void;
  addShift: (scheduleIndex: number) => void;
  deleteSchedule: (scheduleIndex: number) => void;
  deleteShift: (scheduleIndex: number, shiftIndex: number) => void;
}

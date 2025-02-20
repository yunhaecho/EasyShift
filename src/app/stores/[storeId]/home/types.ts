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
  id: string;
  name: string;
  shifts: {
    id: number;
    name: string;
    startTime: string;
    endTime: string;
  }[];
}

export interface WeekDate {
  day: string;
  month: string;
  year: string;
  dayOfWeek: string;
  fullDate: Date;
}

export type WeekDates = [
  WeekDate,
  WeekDate,
  WeekDate,
  WeekDate,
  WeekDate,
  WeekDate,
  WeekDate,
];

export interface ModalContentProps {
  schedules: Schedule[];
  addSchedule: () => void;
  addShift: (scheduleIndex: number) => void;
  deleteSchedule: (scheduleIndex: number) => void;
  deleteShift: (scheduleIndex: number, shiftIndex: number) => void;
}

export interface Schedule {
  shifts: number[];
}

export interface WeekDate {
  day: string;
  month: string;
  year: string;
  dayOfWeek: string;
  fullDate: Date;
}

export interface ModalContentProps {
  schedules: Schedule[];
  addSchedule: () => void;
  addShift: (scheduleIndex: number) => void;
  deleteSchedule: (scheduleIndex: number) => void;
  deleteShift: (scheduleIndex: number, shiftIndex: number) => void;
}

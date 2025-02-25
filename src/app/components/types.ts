import { Schedule } from '../stores/[storeId]/home/types';

export interface ModalContentProps {
  schedule: Schedule;
  setSchedule: (schedule: Schedule) => void;
  addShift: () => void;
  deleteShift: (shiftIndex: number) => void;
}

import { storeHandlers } from './storeHandlers';
import { scheduleHandlers } from './scheduleHandlers';
import { workerSchedulesHandlers } from './workerScheduleHandlers';
import { shiftHandlers } from './shiftHandlers';
export const handlers = [
  ...storeHandlers,
  ...scheduleHandlers,
  ...workerSchedulesHandlers,
  ...shiftHandlers,
];

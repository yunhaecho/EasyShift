import { storeHandlers } from './storeHandlers';
import { scheduleHandlers } from './scheduleHandlers';
import { workerSchedulesHandlers } from './workerScheduleHandlers';

export const handlers = [
  ...storeHandlers,
  ...scheduleHandlers,
  ...workerSchedulesHandlers,
];

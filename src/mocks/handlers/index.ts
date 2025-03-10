import { storeHandlers } from './storeHandlers';
import { scheduleHandlers } from './scheduleHandlers';
import { shiftHandlers } from './shiftHandlers';
import { scheduleDeleteHandlers } from './scheduleDeleteHandlers';
import { scheduleAddHandlers } from './scheduleAddHandler';
import { userSchedulesHandlers } from './userScheduleHandlers';

export const handlers = [
  ...storeHandlers,
  ...scheduleHandlers,
  ...userSchedulesHandlers,
  ...shiftHandlers,
  ...scheduleDeleteHandlers,
  ...scheduleAddHandlers,
];

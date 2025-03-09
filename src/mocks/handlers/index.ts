import { storeHandlers } from './storeHandlers';
import { scheduleHandlers } from './scheduleHandlers';
import { workerSchedulesHandlers } from './workerScheduleHandlers';
import { shiftHandlers } from './shiftHandlers';
import { scheduleDeleteHandlers } from './scheduleDeleteHandlers';
import { kakaoLoginHandlers } from './kakaoLoginHandlers';
import { scheduleAddHandlers } from './scheduleAddHandler';

export const handlers = [
  ...storeHandlers,
  ...scheduleHandlers,
  ...workerSchedulesHandlers,
  ...shiftHandlers,
  ...scheduleDeleteHandlers,
  ...scheduleAddHandlers,
  ...kakaoLoginHandlers,
];

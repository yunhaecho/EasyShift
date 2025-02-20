import { convertMonthToNumber, getCurrentWeekDates } from '@/utils/dateUtils';
import WorkerBlock from './WorkerBlock';
import { WeeklyCalendarProps } from '../types';

const SHIFT_COLORS = ['#EEF2FF', '#F0FDF4', '#FFF1E7'];

const WeeklyCalendar = ({ currentDate, data }: WeeklyCalendarProps) => {
  const currentWeekDates = getCurrentWeekDates(currentDate);
  const { selectedSchedule } = data;
  const { shifts } = selectedSchedule;

  const getShiftColor = (shiftName: string) => {
    const shiftIndex = shifts.findIndex(s => s.shiftName === shiftName);
    return SHIFT_COLORS[shiftIndex % SHIFT_COLORS.length];
  };

  return (
    <div className="w-full rounded-8 border border-gray-300 bg-white shadow-sm">
      <div className="grid grid-cols-8">
        <div className="body-16-500 p-16 text-gray-600">Shifts</div>
        {currentWeekDates.map((date, index) => (
          <div
            key={index}
            className="body-16-500 p-16 text-center text-gray-900"
          >{`${date.day} ${date.dayOfWeek.toUpperCase()}`}</div>
        ))}
      </div>
      <div>
        {shifts.map(shift => (
          <div
            key={shift.id}
            className="grid min-h-162 grid-cols-8 border-t border-gray-400"
          >
            <div className="p-16">
              <div className="body-14-500 text-gray-900">{shift.shiftName}</div>
              <div className="body-14-400 text-gray-600">
                {shift.startTime} - {shift.endTime}
              </div>
            </div>
            {currentWeekDates.map((date, index) => {
              const currentWeekDate = `${date.year}-${convertMonthToNumber(date.month)}-${date.day}`;
              const workers = shift.dates.find(
                d => d.shiftDate === currentWeekDate,
              )?.assignedUser;

              return (
                <div
                  key={index}
                  style={{ backgroundColor: getShiftColor(shift.shiftName) }}
                  className="flex flex-col gap-8 border-l border-gray-400 p-16"
                >
                  {workers &&
                    workers.map(worker => (
                      <WorkerBlock key={worker.id} worker={worker} />
                    ))}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;

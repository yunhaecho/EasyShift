import RightArrowIcon from '@/assets/icons/right-arrow.svg';
import LeftArrowIcon from '@/assets/icons/left-arrow.svg';
import { format } from 'date-fns';
import useCalendar from '@/hooks/useCalendar';
import { generateCalendar } from '@/utils/dateUtils';

export default function Calendar() {
  const { currentYear, currentMonth, changeMonth } = useCalendar();
  const calendar = generateCalendar(currentYear, currentMonth);
  const weekName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
  const monthName = Array.from({ length: 12 }, (_, index) =>
    format(new Date(currentYear, index), 'MMMM'),
  ); //"Febuary"

  //mock data
  const schedules = [
    {
      id: 101,
      scheduleName: '야간 근무',
      shifts: [{ id: 201, shiftDate: '2025-03-05' }],
    },
    {
      id: 102,
      scheduleName: '주간 근무',
      shifts: [{ id: 203, shiftDate: '2025-03-08' }],
    },
  ];

  const workDates = schedules.flatMap(schedule =>
    schedule.shifts.map(shift => shift.shiftDate),
  );

  const clickPrev = () => changeMonth(-1);
  const clickNext = () => changeMonth(+1);

  return (
    <>
      {/* CalendarHeader  */}
      <div className="mb-26 flex h-32 flex-row justify-between">
        <span className="head-20-600">{`${monthName[currentMonth]} ${currentYear}`}</span>
        <div className="flex h-full flex-row gap-8">
          <button
            onClick={clickPrev}
            className="pointer-cursor flex w-32 items-center justify-center rounded-1 border border-gray-300"
          >
            <LeftArrowIcon />
          </button>
          <button
            onClick={clickNext}
            className="pointer-cursor flex w-32 items-center justify-center rounded-1 border border-gray-300"
          >
            <RightArrowIcon />
          </button>
        </div>
      </div>

      {/* CalenDarCell */}
      <div className="w-full list-none text-center">
        <ul className="grid auto-rows-[40px] grid-cols-7 gap-8">
          {/* week */}
          {weekName.map(week => (
            <li key={week} className="body-14-500 mb-5 text-gray-600">
              {week}
            </li>
          ))}
        </ul>

        {calendar.map(date => {
          return (
            <li
              key={date.date}
              className={`border ${date.isCurrentMonth ? 'text-gray-700' : 'text-gray-400'} body-14-400 flex cursor-pointer flex-col items-center justify-start rounded-lg border-gray-300 p-9 pt-8`}
            >
              {date.date[8] === '0' ? date.date.slice(9) : date.date.slice(-2)}
              {schedules &&
                workDates.map(shift => {
                  if (shift === date.date) {
                    return (
                      <div
                        key={shift}
                        className="mt-14 h-8 w-52 rounded-xl bg-blue-200"
                      />
                    );
                  }
                })}
            </li>
          );
        })}
      </div>
    </>
  );
}

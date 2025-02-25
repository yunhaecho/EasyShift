'use client';

import RightArrowIcon from '@/assets/icons/right-arrow.svg';
import LeftArrowIcon from '@/assets/icons/left-arrow.svg';
import useMonthlyCalendar from '@/hooks/useMonthlyCalendar';
import { generateCalendar } from '@/utils/dateUtils';
import { weekNames } from '@/constants/monthNames';
import { monthNames } from '@/constants/weekNames';
import classNames from 'classnames';
import { useMemo, useState } from 'react';

export default function Calendar() {
  const { currentYear, currentMonth, goToPrevOrNextMonth } =
    useMonthlyCalendar();

  //캘린더에 표시되는 모든 날짜
  const daysInCalendar = generateCalendar(new Date(currentYear, currentMonth));

  //mock data
  const [schedules] = useState([
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
  ]);

  const workerSchedule = useMemo(
    () =>
      schedules.flatMap(schedule =>
        schedule.shifts
          .filter(
            shift => new Date(shift.shiftDate).getMonth() === currentMonth,
          )
          .map(shift => shift.shiftDate),
      ),
    [currentMonth, schedules],
  );

  const clickPrev = () => goToPrevOrNextMonth(-1);
  const clickNext = () => goToPrevOrNextMonth(+1);

  return (
    <div>
      {/* CalendarHeader  */}
      <div className="mb-26 flex h-32 flex-row justify-between">
        <span className="head-20-600">{`${monthNames[currentMonth]} ${currentYear}`}</span>
        <div className="flex h-full flex-row gap-8">
          <button
            type="button"
            onClick={clickPrev}
            className="pointer-cursor flex w-32 items-center justify-center rounded-1 border border-gray-300"
          >
            <LeftArrowIcon />
          </button>
          <button
            type="button"
            onClick={clickNext}
            className="pointer-cursor flex w-32 items-center justify-center rounded-1 border border-gray-300"
          >
            <RightArrowIcon />
          </button>
        </div>
      </div>

      {/* CalenDarCell */}
      <div className="w-full list-none text-center">
        <ul className="grid auto-rows-[2.5rem] grid-cols-7 gap-8">
          {/* week */}
          {weekNames.map(week => (
            <li key={week} className="body-14-500 mb-5 text-gray-600">
              {week}
            </li>
          ))}
        </ul>

        <ul className="grid auto-rows-[3.875rem] grid-cols-7 gap-8">
          {/* days */}
          {daysInCalendar.map(eachDay => {
            return (
              <li
                key={eachDay.unformattedDate.getTime()}
                className={classNames(
                  'body-14-400 flex cursor-pointer flex-col items-center justify-start rounded-lg border border-gray-300 p-9 pt-8',
                  `${eachDay.isCurrentMonth ? 'text-gray-700' : 'text-gray-400'}`,
                )}
              >
                {`${eachDay.unformattedDate.getDate()}`}
                {workerSchedule.map(datesOfWorkDay => {
                  if (datesOfWorkDay === eachDay.formattedDate) {
                    return (
                      <div
                        key={datesOfWorkDay}
                        className="mt-14 h-8 w-52 rounded-xl bg-blue-200"
                      />
                    );
                  }
                })}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

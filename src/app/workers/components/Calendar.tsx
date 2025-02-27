'use client';

import RightArrowIcon from '@/assets/icons/right-arrow.svg';
import LeftArrowIcon from '@/assets/icons/left-arrow.svg';
import useMonthlyCalendar from '@/hooks/useMonthlyCalendar';
import { generateCalendar } from '@/utils/dateUtils';
import { weekNames } from '@/constants/monthNames';
import { monthNames } from '@/constants/weekNames';
import classNames from 'classnames';
import {useMemo} from 'react';
import { WorkerScheduleResponse } from '@/api/endpoints/settings/workerSchedule/workerSchedule';

export default function Calendar({data} : {data : WorkerScheduleResponse} ) {
  const { currentYear, currentMonth, goToPrevOrNextMonth } = useMonthlyCalendar();
  
  // 캘린더에 표시
  const daysInCalendar = generateCalendar(new Date(currentYear, currentMonth));  
  
  // workerSchedule: 현재 월에 해당하는 shift들을 날짜와 색상 정보와 함께 배열로 만들기 
  const workerSchedule = useMemo(() => {
     return data.schedules.flatMap(scheduleDetail => 
       scheduleDetail.shifts
         .filter(
           shiftDetail => new Date(shiftDetail.shiftDate).getMonth() === currentMonth,
       )

      //  필터링된 shift를 날짜(date)와 배경색(color) 정보가 담긴 객체로 변환
       .map(shiftDetail => ({
         date : shiftDetail.shiftDate,
         color : scheduleDetail.scheduleName === '야간 근무'
           ? 'bg-green-400'
           : scheduleDetail.scheduleName === '주간 근무'
           ? 'bg-orange-400'
           : '',
         }))
       );
       }, [currentMonth, data]);

  
  const clickPrev = () => goToPrevOrNextMonth(-1);
  const clickNext = () => goToPrevOrNextMonth(+1);

  return (
        <div>
            {/* CalendarHeader */}
      <div className="mb-26 flex h-32 flex-row justify-between">
        <span className="head-20-600">
          {`${monthNames[currentMonth]} ${currentYear}`}
        </span>
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

      {/* CalendarCell */}
      <div className="w-full list-none text-center">
        <ul className="grid auto-rows-[2.5rem] grid-cols-7 gap-8">
          {/* week */}
          {weekNames.map((week) => (
            <li key={week} className="body-14-500 mb-5 text-gray-600">
              {week}
            </li>
          ))}
        </ul>

        <ul className="grid auto-rows-[3.875rem] grid-cols-7 gap-8">
          {/* days */}
          {daysInCalendar.map((eachDay) => (
            <li
              key={eachDay.kstDate.getTime()}
              className={classNames(
                'body-14-400 flex cursor-pointer flex-col items-center justify-start rounded-lg border border-gray-300 p-9 pt-8',
                eachDay.isCurrentMonth ? 'text-gray-700' : 'text-gray-400'
              )}
            >
              <span>{`${eachDay.kstDate.getDate()}`}</span>
              {workerSchedule
                .filter(shift => shift.date === eachDay.formattedDate)
                .map(shift => (
                  <div 
                    key={shift.date}
                    className={`mt-14 h-8 w-52 rounded-xl ${shift.color}`}
                  />
                ))}
            </li>
          ))}
        </ul>
      </div>
        </div>
      )}




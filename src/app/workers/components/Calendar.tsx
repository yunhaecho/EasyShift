import RightArrowIcon from '@/assets/icons/right-arrow.svg';
import LeftArrowIcon from '@/assets/icons/left-arrow.svg';
import useMonthlyCalendar from '@/hooks/useMonthlyCalendar';
import { generateCalendar } from '@/utils/dateUtils';
import { weekNames } from '@/constants/monthNames';
import { monthNames } from '@/constants/weekNames';
import classNames from 'classnames';
import { useMemo } from 'react';

export default function Calendar() {
  const { currentYear, currentMonth, goToPrevOrNextMonth } = useMonthlyCalendar();  
  
  //캘린더에 표시되는 모든 날짜 
  const daysInCalendar = generateCalendar(new Date(currentYear, currentMonth));  

  //mock data
  const schedules = [
    { "id": 101, "scheduleName": "야간 근무", "shifts": [{"id": 201,"shiftDate": "2025-03-05"}]},
    {"id": 102,"scheduleName": "주간 근무","shifts": [{"id": 203, "shiftDate": "2025-03-08"}]},
  ];

  const workerSchedule = useMemo(() => 
    schedules.flatMap(schedule => 
      schedule.shifts
        .filter(shift => new Date(shift.shiftDate).getMonth() === currentMonth)
        .map(shift => shift.shiftDate)
    ), 
    [currentMonth, schedules]
  );
  
  const clickPrev = () => goToPrevOrNextMonth(-1);
  const clickNext = () => goToPrevOrNextMonth(+1);
    
    return (
      <div>

        {/* CalendarHeader  */}
          <div className='flex flex-row justify-between h-32 mb-26' >
            <span className='head-20-600'>{`${monthNames[currentMonth]} ${currentYear}`}</span>
            <div className='flex flex-row h-full gap-8 '>
              <button 
                type='button'
                onClick={clickPrev}
                className='pointer-cursor flex w-32 items-center justify-center rounded-1 border border-gray-300'>
                  <LeftArrowIcon />
              </button>
              <button
                type='button'
                onClick={clickNext}
                className='pointer-cursor flex w-32 items-center justify-center rounded-1 border border-gray-300'>
                  <RightArrowIcon/>
              </button>
            </div>
          </div>
          
          {/* CalenDarCell */}
          <div className="list-none text-center w-full ">
            <ul className="grid grid-cols-7 auto-rows-[2.5rem] gap-8 ">
              {/* week */}
              {weekNames.map((week) => (
                <li  key={week} className="body-14-500 text-gray-600 mb-5 ">{week}</li>
              ))}
            </ul>

            <ul className="auto-rows-[3.875rem] grid grid-cols-7 gap-8 ">
              
              {/* days */}
              {daysInCalendar.map((eachDay) => {
                  return (
                    <li
                    key={eachDay.unformattedDate.getTime()}
                    className={classNames('border  p-9 cursor-pointer border-gray-300 pt-8 rounded-lg body-14-400 flex flex-col items-center justify-start'
                      ,`${eachDay.isCurrentMonth ? 'text-gray-700' : 'text-gray-400'}`)}>
                      {`${eachDay.unformattedDate.getDate()}`}
                      {workerSchedule.map((datesOfWorkDay) => {
                          if (datesOfWorkDay === eachDay.formattedDate ) {
                            return <div key={datesOfWorkDay} className='w-52 h-8 mt-14 rounded-xl bg-blue-200' />
                          }
                      })}
                    </li>
                    )
                })}
            </ul>
      </div>
    </div>
  )
}  


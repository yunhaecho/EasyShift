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

  // const weekName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']; // 리렌더 될 때 마다,불필요함. contants로 빼기 ✅
  
  //useMemo 사용하기 : 캐싱 계산하는 개 무거울 때 스면 좋음 ✅
  // const monthName = Array.from({length:12},(_, index) => format(new Date(currentYear, index), 'MMMM')); //"Febuary"


  //mock data
  const schedules = [
    { "id": 101, "scheduleName": "야간 근무", "shifts": [{"id": 201,"shiftDate": "2025-03-05"}]},
    {"id": 102,"scheduleName": "주간 근무","shifts": [{"id": 203, "shiftDate": "2025-03-08"}]},
  ];

  //workDate가 없을 떄는 안 돌게 하는거 : useSuspenceQuery(), 데이터 안에 undefinded가 안뜸. 렌더링 중단시킴
  //그 대신 fallback을 그림. 데이터가 오기 전 까지는 Contents를 안 그림 데이터가 무조건 있다는 전제하에 코드를 짜니까 코드짜기가 편해짐. 

  //useMemo 사용하기 : 캐싱 계산하는 개 무거울 때 스면 좋음 ✅
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
      //fragment사용할 떄 하나로 묶어주면 좋긴함. ✅
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
                    // classNames로 분리 ✅
                    className={classNames('border  p-9 cursor-pointer border-gray-300 pt-8 rounded-lg body-14-400 flex flex-col items-center justify-start'
                      ,`${eachDay.isCurrentMonth ? 'text-gray-700' : 'text-gray-400'}`)}>
                      {/*1. 코드 의도 알기가 어려움 2.백엔드에서 주는 데이터가 바뀌면 깨지는 코드가 됨 3.이터레이터명 바꾸기 4. new Date(date.date).getDate() ✅*/}
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


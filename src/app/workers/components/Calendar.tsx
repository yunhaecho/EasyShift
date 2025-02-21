import RightArrowIcon from '@/assets/icons/right-arrow.svg';
import LeftArrowIcon from '@/assets/icons/left-arrow.svg';
import {format} from 'date-fns';
import useCalendar from '@/hooks/useCalendar';
import { generateCalendar } from '@/utils/dateUtils';

export default function Calendar() {
  const { currentYear, currentMonth, changeMonth } = useCalendar();  
  const calendar = generateCalendar(currentYear, currentMonth);
  const weekName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
  const monthName = Array.from({length:12},(_, index) => format(new Date(currentYear, index), 'MMMM')); //"Febuary"
    
  //mock data
  const schedules = [
    { "id": 101, "scheduleName": "야간 근무", "shifts": [{"id": 201,"shiftDate": "2025-03-05"}]},
    {"id": 102,"scheduleName": "주간 근무","shifts": [{"id": 203, "shiftDate": "2025-03-08"}]},
  ];

  const workDates = schedules.flatMap(schedule => schedule.shifts.map((shift) => shift.shiftDate));
  
  const clickPrev = () => changeMonth(-1);
  const clickNext = () => changeMonth(+1);
    
    return (
        <>
        {/* CalendarHeader  */}
          <div className='flex flex-row justify-between h-32 mb-26' >
            <span className='head-20-600'>{`${monthName[currentMonth]} ${currentYear}`}</span>
            <div className='flex flex-row h-full gap-8 '>
              <button 
                onClick={clickPrev}
                className='pointer-cursor flex w-32 items-center justify-center rounded-1 border border-gray-300'>
                  <LeftArrowIcon />
              </button>
              <button 
                onClick={clickNext}
                className='pointer-cursor flex w-32 items-center justify-center rounded-1 border border-gray-300'>
                  <RightArrowIcon/>
              </button>
            </div>
          </div>
          
          {/* CalenDarCell */}
          <div className="list-none text-center w-full ">
            <ul className="grid grid-cols-7 auto-rows-[40px]  gap-8 ">
              {/* week */}
              {weekName.map((week) => (
                <li  key={week} className="body-14-500 text-gray-600 mb-5 ">{week}</li>
              ))}
            </ul>

            <ul className="auto-rows-[62px] grid grid-cols-7 gap-8 ">
              {/* days */}

              {calendar.map((date) => {
                  return (
                    <li
                    key={date.date}
                    className={`border ${date.isCurrentMonth ? 'text-gray-700' : 'text-gray-400'} p-9 cursor-pointer border-gray-300 pt-8 rounded-lg body-14-400 flex flex-col items-center justify-start`}>
                      {date.date[8] === '0' ? date.date.slice(9) : date.date.slice(-2)}
                      {schedules &&
                        workDates.map((shift) => {
                          if (shift === date.date ) {
                            return <div key={shift} className='w-52 h-8 mt-14 rounded-xl bg-blue-200' />
                          }
                      })}
                    </li>
                    )
                  })}
          </ul>
      </div>
    </>
  )
}  


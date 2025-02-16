import RightArrowIcon from '@/../public/icons/right-arrow.svg';
import LeftArrowIcon from '@/../public/icons/left-arrow.svg';
import { useState } from 'react';
import {format} from 'date-fns';

function generateCalendar (currentYear: number, currentMonth: number ) {

  //현재 월 첫 날의 요일 : 0(일요일) ~ 6(토요일)
  const fstOfCurrentMonth = new Date(currentYear, currentMonth , 1).getDay(); 
  // console.log(fstOfCurrentMonth);
  
  //현재 월 마지막 날짜
  const currentMonthLastDate = new Date(currentYear, currentMonth , 0).getDate();

  //현재 월 날짜 배열
  const currentMonthDates = Array.from({ length: currentMonthLastDate }, (_,index) => index + 1); 
  const currentMonthDatesArr = currentMonthDates.map( day => ({
    date : `${format(new Date(currentYear, currentMonth, day), 'yyyy-MM-dd')}`, 
    isCurrentMonth: true
  }));

  //이전 연도, 월 (currentMonth가 0이면 currentYear - 1 처리)
  const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;

  // 이전 월 일부 날짜 배열
  const prevMonthDates = Array.from({length: fstOfCurrentMonth}, (_,i)=> currentMonthDates.length - fstOfCurrentMonth + i + 1);
  const prevMonthDatesArr = prevMonthDates.map( day => ({
      date: `${format(new Date(prevYear,prevMonth,day), 'yyyy-MM-dd')}`,
      isCurrentMonth: false 
  }));

  //다음 연도, 월 (currentMonth가 11이면 currentYear + 1 처리)
  const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
  const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

  //남은 그리드를 채우기 위한 다음 달 날짜
  const totalCells = 42;
  const remainCells = totalCells - (prevMonthDates.length + currentMonthDates.length);    
  const nextMonthDates = Array.from({length: remainCells}, (_,i)=> i + 1);

  // 다음 월 일부 날짜 배열
  const nextMonthDatesArr = nextMonthDates.map(day => ({
    date : `${format(new Date(nextYear, nextMonth, day), 'yyyy-MM-dd')}`, 
    isCurrentMonth: false 
  }))

  //전체 날짜 데이터 
  const calendarDates = [
    ...prevMonthDatesArr,
    ...currentMonthDatesArr,
    ...nextMonthDatesArr,
  ];
  
  return calendarDates;
}

//날짜: date 요일: day
export default function Calendar() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth ] = useState(new Date().getMonth()); //0-indexed
    const weekName = ['Sun', 'Mon','Tue','Wed','Thr','Fri','Sat'];
    const monthName = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',];
    
    //mock data
      const schedules = [
        {
          "id": 101,
          "scheduleName": "야간 근무",
          "shifts": [
            {
              "id": 201,
              "shiftDate": "2025-03-05",
              "shiftName": "1교대",
              "startTime": "12:00",
              "endTime": "15:00"
            },
          ]
        },
          {
            "id": 102,
            "scheduleName": "주간 근무",
            "shifts": [
                {
                    "id": 203,
                    "shiftDate": "2025-03-08",
                    "shiftName": "2교대",
                    "startTime": "08:00",
                    "endTime": "12:00"
                }
            ]
        },
    ];
    const calendar = generateCalendar(currentYear, currentMonth);

    const workInfoArr = schedules.map(i => i.shifts).flat(); //array

    const manageDate = (num : number) => {
      let newMonth = currentMonth + num;
      let newYear = currentYear;

      if(newMonth < 0) {
        newMonth = 11;
        newYear--;
      } else if (newMonth>11) {
        newMonth = 0;
        newYear++;
      }

      setCurrentMonth(newMonth);
      setCurrentYear(newYear);
    }

    const clickPrev = () => manageDate(-1);
    const clickNext = () => manageDate(+1);
    
    return (
        <>
          <div className='flex flex-row justify-between h-32 mb-26' >
            <span className='text-head-20-600 font-semibold text-xl'>{`${monthName[currentMonth]} ${currentYear}`}</span>
            <div className='flex flex-row h-full gap-8 '>
              <button 
                onClick={clickPrev}
                className='prev pointer-cursor flex w-32 items-center justify-center rounded-1 border border-gray-300'>
                  <LeftArrowIcon />
              </button>
              <button 
                onClick={clickNext}
                className='next pointer-cursor flex w-32 items-center justify-center rounded-1 border border-gray-300'>
                  <RightArrowIcon/>
              </button>
            </div>
          </div>
          
          <div className="list-none text-center w-full ">
            <ul className="grid grid-cols-7 auto-rows-[40px]  gap-8 ">
              {/* week */}
              {weekName.map((week) => (
                <li 
                  key={week}
                  className="body-14-500 text-gray-600 mb-5 ">{week}</li>
              ))}
            </ul>

            <ul className="auto-rows-[62px] grid grid-cols-7 gap-8 ">
              {/* days */}

              {calendar.map((item,idx) => {
                  return (
                    <li
                    key={idx}
                    className={`border ${item.isCurrentMonth ? 'text-gray-700' : 'text-gray-400'} p-9 cursor-pointer border-gray-300 pt-8 rounded-lg body-14-400 flex flex-col items-center justify-start`}>
                      {item.date[8] === '0' ? item.date.slice(9) : item.date.slice(-2)}
                      {schedules &&
                        workInfoArr.map((shift) => (
                          shift.shiftDate === item.date 
                          ? <div key={shift.id} className='w-52 h-8 mt-14 rounded-xl bg-blue-200' />
                          : ''
                      ))}

                    </li>
                  )
              })}

            </ul>
          </div>
        </>
    )
}  


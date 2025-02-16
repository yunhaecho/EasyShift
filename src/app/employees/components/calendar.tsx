import RightArrowIcon from '@/../public/icons/right-arrow.svg';
import LeftArrowIcon from '@/../public/icons/left-arrow.svg';
import { useState } from 'react';

export default function Calendar() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth ] = useState(new Date().getMonth() + 1); 
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
              "shiftDate": "2025-02-05",
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
                    "shiftDate": "2025-02-08",
                    "shiftName": "2교대",
                    "startTime": "08:00",
                    "endTime": "12:00"
                }
            ]
        },
    ];

    //날짜: date 요일: days 
    const workInfoArr = schedules.map(i => i.shifts).flat(); //array
    
    //현재 월 연도
    const currentMonthLastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    const currentMonthDates = Array.from({ length: currentMonthLastDate }, (_,index) => index + 1); 
    const fstOfCurrentMonth = new Date(currentYear, currentMonth, 1).getDay(); //0(일요일) ~ 6(토요일)
    
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const prevMonthDates = Array.from({length: fstOfCurrentMonth}, (_,i)=> currentMonthDates.length - fstOfCurrentMonth + i + 1);

    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

    //남은 그리드를 채우기 위한 다음 달 날짜
    const totalCells = 42;
    const remainCells = totalCells - (prevMonthDates.length + currentMonthDates.length);    
    const nextMonthDates = Array.from({length: remainCells}, (_,i)=> i + 1);
    
    //0을 추가해서 월/일을 두 자리로 만들기
    const addZero = (num: number) => {
      return String(num).padStart( 2 ,'0');
    }

    // 이전 달 데이터 : "2025-01-15"
    const prevMonthDatesArr = prevMonthDates.map( day => ({
      date: `${prevYear}-${addZero(prevMonth + 1)}-${addZero(day)}`,
      isCurrentMonth: false 
    }));

    //현재 달 데이터 
    const currentMonthDatesArr = currentMonthDates.map( day => ({
      date : `${currentYear}-${addZero(currentMonth + 1)}-${addZero(day)}`, 
      isCurrentMonth: true
    }));

    //다음 달 데이터 
    const nextMonthDatesArr = nextMonthDates.map(day => ({
      date : `${nextYear}-${addZero(nextMonth + 1)}-${addZero(day)}`, 
      isCurrentMonth: false 
    }))

    const clickPrev = () => {
      if(currentMonth === 0) { //1월이면
        const prevMonth = 11; //12월로 변경
        setCurrentMonth(prevMonth);
        const prevYear = currentYear - 1;
        setCurrentYear(prevYear);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    }

    const clickNext = () => {
      if(currentMonth === 11) { //12월이면
        const nextMonth = 0; //1월로 변경
        setCurrentMonth(nextMonth);
        const nextYear = currentYear + 1;
        setCurrentYear(nextYear);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }

    //전체 날짜 데이터 
    const calendar = [
      ...prevMonthDatesArr,
      ...currentMonthDatesArr,
      ...nextMonthDatesArr,
    ];
    
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

              {calendar.map((item) => {
                  return (
                    <li
                    key={item.date}
                    className={`border ${item.isCurrentMonth ? 'text-gray-700' : 'text-gray-400'} p-9 cursor-pointer border-gray-300 pt-8 rounded-lg body-14-400 flex flex-col items-center justify-start`}>
                      {item.date[8] === '0' ? item.date.slice(9) : item.date.slice(-2)}
                      {schedules &&
                        workInfoArr.map((shift,i) => (
                          shift.shiftDate === item.date 
                          ? <div key={i} className='w-52 h-8 mt-14 rounded-xl bg-blue-200' />
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


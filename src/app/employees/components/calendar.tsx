import RightArrowIcon from '@/../public/icons/right-arrow.svg';
import LeftArrowIcon from '@/../public/icons/left-arrow.svg';
import { useState } from 'react';

export default function Calendar() {

    const [currentMonth,setCurrentMonth ] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
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

    // const schedule = [
    //   { date: '2025-03-04', shift: 'open' },
    //   { date: '2024-03-08', shift: 'closing' },
    //   { date: '2024-03-12', shift: 'middle' },
    // ];
    
    //날짜: date 요일: days 
    const currentDate = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
    console.log(currentDate);
    //현재 월 연도
    const currentMonthLastDate = new Date(currentYear, currentMonth+1, 0).getDate();
    const currentMonthDates = Array.from({ length: currentMonthLastDate }, (_,index) => index+1); 

    const firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay(); //0(일요일) ~ 6(토요일)
    
    const prevMonthDates = Array.from({length: firstDayofMonth}, (_,i)=> currentMonthDates.length - firstDayofMonth + i +1);

    const clickPrev = () => {
      if(currentMonth === 0) { //1월이면
        const prevMonth = 11; //12월로 변경
        setCurrentMonth(prevMonth);
        const prevYear = currentYear-1;
        setCurrentYear(prevYear);
      } else {
        setCurrentMonth(currentMonth-1);
      }
    }

    const clickNext = () => {
      if(currentMonth === 11) { //12월이면
        const nextMonth = 0; //1월로 변경
        setCurrentMonth(nextMonth);
        const nextYear = currentYear+1;
        setCurrentYear(nextYear);
      } else {
        setCurrentMonth(currentMonth+1);
      }
    }

    //남은 그리드를 채우기 위한 다음 달 날짜
    const totalCells = 42;
    const remainCells = totalCells - (prevMonthDates.length + currentMonthDates.length);    
    const nextMonthDates = Array.from({length: remainCells}, (_,i)=> i + 1);
    
    const calendar = [
      ...prevMonthDates.map(date => ({ date, currentMonth: false })),
      ...currentMonthDates.map(date => ({ date, currentMonth: true })),
      ...nextMonthDates.map(date => ({ date, currentMonth: false })),
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
              {calendar.map((date,i) => (
                <li
                  key={i}
                  className={`border ${date.currentMonth ? 'text-gray-700' : 'text-gray-400'} p-9 cursor-pointer border-gray-300 pt-8 rounded-lg body-14-400 flex flex-col items-center justify-start`}>
                    {date.date}
                    {/* 조건부 렌더링*/}
                    <div
                      className='w-52 h-8 mt-14 rounded-xl bg-blue-200' />
                  </li>
              ))}
            </ul>
          </div>
        </>
    )
}  


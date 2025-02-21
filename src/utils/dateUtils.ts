import { WeekDates } from '@/app/stores/[storeId]/home/types';
import { startOfWeek, addDays, format } from 'date-fns';

/**
 * 오늘 기준 이번 주 날짜 정보 반환
 * @returns 이번 주 기준 일주일치 [연도, 월, 일, 요일] 정보 배열
 */
export const getCurrentWeekDates = (currentDate = new Date()) => {
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 }); // 월요일부터 시작

  return Array.from({ length: 7 }).map((_, index) => {
    const date = addDays(weekStart, index);
    return {
      day: format(date, 'd'),
      month: format(date, 'MMM'),
      year: format(date, 'yyyy'),
      dayOfWeek: format(date, 'EEE'),
      fullDate: date,
    };
  }) as WeekDates;
};

export const convertMonthToNumber = (month: string) => {
  return month
    .replace('Jan', '01')
    .replace('Feb', '02')
    .replace('Mar', '03')
    .replace('Apr', '04')
    .replace('May', '05')
    .replace('Jun', '06')
    .replace('Jul', '07')
    .replace('Aug', '08')
    .replace('Sep', '09')
    .replace('Oct', '10')
    .replace('Nov', '11')
    .replace('Dec', '12');
};

/**
 * 현재 월 기준으로 현재 월 날짜 전제, 이전 달 날짜 일부, 다음 달 날짜 일부 반환
 * @returns 현재 월 기준  [이전 달 마지막 주 날짜, 현재 월 날짜 전체, 다음 날 첫 주 날짜] 배열
 */

export const generateCalendar  = (currentYear: number, currentMonth: number ) => {

  //현재 월 첫 날의 요일 : 0(일요일) ~ 6(토요일)
  const fstOfCurrentMonth = new Date(currentYear, currentMonth , 1).getDay(); 
  
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

import { WeekDates } from '@/app/stores/[storeId]/home/types';
import {
  startOfWeek,
  addDays,
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  endOfWeek,
} from 'date-fns';

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

/**
 * 오늘 기준으로 주 이전 달 마지막 주 날짜, 현재 월 날짜 전체, 다음 날 첫 주 날짜 반환
 * @returns 현재 월 기준  [이전 달 마지막 주 날짜, 현재 월 날짜 전체, 다음 날 첫 주 날짜] 배열
 */

export const generateCalendar = (start: Date) => {
  //현재 월
  const fstOfMonth = startOfMonth(start);
  const lastOfMonth = endOfMonth(start);

  const startOfCalendar = startOfWeek(fstOfMonth);
  const endOfCalendar = endOfWeek(lastOfMonth);

  const datesOfCurrentMonth = eachDayOfInterval({
    start: startOfCalendar,
    end: endOfCalendar,
  });

  const calendarDates = datesOfCurrentMonth.map(kstDate => ({
    //Wed Jan 29 2025 00:00:00 GMT+0900 (한국 표준시)
    kstDate: kstDate,
    formattedDate: format(kstDate, 'yyyy-MM-dd'),
    isCurrentMonth: kstDate.getMonth() === fstOfMonth.getMonth(),
  }));

  return calendarDates;
};

export const convertMonthToNumber = (month: string) => {
  return month
    .replace('Jan', '1')
    .replace('Feb', '2')
    .replace('Mar', '3')
    .replace('Apr', '4')
    .replace('May', '5')
    .replace('Jun', '6')
    .replace('Jul', '7')
    .replace('Aug', '8')
    .replace('Sep', '9')
    .replace('Oct', '10')
    .replace('Nov', '11')
    .replace('Dec', '12');
};

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

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const fullDateString = `${year}-${month}-${day}`;

    return {
      day: format(date, 'd'),
      month: format(date, 'MMM'),
      year: format(date, 'yyyy'),
      dayOfWeek: format(date, 'EEE'),
      fullDateString,
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

  const datesOfCurrentMonth = eachDayOfInterval({
    start:  startOfWeek(fstOfMonth),
    end: endOfWeek(lastOfMonth),
  });

  const calendarDates = datesOfCurrentMonth.map(kstDate => ({
    //Wed Jan 29 2025 00:00:00 GMT+0900 (한국 표준시)
    kstDate: kstDate,
    formattedDate: format(kstDate, 'yyyy-MM-dd'),
    isCurrentMonth: kstDate.getMonth() === fstOfMonth.getMonth(),
  }));

  return calendarDates;
};

/**
 * YYYY-MM-DD 형식의 날짜를 받아 텍스트 날짜 형식으로 반환
 * @returns 텍스트 날짜 형식
 */
export const formatDateToText = (date: string) => {
  const dateObj = new Date(date);
  return format(dateObj, 'MMMM d, yyyy (EEE)');
};

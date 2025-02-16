import { eachDayOfInterval, endOfWeek, format, startOfWeek } from 'date-fns';

/**
 * 오늘 기준 이번 주 날짜 정보 반환
 * @returns 이번 주 기준 일주일치 [연도, 월, 일, 요일] 정보 배열
 */
export const getCurrentWeekDates = () => {
  const today = new Date();
  const start = startOfWeek(today, { weekStartsOn: 1 }); // 월요일 시작
  const end = endOfWeek(today, { weekStartsOn: 1 });

  const weekDates = eachDayOfInterval({ start, end }).map(date => ({
    month: format(date, 'MMMM'),
    day: format(date, 'd'),
    dayOfWeek: format(date, 'EEE'),
    year: format(date, 'yyyy'),
  }));

  return weekDates;
};

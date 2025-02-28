import { WeekDate } from '../../../home/types';

import ChevronLeftIcon from '@/assets/icons/chevron-left.svg';
import ChevronRightIcon from '@/assets/icons/chevron-right.svg';

const WeeklyNavigator = ({
  currentWeekDates,
  goToNextWeek,
  goToPreviousWeek,
}: {
  currentWeekDates: (WeekDate | null)[];
  goToNextWeek: () => void;
  goToPreviousWeek: () => void;
}) => {
  const findFirstValidDate = (dates: (WeekDate | null)[]) =>
    dates.find(date => date !== null) ?? null;

  const startDate = findFirstValidDate(currentWeekDates);
  const endDate =
    [...currentWeekDates].reverse().find(date => date !== null) ?? null;

  return (
    <nav className="flex h-42 items-center justify-between">
      <h2 className="sr-only">스케줄 상세 페이지 주간 네비게이터</h2>
      <div className="flex items-center gap-16">
        <button onClick={goToPreviousWeek} aria-label="이전 주 이동 버튼">
          <ChevronLeftIcon className="mb-5 h-40 w-26" />
        </button>
        <div className="head-20-600 w-170 text-center text-gray-800">
          {startDate && endDate
            ? `${startDate.month} ${startDate.day} - ${endDate.day}, ${startDate.year}`
            : startDate
              ? `${startDate.month} ${startDate.day}, ${startDate.year}`
              : endDate
                ? `${endDate.month} ${endDate.day}, ${endDate.year}`
                : '날짜 없음'}
        </div>
        <button onClick={goToNextWeek} aria-label="다음 주 이동 버튼">
          <ChevronRightIcon className="mb-5 h-40 w-26" />
        </button>
      </div>
    </nav>
  );
};

export default WeeklyNavigator;

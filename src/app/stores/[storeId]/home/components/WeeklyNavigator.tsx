import { WeekDates } from '../types';
import SelectedScheduleTemplateDropdown from './SelectedScheduleTemplateDropdown';

import ChevronLeftIcon from '@/assets/icons/chevron-left.svg';
import ChevronRightIcon from '@/assets/icons/chevron-right.svg';

const WeeklyNavigator = ({
  currentWeekDates,
  setCurrentDate,
  goToNextWeek,
  goToPreviousWeek,
}: {
  currentWeekDates: WeekDates;
  setCurrentDate: (date: Date) => void;
  goToNextWeek: () => void;
  goToPreviousWeek: () => void;
}) => {
  const startDate = currentWeekDates[0];
  const endDate = currentWeekDates[6];

  return (
    <nav className="flex h-42 items-center justify-between">
      <h2 className="sr-only">주간 날짜 네비게이터</h2>
      <div className="flex items-center gap-16">
        <button onClick={goToPreviousWeek} aria-label="이전 주 이동 버튼">
          <ChevronLeftIcon className="mb-5 h-40 w-26" />
        </button>
        <div className="head-20-600 w-170 text-center text-gray-800">
          {`${startDate.month} ${startDate.day} - ${endDate.day}, ${startDate.year}`}
        </div>
        <button onClick={goToNextWeek} aria-label="다음 주 이동 버튼">
          <ChevronRightIcon className="mb-5 h-40 w-26" />
        </button>

        <button
          className="ml-16 flex h-full items-center gap-12 rounded-4 border border-gray-400 bg-white px-16 py-8"
          onClick={() => setCurrentDate(new Date())}
          aria-label="오늘 날짜 이동 버튼"
        >
          <span className="body-16-400 text-gray-800">Today</span>
        </button>
      </div>
      <SelectedScheduleTemplateDropdown />
    </nav>
  );
};

export default WeeklyNavigator;

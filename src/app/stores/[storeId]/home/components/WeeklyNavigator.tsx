import ChevronLeftIcon from '@/assets/icons/chevron-left.svg';
import ChevronRightIcon from '@/assets/icons/chevron-right.svg';
import { WeekDate } from '../types';

const WeeklyNavigator = ({
  currentWeekDates,
  setCurrentDate,
  goToNextWeek,
  goToPreviousWeek,
}: {
  currentWeekDates: WeekDate[];
  setCurrentDate: (date: Date) => void;
  goToNextWeek: () => void;
  goToPreviousWeek: () => void;
}) => {
  const startDate = currentWeekDates[0];
  const endDate = currentWeekDates[6];

  return (
    <nav className="flex h-42 items-center justify-between">
      <div className="flex items-center gap-16">
        {/* 날짜 이동 */}
        <button onClick={goToPreviousWeek}>
          <ChevronLeftIcon className="mb-5 h-40 w-26" />
        </button>
        <div className="head-20-600 w-170 text-center text-gray-800">
          {`${startDate.month} ${startDate.day} - ${endDate.day}, ${startDate.year}`}
        </div>
        <button onClick={goToNextWeek}>
          <ChevronRightIcon className="mb-5 h-40 w-26" />
        </button>

        {/* 오늘 날짜 이동 */}
        <button
          className="ml-16 flex h-full items-center gap-12 rounded-4 border border-gray-400 bg-white px-16 py-8"
          onClick={() => setCurrentDate(new Date())}
        >
          <p className="body-16-400 text-gray-800">Today</p>
        </button>
      </div>
    </nav>
  );
};

export default WeeklyNavigator;

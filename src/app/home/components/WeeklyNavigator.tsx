import { addWeeks, subWeeks } from 'date-fns';
import ChevronLeftIcon from '../../../assets/icons/chevron-left.svg';
import ChevronRightIcon from '../../../assets/icons/chevron-right.svg';
import { getCurrentWeekDates } from '@/utils/dateUtils';

interface WeeklyNavigatorProps {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
}

const WeeklyNavigator = ({
  currentDate,
  setCurrentDate,
}: WeeklyNavigatorProps) => {
  const currentWeekDates = getCurrentWeekDates(currentDate);
  const startDate = currentWeekDates[0];
  const endDate = currentWeekDates[6];

  const handlePrevWeek = () => {
    setCurrentDate(subWeeks(currentDate, 1));
  };

  const handleNextWeek = () => {
    setCurrentDate(addWeeks(currentDate, 1));
  };

  return (
    <div className="flex items-center gap-16">
      <button onClick={handlePrevWeek}>
        <ChevronLeftIcon className="mb-5 h-40 w-26" />
      </button>
      <div className="head-20-600 w-170 text-center text-gray-800">
        {`${startDate.month} ${startDate.day} - ${endDate.day}, ${startDate.year}`}
      </div>
      <button onClick={handleNextWeek}>
        <ChevronRightIcon className="mb-5 h-40 w-26" />
      </button>
    </div>
  );
};

export default WeeklyNavigator;

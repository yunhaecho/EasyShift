import { getCurrentWeekDates } from '@/utils/dateUtils';
import ChevronLeftIcon from '../../../assets/icons/chevron-left.svg';
import ChevronRightIcon from '../../../assets/icons/chevron-right.svg';

const WeeklyNavigator = () => {
  const currentWeekDates = getCurrentWeekDates();
  const startDate = currentWeekDates[0];
  const endDate = currentWeekDates[6];

  return (
    <div className="flex items-center gap-16">
      <ChevronLeftIcon className="mb-2 h-40 w-26" />
      <div className="head-20-600 text-gray-800">{`${startDate.month} ${startDate.day} - ${endDate.day}, ${startDate.year}`}</div>
      <ChevronRightIcon className="mb-2 h-40 w-26" />
    </div>
  );
};

export default WeeklyNavigator;

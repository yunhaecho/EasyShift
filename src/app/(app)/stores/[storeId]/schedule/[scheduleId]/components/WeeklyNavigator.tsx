import { useContext } from 'react';
import { useSearchParams } from 'next/navigation';
import { format } from 'date-fns';
import { ScheduleDetailPageContext } from '@/app/context/ScheduleDetailPageContext';

import ChevronLeftIcon from '@/assets/icons/chevron-left.svg';
import ChevronRightIcon from '@/assets/icons/chevron-right.svg';
import ChevronLeftLightGrayIcon from '@/assets/icons/chevron-left-lightgray.svg';
import ChevronRightLightGrayIcon from '@/assets/icons/chevron-right-lightgray.svg';

const WeeklyNavigator = () => {
  const searchParams = useSearchParams();
  const scheduleDate = searchParams.get('date');
  const {
    leaveRequestData,
    goToNextWeek,
    goToPreviousWeek,
    canGoNext,
    canGoPrevious,
  } = useContext(ScheduleDetailPageContext);

  return (
    <nav className="flex h-42 items-center justify-between">
      <h2 className="sr-only">Schedule Detail Page Weekly Navigator</h2>
      <div className="flex items-center gap-16">
        <button
          onClick={goToPreviousWeek}
          aria-label="Previous Week Button"
          className={`${canGoPrevious ? 'cursor-pointer' : 'cursor-not-allowed'}`}
        >
          {canGoPrevious ? (
            <ChevronLeftIcon className="mb-5 h-40 w-26" />
          ) : (
            <ChevronLeftLightGrayIcon className="mb-5 h-40 w-26" />
          )}
        </button>
        <div className="head-20-600 w-200 text-center text-gray-800">
          {`${leaveRequestData?.schedule.scheduleName}, ${format(
            new Date(scheduleDate || new Date()),
            'MMM yyyy',
          )}`}
        </div>
        <button
          onClick={goToNextWeek}
          aria-label="Next Week Button"
          className={`${canGoNext ? 'cursor-pointer' : 'cursor-not-allowed'}`}
        >
          {canGoNext ? (
            <ChevronRightIcon className="mb-5 h-40 w-26" />
          ) : (
            <ChevronRightLightGrayIcon className="mb-5 h-40 w-26" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default WeeklyNavigator;

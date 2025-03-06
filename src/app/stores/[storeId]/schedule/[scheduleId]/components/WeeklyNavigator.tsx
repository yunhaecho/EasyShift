import { useContext } from 'react';
import { useSearchParams } from 'next/navigation';
import { format } from 'date-fns';
import { ScheduleDetailPageContext } from '@/app/context/ScheduleDetailPageContext';

import ChevronLeftIcon from '@/assets/icons/chevron-left.svg';
import ChevronRightIcon from '@/assets/icons/chevron-right.svg';

const WeeklyNavigator = ({
  goToNextWeek,
  goToPreviousWeek,
}: {
  goToNextWeek: () => void;
  goToPreviousWeek: () => void;
}) => {
  const searchParams = useSearchParams();
  const scheduleDate = searchParams.get('date');
  const { leaveRequestData } = useContext(ScheduleDetailPageContext);

  return (
    <nav className="flex h-42 items-center justify-between">
      <h2 className="sr-only">Schedule Detail Page Weekly Navigator</h2>
      <div className="flex items-center gap-16">
        <button onClick={goToPreviousWeek} aria-label="Previous Week Button">
          <ChevronLeftIcon className="mb-5 h-40 w-26" />
        </button>
        <div className="head-20-600 w-200 text-center text-gray-800">
          {`${leaveRequestData?.schedule.scheduleName}, ${format(
            new Date(scheduleDate || new Date()),
            'MMM yyyy',
          )}`}
        </div>
        <button onClick={goToNextWeek} aria-label="Next Week Button">
          <ChevronRightIcon className="mb-5 h-40 w-26" />
        </button>
      </div>
    </nav>
  );
};

export default WeeklyNavigator;

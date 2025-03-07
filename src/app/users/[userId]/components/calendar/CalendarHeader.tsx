import { monthNames } from '@/constants/weekNames';

import LeftArrowIcon from '@/assets/icons/left-arrow.svg';
import RightArrowIcon from '@/assets/icons/right-arrow.svg';

const CalendarHeader = ({
  currentMonth,
  currentYear,
  goToPrevMonth,
  goToNextMonth,
}: {
  currentMonth: number;
  currentYear: number;
  goToPrevMonth: () => void;
  goToNextMonth: () => void;
}) => {
  return (
    <header className="mb-26 flex h-32 items-center justify-between">
      <h2 className="head-24-600">
        {`${monthNames[currentMonth]} ${currentYear}`}
      </h2>
      <nav
        className="flex h-full items-center gap-34"
        aria-label="Calendar navigation"
      >
        <button
          type="button"
          onClick={goToPrevMonth}
          aria-label="Previous month"
        >
          <LeftArrowIcon aria-hidden="true" />
        </button>
        <button type="button" onClick={goToNextMonth} aria-label="Next month">
          <RightArrowIcon aria-hidden="true" />
        </button>
      </nav>
    </header>
  );
};

export default CalendarHeader;

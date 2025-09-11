import { monthNames } from '@/constants/weekNames';
import { useContext } from 'react';
import UserPageContext from '@/app/context/UserPageContext';
import LeftArrowIcon from '@/assets/icons/left-arrow.svg';
import RightArrowIcon from '@/assets/icons/right-arrow.svg';
import StoresListDropdown from '@/app/components/StoresListDropdown';
import useMonthlyCalendar from '@/hooks/useMonthlyCalendar';

const CalendarHeader = ({
  currentMonth,
  currentYear,
  mode,
}: {
  currentMonth: number;
  currentYear: number;
  mode: 'modal' | 'page';
}) => {
  const { stores, selectedStoreId, setSelectedStoreId } =
    useContext(UserPageContext);

  const { goToPrevOrNextMonth } = useMonthlyCalendar();

  const goToPrevMonth = () => goToPrevOrNextMonth(-1);
  const goToNextMonth = () => goToPrevOrNextMonth(1);

  return (
    <header
      className="mb-26 flex h-32 items-center justify-between"
      aria-label="Calendar header"
    >
      <nav
        className="flex items-center gap-30"
        aria-label="Calendar navigation"
      >
        <button
          type="button"
          onClick={goToPrevMonth}
          aria-label="Previous month"
        >
          <LeftArrowIcon aria-hidden="true" />
        </button>
        <h2 className="head-24-600 w-200 text-center">
          {`${monthNames[currentMonth]} ${currentYear}`}
        </h2>
        <button type="button" onClick={goToNextMonth} aria-label="Next month">
          <RightArrowIcon aria-hidden="true" />
        </button>
      </nav>
      {mode === 'page' && (
        <StoresListDropdown
          title={
            stores?.find(store => store.storeId === selectedStoreId)
              ?.storeName || 'No Store Joined'
          }
          stores={stores || []}
          onSelect={setSelectedStoreId}
        />
      )}
    </header>
  );
};

export default CalendarHeader;

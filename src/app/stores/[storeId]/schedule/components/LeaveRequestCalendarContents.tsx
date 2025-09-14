import { weekNames } from '@/constants/weekNames';
import { format } from 'date-fns';

export const CalendarHeader = ({ currentMonth }: { currentMonth: Date }) => (
  <div className="mb-16 text-center">
    <h2 className="body-18-500 text-gray-900">
      {format(currentMonth, 'MMMM yyyy')}
    </h2>
  </div>
);

export const WeekdayHeader = () => (
  <>
    {weekNames.map(day => (
      <div key={day} className="body-14-500 py-2 text-center text-gray-600">
        {day}
      </div>
    ))}
  </>
);

export const DateButton = ({
  day,
  isSelected,
  isCurrentMonth,
  onClick,
}: {
  day: Date;
  isSelected: boolean;
  isCurrentMonth: boolean;
  onClick: () => void;
}) => (
  <button
    key={day.toString()}
    onClick={onClick}
    className={`mx-auto flex h-30 w-30 items-center justify-center rounded-full ${isSelected ? 'bg-gray-400 text-white' : ''} ${!isCurrentMonth ? 'text-gray-400 disabled:cursor-default' : 'text-gray-900'}`}
    disabled={!isCurrentMonth}
  >
    <span className="body-14-400">{format(day, 'd')}</span>
  </button>
);

export const SelectedDates = ({ dates }: { dates: Date[] }) => (
  <div className="mt-16 rounded-4 border border-gray-300 p-12">
    <h3 className="body-14-500 mb-8 text-gray-900">Selected Dates:</h3>
    <div className="body-14-400 text-gray-600">
      {dates
        .sort((a, b) => a.getTime() - b.getTime())
        .map(date => format(date, 'M/d(EEE)'))
        .join(', ')}
    </div>
  </div>
);

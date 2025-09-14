import { CalendarContext } from '@/app/context/CalendarContext';
import { generateCalendar } from '@/utils/dateUtils';
import { useContext } from 'react';
import { weekNames } from '@/constants/weekNames';
import classNames from 'classnames';

export default function Calendar() {
  const { currentMonth, currentYear } = useContext(CalendarContext);
  const daysInCalendar = generateCalendar(new Date(currentYear, currentMonth));

  return (
    // calendar
    <div className="w-full list-none text-center">
      <ul className="grid auto-rows-[40px] grid-cols-7 gap-8">
        {weekNames.map(week => (
          <li key={week} className="body-14-500 mb-5 text-gray-600">
            {week}
          </li>
        ))}
      </ul>
      <ul className="grid auto-rows-[80px] grid-cols-7 gap-8">
        {daysInCalendar.map(dateInfo => (
          <li
            key={dateInfo.formattedDate}
            className={classNames(
              'body-14-400 cursor-pointer rounded-lg border border-gray-300 pt-8 text-gray-400',
              {
                'body-14-400 cursor-pointer rounded-lg border border-gray-300 pt-8 text-gray-700':
                  dateInfo.isCurrentMonth,
              },
            )}
          >
            {dateInfo.kstDate.getDate()}
          </li>
        ))}
      </ul>
    </div>
  );
}

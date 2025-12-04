import { CalendarContext } from '@/app/context/CalendarContext';
import { getShiftSummaryBySchedule } from '@/utils/getShiftSummaryBySchedule';
import { useContext, useMemo } from 'react';

const MonthlySummaryItem = ({
  summaryItem,
  isLastItem,
}: {
  summaryItem: [string, Record<string, number>];
  isLastItem: boolean;
}) => {
  const [scheduleName, shifts] = summaryItem;

  return (
    <li className={`flex-1 ${!isLastItem && 'border-r border-gray-300 pr-24'}`}>
      <h4 className="body-14-500 text-gray-800">{scheduleName}</h4>
      <dl className="flex flex-col gap-8">
        {Object.entries(shifts).map(([shiftName, count]) => (
          <div key={shiftName} className="flex items-center justify-between">
            <dt className="body-16-400 text-gray-700">{shiftName}</dt>
            <dd className="head-16-500">{count}</dd>
          </div>
        ))}
      </dl>
    </li>
  );
};

const MonthlySummaryCard = () => {
  const { schedules } = useContext(CalendarContext);
  const summaryItems = useMemo(
    () => getShiftSummaryBySchedule(schedules),
    [schedules],
  );

  return (
    <section>
      <h3 className="body-18-600">Monthly Shift Summary</h3>
      <ul className="flex gap-24">
        {Object.entries(summaryItems).map((summaryItem, index) => (
          <MonthlySummaryItem
            key={`${summaryItem}-${index}`}
            summaryItem={summaryItem}
            isLastItem={index === Object.entries(summaryItems).length - 1}
          />
        ))}
      </ul>
    </section>
  );
};

export default MonthlySummaryCard;

import { weekNames } from '@/constants/weekNames';
const WeekdayHeader = () => (
  <div className="grid grid-cols-7 rounded-8 bg-gray-100 shadow-sm">
    {weekNames.map((week, index) => {
      const isLastWeek = index === weekNames.length - 1;
      return (
        <div
          key={week}
          className={`body-14-500 py-16 text-center text-gray-600 ${
            !isLastWeek && 'border-r border-gray-300'
          }`}
        >
          {week}
        </div>
      );
    })}
  </div>
);

export default WeekdayHeader;

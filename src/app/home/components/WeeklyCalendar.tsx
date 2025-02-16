import { getCurrentWeekDates } from '@/utils/dateUtils';

const shifts = [
  {
    id: 1,
    label: 'Opening',
    time: '06:00-15:00',
    color: '#EEF2FF',
  },
  {
    id: 2,
    label: 'Middle',
    time: '11:00-18:00',
    color: '#F0FDF4',
  },
  {
    id: 3,
    label: 'Closing',
    time: '14:00-23:00',
    color: '#FFF1E7',
  },
];

const WeeklyCalendar = () => {
  const currentWeekDates = getCurrentWeekDates();

  return (
    <div className="w-full rounded-8 bg-white shadow-sm">
      <div className="grid grid-cols-8 p-16">
        <div className="body-16-500 text-gray-600">Shifts</div>
        {currentWeekDates.map((date, index) => (
          <div
            key={index}
            className="body-16-500 text-center text-gray-900"
          >{`${date.day} ${date.dayOfWeek.toUpperCase()}`}</div>
        ))}
      </div>
      <div className="">
        {shifts.map(shift => (
          <div
            key={shift.id}
            className="grid min-h-162 grid-cols-8 border-t border-gray-300"
          >
            <div className="p-16">
              <div className="body-14-500 text-gray-900">{shift.label}</div>
              <div className="body-14-400 text-gray-600">{shift.time}</div>
            </div>
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={index} style={{ backgroundColor: shift.color }}></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;

import { UserSchedule } from '@/api/endpoints/settings/userSchedule/types';

const CalendarCell = ({
  day,
  isCurrentMonth,
  isLastDayOfWeek,
  isFirstWeek,
  shifts,
}: {
  day: {
    kstDate: Date;
    formattedDate: string;
  };
  isCurrentMonth: boolean;
  isLastDayOfWeek: boolean;
  isFirstWeek: boolean;
  shifts: UserSchedule['shifts'];
}) => {
  return (
    <li
      className={`flex min-h-100 w-full items-start ${
        !isFirstWeek && 'border-t border-gray-300'
      }`}
    >
      <div
        className={`flex h-full w-full flex-col items-start gap-8 p-16 ${
          !isLastDayOfWeek && 'border-r border-gray-300'
        }`}
      >
        <time
          dateTime={day.formattedDate}
          className={`body-14-400 ${
            isCurrentMonth ? 'text-gray-700' : 'text-gray-400'
          }`}
        >
          {day.kstDate.getDate()}
        </time>

        {/* 근무 정보 표시 */}
        {shifts &&
          shifts
            .filter(shift => shift.shiftDate === day.formattedDate)
            .map(shift => (
              <div
                key={shift.shiftDate}
                className="caption-12-400 w-full rounded-4 bg-primary-100 px-8 py-4 text-primary-600"
              >
                {shift.shiftName}
              </div>
            ))}
      </div>
    </li>
  );
};

export default CalendarCell;

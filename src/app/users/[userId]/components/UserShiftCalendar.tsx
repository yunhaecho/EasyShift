import { generateCalendar } from '@/utils/dateUtils';
import {
  CalendarCell,
  MonthlySummaryCard,
  CalendarHeader,
  WeekdayHeader,
} from './calendar';
import { UserSchedule } from '@/api/endpoints/settings/userSchedule/types';

const UserShiftCalendar = ({
  mode,
  schedules,
  currentYear,
  currentMonth,
}: {
  mode: 'modal' | 'page';
  schedules: UserSchedule[];
  currentYear: number;
  currentMonth: number;
}) => {
  const daysInCalendar = generateCalendar(new Date(currentYear, currentMonth));

  return (
    <section className="flex h-full w-[75%] flex-col gap-24 overflow-y-auto border-l border-gray-300 p-32">
      <article className="rounded-8 bg-white p-24 shadow-md">
        <CalendarHeader
          currentMonth={currentMonth}
          currentYear={currentYear}
          mode={mode}
        />

        <div className="w-full text-center">
          <WeekdayHeader />

          <ul className="grid grid-cols-7">
            {daysInCalendar.map((day, index) => {
              const isCurrentMonth = day.isCurrentMonth;
              const isLastDayOfWeek = index % 7 === 6;
              const isFirstWeek = index < 7;

              return (
                <CalendarCell
                  key={day.kstDate.getTime()}
                  day={day} //DD
                  isCurrentMonth={isCurrentMonth} //날짜 색상 변경용
                  isLastDayOfWeek={isLastDayOfWeek} //보더 색상 변경용
                  isFirstWeek={isFirstWeek} //보더 색상 변경용
                  shifts={schedules.flatMap(schedule => schedule.shifts)}
                />
              );
            })}
          </ul>
        </div>
      </article>
      <article className="rounded-8 bg-white p-24 shadow-md">
        <MonthlySummaryCard schedules={schedules} />
      </article>
    </section>
  );
};

export default UserShiftCalendar;

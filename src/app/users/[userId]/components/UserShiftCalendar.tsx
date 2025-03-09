'use client';

import { useContext } from 'react';
import useMonthlyCalendar from '@/hooks/useMonthlyCalendar';
import { generateCalendar } from '@/utils/dateUtils';
import {
  CalendarCell,
  MonthlySummaryCard,
  CalendarHeader,
  WeekdayHeader,
} from './calendar';
import UserPageContext from '@/app/context/UserPageContext';

export default function UserShiftCalendar() {
  const { currentYear, currentMonth, goToPrevOrNextMonth } =
    useMonthlyCalendar();
  const { schedules } = useContext(UserPageContext);
  const daysInCalendar = generateCalendar(new Date(currentYear, currentMonth));

  const goToPrevMonth = () => goToPrevOrNextMonth(-1);
  const goToNextMonth = () => goToPrevOrNextMonth(1);

  return (
    <section className="flex h-full w-[75%] flex-col gap-24 overflow-y-auto p-32">
      <article className="rounded-8 bg-white p-24 shadow-md">
        <CalendarHeader
          currentMonth={currentMonth}
          currentYear={currentYear}
          goToPrevMonth={goToPrevMonth}
          goToNextMonth={goToNextMonth}
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
                  day={day}
                  isCurrentMonth={isCurrentMonth}
                  isLastDayOfWeek={isLastDayOfWeek}
                  isFirstWeek={isFirstWeek}
                  shifts={schedules.flatMap(schedule => schedule.shifts)}
                />
              );
            })}
          </ul>
        </div>
      </article>
      <article className="rounded-8 bg-white p-24 shadow-md">
        <MonthlySummaryCard />
      </article>
    </section>
  );
}

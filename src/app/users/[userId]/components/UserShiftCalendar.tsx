'use client';

import { useContext, useMemo } from 'react';
import useMonthlyCalendar from '@/hooks/useMonthlyCalendar';
import { generateCalendar } from '@/utils/dateUtils';
import { DialogContext } from '@/app/workers/components/WorkerInfoModal.context';
import {
  CalendarCell,
  MonthlySummaryCard,
  CalendarHeader,
  WeekdayHeader,
} from './calendar';

export default function UserShiftCalendar() {
  const { currentYear, currentMonth, goToPrevOrNextMonth } =
    useMonthlyCalendar();
  const value = useContext(DialogContext);
  const daysInCalendar = generateCalendar(new Date(currentYear, currentMonth));

  const workerSchedule = useMemo(() => {
    return value.schedules.flatMap(scheduleDetail =>
      scheduleDetail.shifts
        .filter(
          shiftDetail =>
            new Date(shiftDetail.shiftDate).getMonth() === currentMonth,
        )
        .map(shiftDetail => ({
          date: shiftDetail.shiftDate,
          color:
            scheduleDetail.scheduleName === '야간 근무'
              ? 'bg-green-400'
              : scheduleDetail.scheduleName === '주간 근무'
                ? 'bg-orange-400'
                : '',
        })),
    );
  }, [currentMonth, value]);

  const goToPrevMonth = () => goToPrevOrNextMonth(-1);
  const goToNextMonth = () => goToPrevOrNextMonth(1);

  return (
    <section className="h-full w-[75%] overflow-y-auto p-32">
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
                  shifts={workerSchedule}
                />
              );
            })}
          </ul>
        </div>
        <MonthlySummaryCard />
      </article>
    </section>
  );
}

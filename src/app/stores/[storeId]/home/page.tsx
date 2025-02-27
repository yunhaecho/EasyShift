'use client';

import WeeklyCalendar from './components/WeeklyCalendar';
import WeeklyNavigator from './components/WeeklyNavigator';
import useWeeklyCalendar from './hooks/useWeeklyCalendar';
import { WeekDates } from './types';

const HomePage = () => {
  const { currentWeekDates, setCurrentDate, goToNextWeek, goToPreviousWeek } =
    useWeeklyCalendar();

  return (
    <main className="flex w-full flex-col gap-14 px-32 py-14">
      <WeeklyNavigator
        currentWeekDates={currentWeekDates as WeekDates}
        setCurrentDate={setCurrentDate}
        goToNextWeek={goToNextWeek}
        goToPreviousWeek={goToPreviousWeek}
      />

      {/* Todo: 선택된 스케줄 드랍박스 추가 */}

      <WeeklyCalendar currentWeekDates={currentWeekDates} />
    </main>
  );
};

export default HomePage;
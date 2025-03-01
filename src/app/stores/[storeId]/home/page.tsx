'use client';

import WeeklyCalendar from './components/WeeklyCalendar';
import WeeklyNavigator from './components/WeeklyNavigator';
import useWeeklyCalendar from './hooks/useWeeklyCalendar';
import { WeekDates } from './types';
import WorkerInfoModal from '@/app/workers/components/WorkerInfoModal';
import useToggle from '@/app/hooks/useToggle';
import HomePageProvider from './components/HomePageProvider';
import { Suspense } from 'react';

const HomePage = () => {
  const [isWorkerInfoModalOpen, toggleWorkerInfoModal] = useToggle();
  const { currentWeekDates, setCurrentDate, goToNextWeek, goToPreviousWeek } =
    useWeeklyCalendar();

  return (
    <main className="flex w-full flex-col gap-14 px-32 py-14">
      <Suspense fallback={<div>Loading...</div>}>
        <HomePageProvider storeId={1}>
          <WeeklyNavigator
            currentWeekDates={currentWeekDates as WeekDates}
            setCurrentDate={setCurrentDate}
            goToNextWeek={goToNextWeek}
            goToPreviousWeek={goToPreviousWeek}
          />

          <WeeklyCalendar currentWeekDates={currentWeekDates} />

          <WorkerInfoModal
            isOpen={isWorkerInfoModalOpen}
            onClose={toggleWorkerInfoModal}
          />
        </HomePageProvider>
      </Suspense>
    </main>
  );
};

export default HomePage;

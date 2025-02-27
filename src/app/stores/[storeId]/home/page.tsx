'use client';

import { useState } from 'react';
import WeeklyCalendar from './components/WeeklyCalendar';
import WeeklyNavigator from './components/WeeklyNavigator';
import useWeeklyCalendar from './hooks/useWeeklyCalendar';
import { WeekDates } from './types';
import { useFetchHome } from '@/api/endpoints/stores/useFetchHome';
import WorkerInfoModal from '@/app/workers/components/WorkerInfoModal';
import useToggle from '@/app/hooks/useToggle';

const HomePage = () => {
  const [selectedScheduleId, setSelectedScheduleId] = useState<string>();
  const [isWorkerInfoModalOpen, toggleWorkerInfoModal] = useToggle();
  const { currentWeekDates, setCurrentDate, goToNextWeek, goToPreviousWeek } =
    useWeeklyCalendar();

  const { data: homeData, isLoading } = useFetchHome({
    storeId: '1',
    selectedScheduleId,
  });

  if (isLoading || !homeData) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex w-full flex-col gap-14 px-32 py-14">
      <WeeklyNavigator
        homeData={homeData}
        setSelectedScheduleId={setSelectedScheduleId}
        currentWeekDates={currentWeekDates as WeekDates}
        setCurrentDate={setCurrentDate}
        goToNextWeek={goToNextWeek}
        goToPreviousWeek={goToPreviousWeek}
      />

      <WeeklyCalendar
        currentWeekDates={currentWeekDates}
        shifts={homeData.selectedSchedule.shifts}
      />

      <WorkerInfoModal
        isOpen={isWorkerInfoModalOpen}
        onClose={toggleWorkerInfoModal}
      />
    </main>
  );
};

export default HomePage;

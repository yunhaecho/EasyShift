'use client';

import WorkerInfoModal from '@/app/workers/components/WorkerInfoModal';
import useToggle from '@/app/hooks/useToggle';
import { useFetchHome } from '@/api/endpoints/stores/useFetchHome';
import { useState } from 'react';
import WeeklyNavigator from './components/WeeklyNavigator';
import { WeekDates } from '../../home/types';
import useScheduleCalendar from './\bhooks/useScheduleCalendar';
import WeeklyCalendar from './components/WeeklyCalendar';

const ScheduleEditPage = () => {
  const [selectedScheduleId] = useState<string>();
  const [isWorkerInfoModalOpen, toggleWorkerInfoModal] = useToggle();
  const { currentWeekDates, goToNextWeek, goToPreviousWeek } =
    useScheduleCalendar(new Date());

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
        currentWeekDates={currentWeekDates as WeekDates}
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

export default ScheduleEditPage;

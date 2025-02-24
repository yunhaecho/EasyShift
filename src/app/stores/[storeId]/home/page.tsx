'use client';

import { useEffect, useState } from 'react';
import WeeklyCalendar from './components/WeeklyCalendar';
import WeeklyNavigator from './components/WeeklyNavigator';
import useWeeklyCalendar from './hooks/useWeeklyCalendar';
import { WeekDates } from './types';

import { useFetchHome } from '@/api/endpoints/stores/useFetchHome';
import Dropdown from '@/app/components/Dropdown';
import { FetchHomeResponse } from '@/api/endpoints/stores/stores';
import WorkerInfoModal from '@/app/workers/components/WorkerInfoModal';
import useToggle from '@/app/hooks/useToggle';

const HomePage = () => {
  const { currentWeekDates, setCurrentDate, goToNextWeek, goToPreviousWeek } =
    useWeeklyCalendar();
  const [isWorkerInfoModalOpen, toggleWorkerInfoModal] = useToggle();

  const [homeData, setHomeData] = useState<FetchHomeResponse | null>(null);
  const [selectedScheduleId, setSelectedScheduleId] = useState<string>();

  const { data, isLoading } = useFetchHome({
    storeId: '1',
    selectedScheduleId,
  });

  useEffect(() => {
    if (data) {
      setHomeData(data);
    }
  }, [data]);

  if (isLoading || !homeData) {
    return <div>Loading...</div>;
  }
  return (
    <main className="flex w-full flex-col gap-14 px-32 py-14">
      <WeeklyNavigator
        currentWeekDates={currentWeekDates as WeekDates}
        setCurrentDate={setCurrentDate}
        goToNextWeek={goToNextWeek}
        goToPreviousWeek={goToPreviousWeek}
      />

      <WeeklyCalendar
        currentWeekDates={currentWeekDates}
        shifts={homeData.selectedSchedule.shifts}
      />

      <Dropdown
        title={homeData.selectedSchedule.scheduleName}
        items={homeData.schedules
          .filter(
            schedule =>
              schedule.scheduleId !== homeData.selectedSchedule.scheduleId,
          )
          .map(schedule => schedule.scheduleName)}
        onSelect={scheduleId => {
          setSelectedScheduleId(scheduleId);
        }}
      />

      <WorkerInfoModal
        isOpen={isWorkerInfoModalOpen}
        onClose={toggleWorkerInfoModal}
      />
    </main>
  );
};

export default HomePage;

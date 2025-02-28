'use client';

import WorkerInfoModal from '@/app/workers/components/WorkerInfoModal';
import useToggle from '@/app/hooks/useToggle';
import { useFetchHome } from '@/api/endpoints/stores/useFetchHome';
import { useState } from 'react';
import WeeklyNavigator from './components/WeeklyNavigator';
import { WeekDates } from '../../home/types';
import useScheduleCalendar from './\bhooks/useScheduleCalendar';
import WeeklyCalendar from './components/WeeklyCalendar';
import { useSearchParams } from 'next/navigation';
import { parse } from 'date-fns/parse';

const ScheduleEditPage = () => {
  const [selectedScheduleId] = useState<string>();
  const [isWorkerInfoModalOpen, toggleWorkerInfoModal] = useToggle();

  const searchParams = useSearchParams();
  const date = parse(
    searchParams.get('date') + '-01',
    'yyyy-MM-dd',
    new Date(),
  );

  const { currentWeekDates, goToNextWeek, goToPreviousWeek } =
    useScheduleCalendar(date);

  const { data: homeData, isLoading } = useFetchHome({
    storeId: '1',
    selectedScheduleId,
  });

  if (isLoading || !homeData) {
    return <div>Loading...</div>;
  }

  return (
    <>
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
      </main>

      <WorkerInfoModal
        isOpen={isWorkerInfoModalOpen}
        onClose={toggleWorkerInfoModal}
      />
    </>
  );
};

export default ScheduleEditPage;

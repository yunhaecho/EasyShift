'use client';

import WorkerInfoModal from '@/app/workers/components/WorkerInfoModal';
import useToggle from '@/app/hooks/useToggle';
import WeeklyNavigator from './components/WeeklyNavigator';
import { WeekDates } from '../../home/types';
import useScheduleCalendar from './\bhooks/useScheduleCalendar';
import WeeklyCalendar from './components/WeeklyCalendar';
import { useSearchParams } from 'next/navigation';
import { parse } from 'date-fns/parse';
import WorkersListSidebar from './components/WorkersListSidebar';

const ScheduleEditPage = () => {
  const [isWorkerInfoModalOpen, toggleWorkerInfoModal] = useToggle();

  const searchParams = useSearchParams();
  const date = parse(
    searchParams.get('date') + '-01',
    'yyyy-MM-dd',
    new Date(),
  );

  const { currentWeekDates, goToNextWeek, goToPreviousWeek } =
    useScheduleCalendar(date);

  return (
    <>
      <main className="flex w-full flex-col gap-14 px-32 py-14">
        <WeeklyNavigator
          currentWeekDates={currentWeekDates as WeekDates}
          goToNextWeek={goToNextWeek}
          goToPreviousWeek={goToPreviousWeek}
        />
        <WeeklyCalendar currentWeekDates={currentWeekDates} />
      </main>
      <WorkersListSidebar />

      <WorkerInfoModal
        isOpen={isWorkerInfoModalOpen}
        onClose={toggleWorkerInfoModal}
      />
    </>
  );
};

export default ScheduleEditPage;

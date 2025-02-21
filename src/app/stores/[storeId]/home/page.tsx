'use client';

import WeeklyCalendar from './components/WeeklyCalendar';
import WeeklyNavigator from './components/WeeklyNavigator';
import useCalendar from './hooks/useCalendar';
import WorkerInfoModal from '@/app/workers/components/WorkerInfoModal';

const HomePage = () => {
  const {
    currentWeekDates,
    setCurrentDate,
    goToNextWeek,
    goToPreviousWeek,
    isWorkerInfoModalOpen,
    toggleWorkerInfoModal,
  } = useCalendar();

  return (
    <main className="flex w-full flex-col gap-14 px-32 py-14">
      {/* Weekly Navigator */}
      <WeeklyNavigator
        currentWeekDates={currentWeekDates}
        setCurrentDate={setCurrentDate}
        goToNextWeek={goToNextWeek}
        goToPreviousWeek={goToPreviousWeek}
      />

      {/* Todo: 선택된 스케줄 드랍박스 추가 */}

      {/* Weekly Calendar */}
      <WeeklyCalendar
        currentWeekDates={currentWeekDates}
        toggleWorkerInfoModal={toggleWorkerInfoModal}
      />

      {/* Worker Information Modal */}
      {isWorkerInfoModalOpen && (
        <WorkerInfoModal
          isOpen={isWorkerInfoModalOpen}
          onClose={toggleWorkerInfoModal}
        />
      )}
    </main>
  );
};

export default HomePage;

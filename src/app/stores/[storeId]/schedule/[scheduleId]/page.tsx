'use client';

import UserInfoModal from '@/app/components/modals/UserInfoModal';
import useToggle from '@/app/hooks/useToggle';
import WeeklyNavigator from './components/WeeklyNavigator';
import useScheduleCalendar from './hooks/useScheduleCalendar';
import WeeklyCalendar from './components/WeeklyCalendar';
import { useSearchParams } from 'next/navigation';
import { parse } from 'date-fns/parse';
import WorkersListSidebar from './components/WorkersListSidebar';
import ScheduleDetailPageProvider from './components/ScheduleDetailPageProvider';

const ScheduleDetailPage = () => {
  const [isUserInfoModalOpen, toggleUserInfoModal] = useToggle();

  const searchParams = useSearchParams();
  const date = parse(
    searchParams.get('date') + '-01',
    'yyyy-MM-dd',
    new Date(),
  );

  const { currentWeekDates, goToNextWeek, goToPreviousWeek } =
    useScheduleCalendar(date);

  return (
    <ScheduleDetailPageProvider>
      <main className="flex w-full flex-col gap-14 px-32 py-14">
        <WeeklyNavigator
          goToNextWeek={goToNextWeek}
          goToPreviousWeek={goToPreviousWeek}
        />
        <WeeklyCalendar currentWeekDates={currentWeekDates} />
      </main>
      <WorkersListSidebar />

      <UserInfoModal
        isOpen={isUserInfoModalOpen}
        onClose={toggleUserInfoModal}
        userId={401} // [TODO]: Edit this
      />
    </ScheduleDetailPageProvider>
  );
};

export default ScheduleDetailPage;

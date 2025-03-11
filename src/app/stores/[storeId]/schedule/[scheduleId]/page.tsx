'use client';

import UserInfoModal from '@/app/components/modals/UserInfoModal';
import useToggle from '@/app/hooks/useToggle';
import WeeklyNavigator from './components/WeeklyNavigator';
import WeeklyCalendar from './components/WeeklyCalendar';
import WorkersListSidebar from './components/WorkersListSidebar';
import ScheduleDetailPageProvider from './components/ScheduleDetailPageProvider';
import { Suspense } from 'react';
import ScheduleDetailPageSkeleton from './components/ScheduleDetailPageSkeleton';

const ScheduleDetailPage = () => {
  const [isUserInfoModalOpen, toggleUserInfoModal] = useToggle();

  return (
    <Suspense fallback={<ScheduleDetailPageSkeleton />}>
      <ScheduleDetailPageProvider>
        <main className="flex w-full flex-col gap-14 px-32 py-14">
          <WeeklyNavigator />
          <WeeklyCalendar />
        </main>
        <WorkersListSidebar />

        <UserInfoModal
          isOpen={isUserInfoModalOpen}
          onClose={toggleUserInfoModal}
          userId={401} // [TODO]: Edit this
        />
      </ScheduleDetailPageProvider>
    </Suspense>
  );
};

export default ScheduleDetailPage;

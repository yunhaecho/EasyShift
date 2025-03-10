'use client';

import UserProfileCard from './UserProfileCard';
import UserShiftCalendar from './UserShiftCalendar';
import { useQuery } from '@tanstack/react-query';
import { userScheduleQueryOptions } from '@/api/endpoints/settings/userSchedule/useFetchUserScheule';
import useMonthlyCalendar from '@/hooks/useMonthlyCalendar';

const UserInfoContent = ({
  storeId,
  userId,
  mode,
}: {
  storeId?: number | null;
  userId?: number | null;
  mode: 'modal' | 'page';
}) => {
  const { currentYear, currentMonth, goToPrevOrNextMonth } =
    useMonthlyCalendar();

  const { data: userSchedulesData } = useQuery(
    userScheduleQueryOptions({
      storeId,
      userId,
      date: `${currentYear}-${currentMonth + 1}`,
    }),
  );

  const goToPrevMonth = () => goToPrevOrNextMonth(-1);
  const goToNextMonth = () => goToPrevOrNextMonth(1);

  return (
    <div className="flex h-full w-full">
      <UserProfileCard />
      <UserShiftCalendar
        mode={mode}
        schedules={userSchedulesData?.schedules ?? []}
        currentYear={currentYear}
        currentMonth={currentMonth}
        goToPrevMonth={goToPrevMonth}
        goToNextMonth={goToNextMonth}
      />
    </div>
  );
};

export default UserInfoContent;

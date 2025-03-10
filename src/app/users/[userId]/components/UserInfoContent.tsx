'use client';

import UserProfileCard from './UserProfileCard';
import UserShiftCalendar from './UserShiftCalendar';
import { useSuspenseQuery } from '@tanstack/react-query';
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
  const { currentYear, currentMonth } = useMonthlyCalendar();
  const { data: userSchedulesData } = useSuspenseQuery(
    userScheduleQueryOptions({
      storeId,
      userId,
      date: `${currentYear}-${currentMonth}`,
    }),
  );

  return (
    <div className="flex h-full w-full">
      <UserProfileCard />
      <UserShiftCalendar schedules={userSchedulesData?.schedules} mode={mode} />
    </div>
  );
};

export default UserInfoContent;

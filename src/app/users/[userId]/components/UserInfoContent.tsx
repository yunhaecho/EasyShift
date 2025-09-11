'use client';

import UserProfileCard from './UserProfileCard';
import UserShiftCalendar from './UserShiftCalendar';
import { useQuery } from '@tanstack/react-query';
import { userScheduleQueryOptions } from '@/api/endpoints/settings/userSchedule/useFetchUserScheule';
import useMonthlyCalendar from '@/hooks/useMonthlyCalendar';
import UserShiftCalendarSkeleton from './UserShiftCalendarSkeleton';
import useDebounce from '@/app/hooks/useDebounce';

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

  const { data: userSchedulesData, isLoading } = useQuery(
    userScheduleQueryOptions({
      storeId,
      userId,
      date: `${currentYear}-${currentMonth + 1}`,
    }),
  );

  const isUserSchedulesLoading = useDebounce(isLoading);

  return (
    <div className="flex h-full w-full">
      <UserProfileCard />
      {isUserSchedulesLoading ? (
        <UserShiftCalendarSkeleton />
      ) : (
        <UserShiftCalendar
          mode={mode}
          schedules={userSchedulesData?.schedules ?? []}
          currentYear={currentYear}
          currentMonth={currentMonth}
        />
      )}
    </div>
  );
};

export default UserInfoContent;

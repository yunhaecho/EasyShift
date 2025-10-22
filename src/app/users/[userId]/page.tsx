import UserPageProvider from './components/UserPageProvider';
import { useContext } from 'react';
import useDebounce from '@/app/hooks/useDebounce';
import UserProfileCard from './components/UserProfileCard';
import UserShiftCalendarSkeleton from './components/UserShiftCalendarSkeleton';
import UserShiftCalendar from './components/UserShiftCalendar';
import { CalendarContext } from '@/app/context/CalendarContext';
import { MonthlySummaryCard } from './components/calendar';
import CalendarProvider from './components/calendar/CalendarProvider';

const UserPageProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserPageProvider>
      <CalendarProvider>{children}</CalendarProvider>
    </UserPageProvider>
  );
};

const UserPage = () => {
  const scheduleData = useContext(CalendarContext);
  const isUserSchedulesLoading = useDebounce(scheduleData.isLoading);
  const mode = 'page';
  return (
    <UserPageProviders>
      <div className="grid w-full grid-cols-[1fr,2fr]">
        <UserProfileCard />
        {isUserSchedulesLoading ? (
          <UserShiftCalendarSkeleton />
        ) : (
          <section className="grid-row-2 grid h-full gap-24 p-32">
            <UserShiftCalendar mode={mode} />
            <article className="rounded-8 bg-white p-24 shadow-md">
              <MonthlySummaryCard />
            </article>
          </section>
        )}
      </div>
    </UserPageProviders>
  );
};

export default UserPage;

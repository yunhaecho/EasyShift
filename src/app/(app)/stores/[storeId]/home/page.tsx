'use client';

import WeeklyCalendar from './components/WeeklyCalendar';
import WeeklyNavigator from './components/WeeklyNavigator';
import HomePageProvider from './components/HomePageProvider';
import { Suspense } from 'react';
import HomePageSkeleton from './components/HomePageSkeleton';

const HomePage = () => {
  return (
    <main className="flex w-full flex-col gap-14 px-32 py-14">
      <Suspense fallback={<HomePageSkeleton />}>
        <HomePageProvider>
          <WeeklyNavigator />
          <WeeklyCalendar />
        </HomePageProvider>
      </Suspense>
    </main>
  );
};

export default HomePage;

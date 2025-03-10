'use client';

import WeeklyCalendar from './components/WeeklyCalendar';
import WeeklyNavigator from './components/WeeklyNavigator';
import HomePageProvider from './components/HomePageProvider';
import { Suspense } from 'react';

const HomePage = () => {
  return (
    <main className="flex w-full flex-col gap-14 px-32 py-14">
      <Suspense fallback={<div>Loading...</div>}>
        <HomePageProvider>
          <WeeklyNavigator />
          <WeeklyCalendar />
        </HomePageProvider>
      </Suspense>
    </main>
  );
};

export default HomePage;

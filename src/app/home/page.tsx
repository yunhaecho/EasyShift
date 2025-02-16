'use client';

import { useState } from 'react';
import ShareIcon from '../../assets/icons/share.svg';
import WeeklyCalendar from './components/WeeklyCalendar';
import WeeklyNavigator from './components/WeeklyNavigator';

const HomePage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="flex w-full flex-col gap-14 px-32 py-14">
      <div className="flex h-42 items-center justify-between">
        <WeeklyNavigator
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
        <button className="flex h-full items-center gap-12 rounded-4 border border-gray-400 bg-white px-16 py-8">
          <ShareIcon />
          <div className="body-16-400 text-gray-800">Share</div>
        </button>
      </div>
      <WeeklyCalendar currentDate={currentDate} />
    </div>
  );
};

export default HomePage;

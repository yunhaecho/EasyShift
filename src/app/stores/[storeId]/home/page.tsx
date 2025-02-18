'use client';

import { useState } from 'react';
import WeeklyCalendar from './components/WeeklyCalendar';
import WeeklyNavigator from './components/WeeklyNavigator';

import ShareIcon from '@/assets/icons/share.svg';

const HomePage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="flex w-full flex-col gap-14 px-32 py-14">
      <div className="flex h-42 items-center justify-between">
        <div className="flex h-full gap-12">
          {/* Weekly Navigator */}
          <WeeklyNavigator
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
          />

          {/* Today Button */}
          <button
            className="flex h-full items-center gap-12 rounded-4 border border-gray-400 bg-white px-16 py-8"
            onClick={() => setCurrentDate(new Date())}
          >
            <p className="body-16-400 text-gray-800">Today</p>
          </button>
        </div>

        {/* Share Button */}
        <button className="flex h-full items-center gap-12 rounded-4 border border-gray-400 bg-white px-16 py-8">
          <ShareIcon />
          <p className="body-16-400 text-gray-800">Share</p>
        </button>
      </div>

      {/* Weekly Calendar */}
      <WeeklyCalendar currentDate={currentDate} />
    </div>
  );
};

export default HomePage;

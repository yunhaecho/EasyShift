'use client';

import { useEffect, useState } from 'react';
import WeeklyCalendar from './components/WeeklyCalendar';
import WeeklyNavigator from './components/WeeklyNavigator';

import { useFetchHome } from '@/api/endpoints/stores/useFetchHome';
import Dropdown from '@/app/components/Dropdown';
import { FetchHomeResponse } from '@/api/endpoints/stores/stores';
const HomePage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [homeData, setHomeData] = useState<FetchHomeResponse | null>(null);
  const [selectedScheduleId, setSelectedScheduleId] = useState<string>();

  const { data, isLoading } = useFetchHome({
    storeId: '1',
    selectedScheduleId,
  });

  useEffect(() => {
    if (data) {
      setHomeData(data);
    }
  }, [data]);

  if (isLoading || !homeData) {
    return <div>Loading...</div>;
  }

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
        <Dropdown
          title={homeData.selectedSchedule.scheduleName}
          items={homeData.schedules
            .filter(
              schedule =>
                schedule.scheduleId !== homeData.selectedSchedule.scheduleId,
            )
            .map(schedule => schedule.scheduleName)}
          onSelect={scheduleId => {
            setSelectedScheduleId(scheduleId);
          }}
        />
      </div>

      {/* Weekly Calendar */}
      <WeeklyCalendar
        currentDate={currentDate}
        selectedSchedule={homeData.selectedSchedule}
      />
    </div>
  );
};

export default HomePage;

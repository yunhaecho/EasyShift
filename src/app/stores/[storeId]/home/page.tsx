'use client';

import { useState } from 'react';
import WeeklyCalendar from './components/WeeklyCalendar';
import WeeklyNavigator from './components/WeeklyNavigator';
import CreateStoreModal from './components/CreateStoreModal';

import ShareIcon from '@/assets/icons/share.svg';
import StoreGrayIcon from '@/assets/icons/store-gray.svg';
import PlusWhiteIcon from '@/assets/icons/plus-white.svg';

const HomePage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* 임시 */
  const isStoreExist = false;

  return isStoreExist ? (
    <div className="flex w-full flex-col gap-14 px-32 py-14">
      <div className="flex h-42 items-center justify-between">
        <div className="flex h-full gap-12">
          <WeeklyNavigator
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
          />
          <button
            className="flex h-full items-center gap-12 rounded-4 border border-gray-400 bg-white px-16 py-8"
            onClick={() => setCurrentDate(new Date())}
          >
            <p className="body-16-400 text-gray-800">Today</p>
          </button>
        </div>
        <button className="flex h-full items-center gap-12 rounded-4 border border-gray-400 bg-white px-16 py-8">
          <ShareIcon />
          <p className="body-16-400 text-gray-800">Share</p>
        </button>
      </div>
      <WeeklyCalendar currentDate={currentDate} />
    </div>
  ) : (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center gap-22">
        <StoreGrayIcon />
        <div className="flex flex-col items-center gap-4">
          <p className="body-18-500 text-gray-900">Please create a store</p>
          <p className="body-14-400 text-gray-600">
            Get started by creating your first store
          </p>
        </div>
        <button
          className="flex items-center gap-12 rounded-4 bg-gray-900 px-16 py-8"
          onClick={() => setIsModalOpen(true)}
        >
          <PlusWhiteIcon />
          <p className="body-16-400 text-white">Create Store</p>
        </button>
      </div>

      {isModalOpen && (
        <CreateStoreModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default HomePage;

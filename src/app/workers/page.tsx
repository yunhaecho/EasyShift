'use client';

import CloseIcon from '@/assets/icons/close.svg';
import Calendar from './components/Calendar';
import ProfileCard from './components/ProfileCard';

export default function WorkerInfo() {
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-center p-0 opacity-100">
      <div className="flex h-789 w-1024 flex-col rounded-xl bg-white p-32 opacity-100 shadow-sm">
        <div className="mb-20 flex w-full cursor-pointer justify-end">
          <CloseIcon />
        </div>

        <div className="flex flex-1 flex-row">
          {/*프로필 섹션 */}
          <ProfileCard />

          {/* 캘린더 섹션 */}
          <div className="h-full flex-[1.5] pl-32">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}

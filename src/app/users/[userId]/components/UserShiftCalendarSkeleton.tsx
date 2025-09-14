import ChevronLeftLightGrayIcon from '@/assets/icons/chevron-left-lightgray.svg';
import ChevronRightLightGrayIcon from '@/assets/icons/chevron-right-lightgray.svg';
import { weekNames } from '@/constants/weekNames';

const UserShiftCalendarSkeleton = () => {
  return (
    <section className="p-32">
      <article className="rounded-8 bg-white p-12 shadow-md">
        {/* 캘린더 헤더 */}
        <header className="mb-26 flex h-32 items-center justify-between">
          <nav className="flex items-center gap-30">
            <ChevronLeftLightGrayIcon className="animate-pulse" />
            <div className="h-24 w-180 animate-pulse rounded-4 bg-gray-200" />
            <ChevronRightLightGrayIcon className="animate-pulse" />
          </nav>
          <div className="h-32 w-200 animate-pulse rounded-4 bg-gray-200" />
        </header>
        {/* 요일 헤더 */}
        <ul className="mb-5 grid auto-rows-[40px] grid-cols-7 gap-8">
          {weekNames.map(week => (
            <li
              key={week}
              className="body-14-500 h-24 animate-pulse rounded-4 bg-gray-100 text-gray-600"
            >
              {week}
            </li>
          ))}
        </ul>
        {/* 캘린더 셀 */}
        <ul className="grid auto-rows-[62px] grid-cols-7 gap-8">
          {Array.from({ length: 35 }).map((_, index) => (
            <li
              key={index}
              className="body-14-400 animate-pulse cursor-pointer rounded-lg border border-gray-300 bg-gray-100 pt-8 text-gray-400"
            >
              <div className="mx-auto h-20 w-20 rounded-4 bg-gray-200" />
            </li>
          ))}
        </ul>
      </article>

      {/* 월간 요약 카드 (MonthlySummaryCard) */}
      <article className="mt-24 rounded-8 bg-white p-24 shadow-md">
        <div className="h-24 w-1/3 animate-pulse rounded-4 bg-gray-200" />
        <ul className="mt-16 flex gap-24">
          {Array.from({ length: 3 }).map((_, index) => (
            <li
              key={index}
              className="flex-1 border-r border-gray-300 pr-24 last:border-0"
            >
              <div className="h-20 w-3/4 animate-pulse rounded-4 bg-gray-200" />
              <div className="mt-12 h-16 w-1/2 animate-pulse rounded-4 bg-gray-200" />
              <div className="mt-8 h-16 w-1/3 animate-pulse rounded-4 bg-gray-200" />
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default UserShiftCalendarSkeleton;

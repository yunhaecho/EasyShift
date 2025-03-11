import ChevronLeftLightGrayIcon from '@/assets/icons/chevron-left-lightgray.svg';
import ChevronRightLightGrayIcon from '@/assets/icons/chevron-right-lightgray.svg';

const UserShiftCalendarSkeleton = () => {
  return (
    <section className="flex h-full w-[75%] flex-col gap-24 overflow-y-auto border-l border-gray-300 p-32">
      {/* 상단 헤더 */}
      <article className="rounded-8 bg-white p-24 shadow-md">
        <header className="mb-26 flex h-32 items-center justify-between">
          <div className="flex items-center gap-30">
            <ChevronLeftLightGrayIcon className="animate-pulse" />
            <div className="h-24 w-180 animate-pulse rounded-4 bg-gray-200" />
            <ChevronRightLightGrayIcon className="animate-pulse" />
          </div>
          <div className="h-32 w-200 animate-pulse rounded-4 bg-gray-200" />
        </header>

        {/* 요일 헤더 */}
        <div className="grid grid-cols-7 rounded-8 bg-gray-100 shadow-sm">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="h-47 w-full animate-pulse rounded-4 bg-gray-200"
            />
          ))}
        </div>

        {/* 캘린더 셀 */}
        <ul className="grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }).map((_, index) => {
            const showShiftBlock = Math.random() > 0.5;
            const isFirstRow = index < 7;
            const isFirstColumn = index % 7 === 0;

            return (
              <li
                key={index}
                className={`h-100 w-full animate-pulse rounded-4 bg-white p-16 ${
                  !isFirstColumn && 'border-l border-gray-300'
                } ${!isFirstRow && 'border-t border-gray-300'}`}
              >
                {/* 날짜 표시 영역 */}
                <div className="h-20 w-20 animate-pulse rounded-4 bg-gray-200" />
                {/*근무 정보 표시 영역*/}
                {showShiftBlock && (
                  <div className="mt-8 h-20 w-full animate-pulse rounded-4 bg-gray-200" />
                )}
              </li>
            );
          })}
        </ul>
      </article>

      {/* 월간 요약 카드 (MonthlySummaryCard) */}
      <article className="rounded-8 bg-white p-24 shadow-md">
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

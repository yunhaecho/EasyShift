import HomePageSkeleton from '@/app/(app)/stores/[storeId]/home/components/HomePageSkeleton';

const ScheduleDetailPageSkeleton = () => {
  return (
    <>
      <main className="flex w-full flex-col gap-14 px-32 py-14">
        <HomePageSkeleton />
      </main>
      <aside className="flex h-full w-[20%] flex-col border-l border-gray-300 bg-white">
        {/* 헤더 (검색 바 포함) */}
        <header className="flex flex-col gap-16 border-b border-gray-400 p-16">
          <div className="h-24 w-1/2 animate-pulse rounded-4 bg-gray-200" />
          <nav>
            <div className="flex items-center gap-12 border border-gray-400 p-12">
              <div className="h-20 w-20 animate-pulse rounded-full bg-gray-200" />
              <div className="h-20 w-full animate-pulse rounded-4 bg-gray-200" />
            </div>
          </nav>
        </header>

        {/* 리스트 로딩 */}
        <div className="flex-1 overflow-y-auto">
          <section aria-label="Workers list">
            <ul className="flex flex-col gap-8 p-8" role="list">
              {Array.from({ length: 5 }).map((_, index) => (
                <li
                  key={index}
                  className="flex cursor-pointer flex-col gap-8 rounded-8 border border-gray-400 px-16 py-12"
                  role="listitem"
                >
                  {/* 이름 부분 */}
                  <div className="flex items-center gap-12">
                    <div className="h-20 w-40 animate-pulse rounded-4 bg-gray-200" />
                  </div>
                  {/* 날짜 부분 */}
                  <div className="h-16 w-3/4 animate-pulse rounded-4 bg-gray-200" />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </aside>
    </>
  );
};

export default ScheduleDetailPageSkeleton;

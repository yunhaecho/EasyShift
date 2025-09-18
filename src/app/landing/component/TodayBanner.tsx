import Link from 'next/link';

type TodayBannerProps = {
  shiftTime: string;
  shiftName: string;
  allScheduleHref: string;
};

export default function TodayBanner({
  shiftTime,
  shiftName,
  allScheduleHref,
}: TodayBannerProps) {
  const hasShift = Boolean(shiftTime && shiftName);

  return (
    <section className="w-full rounded-xl bg-[#EFF4FF]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-16 px-24 py-24 md:flex-row md:items-center">
        <div>
          <h2 className="text-[22px] font-semibold text-[#1f2937]">
            안녕하세요!
          </h2>
          <p className="mt-4 text-[14px] text-[#6b7280]">
            오늘의 근무 일정과 주차지시서 정보를 확인하세요.
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-12 md:flex-row md:items-center">
          <div className="rounded-xl bg-white p-16 shadow-sm ring-1 ring-[#e5e7eb]">
            <p className="text-[12px] text-[#6b7280]">오늘 근무</p>
            {hasShift ? (
              <>
                <p className="mt-2 text-[18px] font-semibold text-[#111827]">
                  {shiftTime}
                </p>
                <Link
                  href={allScheduleHref}
                  className="mt-2 inline-block text-[12px] font-medium text-[#3b82f6] hover:underline"
                >
                  {shiftName}
                </Link>
              </>
            ) : (
              <p className="mt-2 text-[14px] text-[#6b7280]">
                오늘 근무가 없습니다
              </p>
            )}
          </div>

          <Link
            href={allScheduleHref}
            className="inline-flex items-center justify-center gap-8 rounded-lg bg-[#3B5BDB] px-16 py-10 text-[14px] font-medium text-white shadow-sm hover:brightness-105 active:brightness-95"
          >
            <button />
            전체 스케줄 보기
          </Link>
        </div>
      </div>
    </section>
  );
}

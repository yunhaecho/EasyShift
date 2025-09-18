import Link from 'next/link';

type AdminBannerProps = {
  todayNoteTitle: string;
  todayNoteMain: string;
  storesHref: string;
};

export default function AdminTodayBanner({
  todayNoteTitle,
  todayNoteMain,
  storesHref,
}: AdminBannerProps) {
  return (
    <section className="w-full rounded-xl bg-[#EFF4FF]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-16 px-24 py-24 md:flex-row md:items-center">
        {/* left: 인사 */}
        <div>
          <h2 className="text-[22px] font-semibold text-[#1f2937]">
            안녕하세요, 관리자님!
          </h2>
          <p className="mt-4 text-[14px] text-[#6b7280]">
            오늘의 매장 현황과 스케줄을 관리하세요.
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-12 md:flex-row md:items-center">
          <div className="rounded-xl bg-white p-16 shadow-sm ring-1 ring-[#e5e7eb]">
            <p className="text-[12px] text-[#6b7280]">{todayNoteTitle}</p>
            <p className="mt-2 text-[18px] font-semibold text-[#111827]">
              {todayNoteMain}
            </p>
          </div>

          <Link
            href={storesHref}
            className="flex items-center justify-center rounded-lg bg-[#3B5BDB] p-7 py-10 text-center text-[14px] font-medium text-white shadow-sm hover:brightness-105 active:brightness-95"
          >
            매장 관리로 이동
          </Link>
        </div>
      </div>
    </section>
  );
}

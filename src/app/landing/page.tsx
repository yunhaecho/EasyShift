'use client';
import FeatureCard from './component/FeatureCard';
import CalendarIcon from '@/assets/icons/calendar.svg';
import PeopleIcon from '@/assets/icons/people.svg';
import ChartIcon from '@/assets/icons/chart.svg';
import CircleArrow from '@/assets/icons/circle-arrow.svg';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import TodayBanner from './component/TodayBanner';
import AdminTodayBanner from './component/AdminBanner';

export default function Landing() {
  const { data } = useSession();
  const router = useRouter();
  const queryString = useSearchParams();
  const userId = 401;

  useEffect(() => {
    const reason = queryString.get('reason');
    if (!reason) return;
    if (reason === 'auth') toast.error('로그인이 필요합니다.');
    if (reason === 'forbidden') toast.error('접근 권한이 없습니다.');
  }, [queryString]);

  useEffect(() => {
    if (data?.needSignUp === true) {
      router.push('/signup');
    }
  });

  return (
    <div className="flex h-full w-full flex-col">
      {data?.user.role === 'ADMIN' ? (
        <AdminTodayBanner
          todayNoteTitle="오늘 업무"
          todayNoteMain="의복 철수 작업(우산쪽 벽면 -> 이너쪽 -> 남성 순서)"
          storesHref="/stores"
        />
      ) : data?.user.role === 'WORKER' ? (
        <TodayBanner
          shiftTime="12:00 ~ 21:00"
          shiftName="마감조"
          allScheduleHref={`/users/${userId}`}
        />
      ) : (
        <></>
      )}

      {/* 메인 phrase */}
      <div className="flex h-480 flex-col items-center justify-center bg-white pt-96">
        <div className="head-60-700 mb-24">Easy Shift</div>
        <div className="head-30-400 mb-28">
          Effortlessly Manage Your Team&apos;s Schedule
        </div>
        <div className="head-20-400">
          Streamline your workforce management with our intuitive scheduling
          solution. Save
        </div>
        <div className="head-20-400 mb-48">
          time, reduce errors, and keep your team synchronized.
        </div>

        {!data?.user.name && (
          <div className="flex flex-row gap-18">
            <button
              type="button"
              className="body-18-500 flex h-62 w-195 items-center justify-center rounded-4 bg-black text-white transition-opacity hover:opacity-20"
            >
              Get Started Free
            </button>
            <button
              type="button"
              className="body-18-500 mb-48 flex h-62 w-195 items-center justify-center rounded-4 border border-gray-900 bg-white text-black"
            >
              Learn More
            </button>
          </div>
        )}
      </div>

      {/* Feature Card */}
      <div className="flex h-372 w-full flex-row justify-evenly border-b border-gray-300 bg-gray-100">
        <FeatureCard
          icon={<CalendarIcon />}
          feature="Smart Scheduling"
          subExplain1="Intelligent scheduling algorithms that"
          subExplain2="consider availability, skills, and preferences"
        />
        <FeatureCard
          icon={<PeopleIcon />}
          feature="Team Management"
          subExplain1="Easily manage your team members, their"
          subExplain2="roles, and permissions in one place"
        />
        <FeatureCard
          icon={<ChartIcon />}
          feature="Optimization"
          subExplain1="Optimize schedules for maximum"
          subExplain2="efficiency and employee satisfaction"
        />
        <FeatureCard
          icon={<CircleArrow />}
          feature="Real-time Updates"
          subExplain1="Instant notifications and updates for"
          subExplain2="schedule changes and requests"
        />
      </div>
      <div className="body-14-400 flex h-116 flex-col items-center justify-center bg-white">
        © 2024 Easy Shift. All rights reserved.{' '}
      </div>
    </div>
  );
}

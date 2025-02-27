import FeatureCard from './component/FeatureCard';
import CalendarIcon from '@/assets/icons/calendar.svg';
import PeopleIcon from '@/assets/icons/people.svg';
import ChartIcon from '@/assets/icons/chart.svg';
import CircleArrow from '@/assets/icons/circle-arrow.svg';

export default function Landing() {
  return (
    <div className="flex h-full w-full flex-col">
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
        <div className="flex flex-row gap-18">
          <button
            type="button"
            className="body-18-500 flex h-62 w-195 items-center justify-center rounded-4 bg-black text-white"
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

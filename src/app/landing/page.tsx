import FeatureCard from './component/FeatureCard';
import CalendarIcon from '@/assets/icons/calendar.svg';
import PeopleIcon from '@/assets/icons/people.svg';
import ChartIcon from '@/assets/icons/chart.svg';
import CircleArrow from '@/assets/icons/circle-arrow.svg';

export default function Landing() {
  return (
    <div className="flex h-full w-full flex-col">
      {/* Hero Section */}
      <section className="flex h-480 flex-col items-center justify-center bg-white pt-96">
        <h1 className="text-head-60-700 mb-24 text-6xl font-bold">
          Easy Shift
        </h1>
        <h2 className="text-head-30-400 mb-28 text-3xl font-normal">
          Effortlessly Manage Your Team&apos;s Schedule
        </h2>
        <p className="text-head-20-400 text-xl font-normal">
          Streamline your workforce management with our intuitive scheduling
          solution. Save
        </p>
        <p className="text-head-20-400 mb-48 text-xl font-normal">
          time, reduce errors, and keep your team synchronized.
        </p>
        <div className="flex flex-row gap-18">
          <button className="body-18-500 flex h-62 w-195 cursor-pointer items-center justify-center rounded-4 bg-black text-white">
            Get Started Free
          </button>
          <button className="body-18-500 mb-48 flex h-62 w-195 cursor-pointer items-center justify-center rounded-4 border border-gray-900 bg-white text-black">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex h-372 w-full flex-row justify-evenly bg-gray-100">
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
      </section>

      {/* Footer */}
      <footer className="body-14-400 flex h-116 flex-col items-center justify-center bg-white">
        © 2024 Easy Shift. All rights reserved.
      </footer>
    </div>
  );
}

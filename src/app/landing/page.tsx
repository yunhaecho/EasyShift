import FeatureCard from "./component/FeatureCard";
import CalendarIcon from "@/../public/icons/calendar.svg";
import PeopleIcon from "@/../public/icons/people.svg";
import ChartIcon from "@/../public/icons/chart.svg";
import CircleArrow from "@/../public/icons/circle-arrow.svg";

export default function Landing() {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex flex-col items-center justify-center h-480 bg-white pt-96 pd">
                <div className="text-head-60-700 text-6xl font-bold mb-24">Easy Shift</div>
                <div className="text-head-30-400 text-3xl font-normal mb-28">Effortlessly Manage Your Team&apos;s Schedule</div>
                <div className="text-head-20-400 text-xl font-normal ">Streamline your workforce management with our intuitive scheduling solution. Save</div>
                <div className="text-head-20-400 text-xl font-normal mb-48">time, reduce errors, and keep your team synchronized.</div>
                <div className="flex flex-row gap-18">
                    <div className="flex items-center justify-center w-195 h-62 rounded-4 body-18-500 bg-black text-white cursor-pointer" >Get Started Free</div>
                    <div className="flex items-center justify-center w-195 h-62 rounded-4 body-18-500 bg-white border border-gray-900 text-black mb-48 cursor-pointer">Learn More</div>
                </div>
            </div>
            <div className="flex flex-row w-full h-372 bg-gray-100 justify-evenly">
                <FeatureCard icon={<CalendarIcon />} feature='Smart Scheduling' subExplain1='Intelligent scheduling algorithms that' subExplain2='consider availability, skills, and preferences'/>
                <FeatureCard icon={<PeopleIcon/>}  feature="Team Management" subExplain1="Easily manage your team members, their" subExplain2="roles, and permissions in one place"/>
                <FeatureCard icon={ <ChartIcon/>} feature="Optimization" subExplain1="Optimize schedules for maximum" subExplain2="efficiency and employee satisfaction"/>
                <FeatureCard icon={<CircleArrow/>} feature="Real-time Updates" subExplain1="Instant notifications and updates for" subExplain2="schedule changes and requests"/>
                </div>
            <div className="flex flex-col items-center justify-center h-116 bg-white body-14-400">© 2024 Easy Shift. All rights reserved. </div>
        </div>
    )
}
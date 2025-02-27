import ProfileCard from './ProfileCard';
import Calendar from './Calendar';
import { WorkerScheduleResponse } from '@/api/endpoints/settings/workerSchedule/workerSchedule';

const WorkerInfoContent = ({data} : {data : WorkerScheduleResponse} ) => {


  return (
    <div className="flex h-full w-full items-center justify-center">

        <div className="flex h-full flex-1 flex-row items-center">
        {/*프로필 섹션 */}
        <ProfileCard />

        {/* 캘린더 섹션 */}
        <div className="h-full flex-[1.5] pl-32">
          <Calendar data={data}/>
        </div>
      </div>

    </div>
  );
};

export default WorkerInfoContent;

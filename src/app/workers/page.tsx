"use client"

import CloseIcon from '@/assets/icons/close.svg'
import Calendar from './components/Calendar';
import ProfileCard from './components/ProfileCard';


export default function WorkerInfo () {

    return  (
          <div className="w-full h-full opacity-100 flex justify-center items-center p-0 flex-wrap ">
            <div className="w-1024 h-789 p-32 bg-white rounded-xl opacity-100 flex flex-col shadow-sm">

                <div className='w-full flex justify-end cursor-pointer mb-20'>
                    <CloseIcon/>
                </div>

                <div className='flex-1 flex flex-row'>
                    
                    {/*프로필 섹션 */}
                    <ProfileCard />

                    {/* 캘린더 섹션 */}
                    <div className='flex-[1.5] h-full pl-32'>
                        <Calendar />
                    </div>
                </div>
            </div>
        </div>
    
    )
}
import Image from 'next/image'
import React, { ReactNode } from 'react'
import SampleProfile from '../../../assets/sample.jpg';
import CalendarIcon from '@/assets/icons/calendar.svg'
import PhoneIcon from '@/assets/icons/phone.svg';
import EmailIcon from '@/assets/icons/email.svg';
import LocationIcon from '@/assets/icons/location.svg';

interface ContactInfoProps {
    icon: ReactNode,
    category: string,
    contactInfo: string
}

const UserContactInfo = ({icon, category, contactInfo} : ContactInfoProps) => {
    return (
        <div className="flex flex-row w-full h-60 mb-20">
            <div className="bg-primary-100 w-60 h-full rounded-xl flex flex-col items-center justify-center mr-20">
                {icon}
            </div>
            <div className='flex flex-col justify-start items-start'>
                <span className=' flex-[1] w-full flex items-center body-14-400 text-gray-600'>{category}</span>
                <span className=' flex-[1] flex w-full items-center body-16-500'>{contactInfo}</span>
            </div>
        </div>
    )
}

function ProfileCard() {
    return (
        <div className='flex flex-1 flex-col text-center border-r border-gray-300'>
            <div className='flex flex-col justify-center items-center w-full mb-20w-full'>
                <div className='w-192 h-192 overflow-hidden mb-6'>
                    <Image 
                        src={SampleProfile} 
                        alt="Sarah Johnson 프로필 이미지"
                        className='object-cover w-full h-full rounded-full'
                    />
                </div>
                <div className='head-24-600 mt-8 mb-3 w-full'>Sarah Johnson</div>
                <div className='flex flex-row items-center justify-center w-full body-16-400 text-gray-600 mb-35'>
                    <CalendarIcon className='mr-8 ' />
                    <span className='text-gray-600'>started March 15,2023</span>
                </div>
            </div>
            {/* 근로자 정보란  */}
            <UserContactInfo 
                icon={<PhoneIcon/>}
                category='Phone'
                contactInfo='+1 (555) 123-4567'/>
            <UserContactInfo
                icon={<EmailIcon />}
                category='Email'
                contactInfo='sarah.j@example.com'/>
            <UserContactInfo
                icon={<LocationIcon />}
                category='Location'
                contactInfo='Downtown Store'/>
            </div> 
    )
}

export default ProfileCard;


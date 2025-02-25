import Image from 'next/image';
import React, { ReactNode } from 'react';
import SampleProfile from '../../../assets/sample.jpg';
import CalendarIcon from '@/assets/icons/calendar.svg';
import PhoneIcon from '@/assets/icons/phone.svg';
import EmailIcon from '@/assets/icons/email.svg';

interface ContactInfoProps {
  icon: ReactNode;
  category: string;
  contactInfo: string;
}

const UserContactInfo = ({ icon, category, contactInfo }: ContactInfoProps) => {
  return (
    <div className="mb-20 flex h-60 w-full flex-row">
      <div className="mr-20 flex h-full w-60 flex-col items-center justify-center rounded-xl bg-primary-100">
        {icon}
      </div>
      <div className="flex flex-col items-start justify-start">
        <span className="body-14-400 flex w-full flex-[1] items-center text-gray-600">
          {category}
        </span>
        <span className="body-16-500 flex w-full flex-[1] items-center">
          {contactInfo}
        </span>
      </div>
    </div>
  );
};

function ProfileCard() {
  return (
    <div className="flex h-full flex-1 flex-col border-r border-gray-300 text-center">
      <div className="mb-20w-full flex w-full flex-col items-center justify-center">
        <div className="mb-6 h-192 w-192 overflow-hidden">
          <Image
            src={SampleProfile}
            alt="Sarah Johnson 프로필 이미지"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="head-24-600 mb-3 mt-8 w-full">Sarah Johnson</div>
        <div className="body-16-400 mb-35 flex w-full flex-row items-center justify-center text-gray-600">
          <CalendarIcon className="mr-8" />
          <span className="text-gray-600">started March 15,2023</span>
        </div>
      </div>
      {/* 근로자 정보란  */}
      <UserContactInfo
        icon={<PhoneIcon />}
        category="Phone"
        contactInfo="+1 (555) 123-4567"
      />
      <UserContactInfo
        icon={<EmailIcon />}
        category="Email"
        contactInfo="sarah.j@example.com"
      />
    </div>
  );
}

export default ProfileCard;

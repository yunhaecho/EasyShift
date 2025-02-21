'use client';

import SampleProfile from '../../assets/sample.jpg';
import CalendarIcon from '@/assets/icons/calendar.svg';
import PhoneIcon from '@/assets/icons/phone.svg';
import EmailIcon from '@/assets/icons/email.svg';
import LocationIcon from '@/assets/icons/location.svg';
import ContactInfoItems from './components/ContactInfoItems';
import Calendar from './components/Calendar';
import Image from 'next/image';

export default function WorkerInfoPage() {
  return (
    <div className="flex h-full flex-1 flex-row items-center p-32">
      <div className="flex flex-1 flex-col border-r border-gray-300 text-center">
        <div className="mb-20w-full flex w-full flex-col items-center justify-center">
          <div className="mb-6 h-192 w-192 overflow-hidden">
            <Image
              src={SampleProfile}
              alt="SampleProfile"
              className="h-full w-full rounded-[50%] object-cover"
            />
          </div>
          <div className="head-24-600 mb-3 mt-8 w-full">Sarah Johnson</div>
          <div className="mb-35 flex w-full flex-row items-center justify-center text-base text-gray-600">
            <CalendarIcon className="mr-8" />
            <span className="text-gray-600">started March 15,2023</span>
          </div>
        </div>
        <ContactInfoItems
          icon={<PhoneIcon />}
          category="Phone"
          contactInfo="+1 (555) 123-4567"
        />
        <ContactInfoItems
          icon={<EmailIcon />}
          category="Email"
          contactInfo="sarah.j@example.com"
        />
        <ContactInfoItems
          icon={<LocationIcon />}
          category="Location"
          contactInfo="Downtown Store"
        />
      </div>

      <div className="flex-[1.5] pl-32">
        <Calendar />
      </div>
    </div>
  );
}

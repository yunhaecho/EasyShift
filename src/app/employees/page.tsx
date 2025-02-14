"use client"
import SampleProfile from '../../assets/sample.jpg';
import CloseImg from '../../assets/close.svg';
import CalendarImg from '../../assets/calendar.svg';
import PhoneImg from '../../assets/phone.svg';
import EmailImg from '../../assets/email.svg';
import LocationImg from '../../assets/location.svg';
import LeftArrowImg from '../../assets/leftArrow.svg';
import RightArrowImg from '../../assets/rightArrow.svg';
import Image from "next/image"
import ContactInfoItems from './components/contactInfoItems';
import Calendar from './components/calendar';

export default function EmployeeInfo () {

    return  (
        <>
          <div className="absolute w-full h-full opacity-100 flex justify-center items-center p-0 flex-wrap bg-black bg-opacity-50 z-50">
            <div className="relative w-1024 h-789 p-32 bg-white rounded-xl opacity-100 flex flex-col shadow-sm">
                <div className='w-full flex justify-end cursor-pointer mb-20'>
                    <Image 
                    src={CloseImg}
                    alt="closeButton"
                    width={12}
                    height={12}
                    />
                </div>
                <div className='flex-1 flex flex-row'>
                        <div className='flex flex-[1] flex-col text-center border-r border-gray-300'>
                            <div className='flex flex-col justify-center items-center w-full mb-20w-full'>
                                    
                                    <div className='w-192 h-192 overflow-hidden mb-6'>
                                        <Image 
                                            src={SampleProfile} 
                                            alt="SampleProfile"
                                            className='object-cover w-full h-full rounded-[50%]'
                                            />
                                    </div>
                                    <div className='head-24-600 mt-8 mb-3 w-full'>Sarah Johnson</div>
                                    <div className='flex flex-row items-center justify-center w-full text-base text-gray-600 mb-35'>
                                        <div className='mr-8 '>
                                            <Image src={CalendarImg} alt="calendarIcon" />
                                        </div>
                                        <span className='text-gray-600'>started March 15,2023</span>
                                    </div>
                            </div>      

                                <ContactInfoItems 
                                    icon={PhoneImg}
                                    category='Phone'
                                    contactInfo='+1 (555) 123-4567'/>
                                <ContactInfoItems
                                    icon={EmailImg}
                                    category='Email'
                                    contactInfo='sarah.j@example.com'/>
                                <ContactInfoItems
                                    icon={LocationImg}
                                    category='Location'
                                    contactInfo='Downtown Store'/>

                        </div>

                    <div className='flex-[1.5] h-full pl-32'>
                        <div className='flex flex-row justify-between h-32 mb-26' >
                           <span className='text-head-20-600 font-semibold text-xl'> March 15, 2023</span>
                           <div className='flex flex-row h-full gap-8 '>
                                <button className='pointer-cursor flex w-32 items-center justify-center rounded-1 border border-gray-300'>
                                    <Image
                                        src={LeftArrowImg}
                                        width={8}
                                        height={16}
                                        alt='LeftArrowImg'
                                    />
                                </button>
                                <button className='pointer-cursor flex w-32 items-center justify-center rounded-1 border border-gray-300'>
                                <Image
                                        src={RightArrowImg}
                                        width={8}
                                        height={16}
                                        alt='RightArrowImg'
                                    />
                                </button>
                           </div>
                        </div>
                        <Calendar></Calendar>
                    </div>
                </div>
   
            </div>
        </div>


            
            </>
    )
}
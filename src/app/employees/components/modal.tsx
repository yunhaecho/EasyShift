//모달창 화면 
import CloseImg from '../../../assets/close.svg';
import CalendarImg from '../../../assets/calendar.svg';
import PhoneImg from '../../../assets/phone.svg';
import EmailImg from '../../../assets/email.svg';
import LocationImg from '../../../assets/location.svg';
import Image from "next/image"
import ContactInfoItems from './contactInfoItems';

interface ModalProps {
    onClose : () => void
}

export default function EmInfoModal ({onClose} : ModalProps) {
    return (
        <div className="absolute w-full h-full opacity-100 flex justify-center items-center p-0 flex-wrap bg-black bg-opacity-50 z-50">
            <div className="relative w-[1024px] h-[789px] p-20 bg-white rounded-xl opacity-100 flex flex-col shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)]">
                <div className='w-full flex justify-end cursor-pointer mb-10'>
                    <Image 
                    src={CloseImg}
                    alt="closeButton"
                    width={12}
                    height={12}
                    onClick={onClose}
                    />
                </div>
                <div className='flex-1 border border-black flex flex-row'>
                        <div className='flex flex-[1] flex-col text-center justify-center items-center border border-black'>
                            <div className='w-[192px] h-[192px] rounded-[50%] border border-black mb-24'>
                                {/* <img src="" alt="" /> */}
                            </div>
                            <h3 className='font-medium text-2xl'>Sarah Johnson</h3>
                            <div className='flex flex-row items-center justify-center border border-black w-full text-base'>
                                <div className='mr-8'>
                                    <Image src={CalendarImg} alt="calendarIcon" />
                                </div>
                                <div>started March 15,2023</div>
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

                    <div className='flex-[2] h-full border border-black'>스케줄표 들어갈 자리</div>
                </div>
   
            </div>
        </div>
    )
}
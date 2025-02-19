//모달창 화면
import CloseImg from '@/assets/close.svg';
import CalendarImg from '@/assets/calendar.svg';
import PhoneImg from '@/assets/phone.svg';
import EmailImg from '@/assets/email.svg';
import LocationImg from '@/assets/location.svg';
import Image from 'next/image';
import ContactInfoItems from './contactInfoItems';

interface ModalProps {
  onClose: () => void;
}

export default function EmInfoModal({ onClose }: ModalProps) {
  return (
    <div className="absolute z-50 flex h-full w-full flex-wrap items-center justify-center bg-black bg-opacity-50 p-0 opacity-100">
      <div className="relative flex h-[789px] w-[1024px] flex-col rounded-xl bg-white p-20 opacity-100 shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)]">
        <div className="mb-10 flex w-full cursor-pointer justify-end">
          <Image
            src={CloseImg}
            alt="closeButton"
            width={12}
            height={12}
            onClick={onClose}
          />
        </div>
        <div className="flex flex-1 flex-row border border-black">
          <div className="flex flex-[1] flex-col items-center justify-center border border-black text-center">
            <div className="mb-24 h-[192px] w-[192px] rounded-[50%] border border-black">
              {/* <img src="" alt="" /> */}
            </div>
            <h3 className="text-2xl font-medium">Sarah Johnson</h3>
            <div className="flex w-full flex-row items-center justify-center border border-black text-base">
              <div className="mr-8">
                <Image src={CalendarImg} alt="calendarIcon" />
              </div>
              <div>started March 15,2023</div>
            </div>
            <ContactInfoItems
              icon={PhoneImg}
              category="Phone"
              contactInfo="+1 (555) 123-4567"
            />
            <ContactInfoItems
              icon={EmailImg}
              category="Email"
              contactInfo="sarah.j@example.com"
            />
            <ContactInfoItems
              icon={LocationImg}
              category="Location"
              contactInfo="Downtown Store"
            />
          </div>

          <div className="h-full flex-[2] border border-black">
            스케줄표 들어갈 자리
          </div>
        </div>
      </div>
    </div>
  );
}

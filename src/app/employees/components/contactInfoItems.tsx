import Image from 'next/image';


// import PhoneImg from '../../../assets/phone.svg';

interface ContactInfoProps {
    icon: string,
    category: string,
    contactInfo: string
}
export default function ContactInfoItems({icon,category, contactInfo} : ContactInfoProps) {
    return (
        <div className="flex flex-row w-full h-[70px] border border-black">
            <div className="bg-#E0E7FF w-[70px] h-full rounded-xl flex flex-col items-center justify-center mr-16">
                <Image 
                    src={icon}
                    width={16}
                    height={16}
                    alt='Phone Icon'/>
            </div>
            <div className='flex flex-col justify-start items-start color-##6B7280 border border-black'>
                <div className=' flex-[1] w-full flex items-center border border-black text-sm'>{category}</div>
                <div className=' flex-[1] flex w-full items-center  border border-black text-base font-semibold'>{contactInfo}</div>
            </div>
        </div>

    )
}
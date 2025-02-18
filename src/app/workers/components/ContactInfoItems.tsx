import { ReactNode } from "react"

interface ContactInfoProps {
    icon: ReactNode,
    category: string,
    contactInfo: string
}
export default function ContactInfoItems({icon, category, contactInfo} : ContactInfoProps) {
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
import { Button } from '@headlessui/react'
import { ReactNode } from 'react'

interface RoleButtonProps {
    icon: ReactNode,
    role: string,
}
export default function RoleButton({icon, role} : RoleButtonProps)  {
  return (
    <Button className='flex flex-col items-center justify-center body-16-400 w-full h-58 rounded-8 border border-gray-900 cursor-pointer hover:bg-[rgba(0,0,0,0.05)]'>
        <div className='flex flex-row items-center gap-6'>
            <div>{icon}</div>
            <div className='body-16-400 text-gray-900'>{role}</div>
        </div>
    </Button>
  )
}


import React, { ReactNode } from 'react'

interface SignUpFormProps {
    icon: ReactNode,
    formName: string,
}

export default function SignUpForm({icon, formName} : SignUpFormProps) {
  return (
    <div className=''>
        <div className="body-14-500 text-gray-800 mb-4">{formName}</div>
        <div className='flex flex-row w-full h-50 border border-gray-400'>
            {icon}
            <input className ="w-342 h-hull border-collapse outline-none text-gray-800 text-sm font-medium" type="text" />
        </div>
    </div>
  )
}

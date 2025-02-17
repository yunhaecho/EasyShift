"use client"

import Logo from '@/../../public/logo.svg';
import AdminIcon from '@/../../public/icons/admin.svg';
import WorkerIcon from '@/../../public/icons/worker.svg';
import EmailIcon from '@/../../public/icons/email.svg';
import LockIcon from '@/../../public/icons/lock.svg';
import PhoneIcon from '@/../../public/icons/phone.svg';
import RoleButton from './component/RoleButton';
import SignUpForm from './component/SignUpForm';
import { Button, Checkbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/16/solid'
import { useState } from 'react';

export default function SignUp() {
    const [enabled, setEnabled] = useState(false)

    return (
        <div className="w-full h-1024 flex flex-col items-center justify-center">
            <div className='w-448 h-full flex flex-col items-center justify-center'>
                
                <div className='flex flex-col items-center justify-center w-full h-136 mb-32'>
                    <Logo className="mb-24"/>
                    <div className='head-30-800 mb-8'>Create your account</div>
                    <div className='flex flex-row body-14-500'>
                        <div className='text-gray-700'>Or&ensp;</div>
                        <div className='text-gray-900 hover:underline cursor-pointer'>sign in to your existing account</div>
                    </div>
                </div>

                <div className='w-full h-800 flex flex-col items-center justify-center shadow-md bg-white p-32'>
                    <div className='flex flex-col w-386 h-full gap-16'>
                        <div className='flex flex-row items-center justify-center gap-16'>
                            <RoleButton icon={<AdminIcon />} role='Administrator'/>
                            <RoleButton icon={<WorkerIcon />} role='Worker'/>
                        </div>
                        <SignUpForm icon={< WorkerIcon className='mt-15 ml-12 mr-12 fill-current text-gray-500'/>}  formName= 'Full Name'/>
                        <SignUpForm icon={< EmailIcon className='mt-15 ml-12 mr-12 fill-current text-gray-500'/>}  formName= 'Email address'/>
                        <SignUpForm icon={< LockIcon className='mt-15 ml-12 mr-12'/>}  formName= 'Password'/>
                        <SignUpForm icon={< LockIcon className='mt-15 ml-12 mr-12'/>}  formName= 'Confirm Password'/>
                        <SignUpForm icon={< PhoneIcon className='mt-15 ml-12 mr-12 fill-current text-gray-500'/>}  formName= 'Phone Number (Optional)'/>
                        
                        <div className='flex flex-row items-center justify-start w-full h-24'>
                            <Checkbox
                                checked={enabled}
                                onChange={setEnabled}
                                className="mr-6 flex flex-col items-center justify-center cursor-pointer group size-20 rounded-md bg-white/10 p-1 ring-1 ring-white/15 ring-inset border border-gray-400 data-[checked]:bg-white"
                            >
                              <CheckIcon className="hidden w-20 h-20  fill-black group-data-[checked]:block" />
                            </Checkbox>
                            <span className='text-gray-600 body-14-400'>I accept the&ensp;
                                <strong className='body-14-500 text-gray-900 cursor-pointer '>Terms of Service</strong>&ensp;and&ensp;
                                <strong className='body-14-500 text-gray-900 cursor-pointer '>Privacy Policy</strong>
                            </span>
                        </div>

                        <Button className='h-46 flex flex-col items-center justify-center bg-black rounded-4 text-white '>Create Account</Button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
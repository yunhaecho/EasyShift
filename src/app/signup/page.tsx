'use client';

import AdminIcon from '@/assets/icons/admin.svg';
import WorkerIcon from '@/assets/icons/worker.svg';
// import EmailIcon from '@/assets/icons/email.svg';
// import LockIcon from '@/assets/icons/lock.svg';
import PhoneIcon from '@/assets/icons/phone.svg';
import RoleButton from './component/RoleButton';
import SignUpForm from './component/SignUpForm';
import { Button, Checkbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/16/solid';
import React, { useContext, useState } from 'react';
import { SignUpContext } from '../context/SignUpContext';
import { useSignUpDataMutation } from '@/api/endpoints/signup/usePostSignUpData';

export default function SignUp() {
  const context = useContext(SignUpContext);
  const [ enabled, setEnabled ] = useState(false);

  if (!context) {
    throw new Error('SignUpContext must be used within a SignUpProvider');
  }

  const { signUpInfo, setSignUpInfo } = context;
  const { mutate } = useSignUpDataMutation();

  const handleClickRole = (e: React.MouseEvent<HTMLElement>) => {
    const role = e.currentTarget.innerText;    
    setSignUpInfo((prev) => ({
      ...prev,
      role :  role,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target;
    setSignUpInfo((prev) => ({
      ...prev,
      [name] : value
    }))
  };

  const handleSubmit = () => {
    if(signUpInfo){
      mutate(signUpInfo);
    }
  }
    
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex h-full w-448 flex-col items-center justify-center">
        {/* Create your account 파트*/}
        <div className="text-head-30-800 mb-8 text-3xl font-extrabold">
          Create your account
        </div>
        <div className="body-14-500 mb-16 flex flex-row">
          <span className="text-gray-700">Or&ensp;</span>
          <a className="cursor-pointer text-gray-900 hover:underline">
            sign in to your existing account
          </a>
        </div>

        {/* 회원가입 정보 기입란 */}
        <div className="flex w-full h-auto flex-col items-center justify-center bg-white p-32 shadow-md mb-16">
            <div className="mb-16 flex w-full flex-row items-center justify-center gap-16">
              <RoleButton icon={<AdminIcon />} role="Administator" onClick={handleClickRole}/>
              <RoleButton icon={<WorkerIcon />} role="wroker" onClick={handleClickRole} />
            </div>
    
            <form >
            <SignUpForm
              icon={
                <WorkerIcon className="ml-12 mr-12 mt-15 fill-current text-gray-500" />
              }
              formName="Full Name"
              type="text"
              name='name'
              value={signUpInfo.name}
              onChange={handleChange}
            />
            {/* <SignUpForm
              icon={
                <EmailIcon className="ml-12 mr-12 mt-18 fill-current text-gray-500" />
              }
              formName="Email address"
              type="email"
            />
            <SignUpForm
              icon={<LockIcon className="ml-12 mr-12 mt-15" />}
              formName="Password"
              type="password"
            />
            <SignUpForm
              icon={<LockIcon className="ml-12 mr-12 mt-15" />}
              formName="Confirm Password"
              type="password"
            /> */}
            <SignUpForm
              icon={
                <PhoneIcon className="ml-12 mr-12 mt-15 fill-current text-gray-500" />
              }
              formName="Phone Number"
              type="tel"
              name='phoneNumber'
              value={signUpInfo.phoneNumber}
              onChange={handleChange}
              
            />
          </form>
        </div>


        {/* 약관동의 파트 */}
        <div className="mb-16 flex h-24 w-full flex-row items-center justify-start">
          <Checkbox
            checked={enabled}
            onChange={setEnabled}
            className="group mr-6 flex size-20 cursor-pointer flex-col items-center justify-center rounded-md border border-gray-400 bg-white/10 p-1 ring-1 ring-inset ring-white/15 data-[checked]:bg-white"
          >
            <CheckIcon className="hidden h-20 w-20 fill-black group-data-[checked]:block" />
          </Checkbox>

          <span className="body-14-400 text-gray-600">
            I accept the&ensp;
            <strong className="body-14-500 cursor-pointer text-gray-900">
              Terms of Service
            </strong>
            &ensp;and&ensp;
            <strong className="body-14-500 cursor-pointer text-gray-900">
              Privacy Policy
            </strong>
          </span>
        </div>

        {/* 제출버튼 */}
        <Button 
          onClick={handleSubmit}
          className="flex h-46 w-full flex-col items-center justify-center rounded-4 bg-black text-white">
          
          Create Account
        </Button>
      </div>
    </div>
  );
}

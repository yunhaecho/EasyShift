'use client';

import Logo from '@/../../public/logo.svg';
import AdminIcon from '@/../../public/icons/admin.svg';
import WorkerIcon from '@/../../public/icons/worker.svg';
import EmailIcon from '@/../../public/icons/email.svg';
import LockIcon from '@/../../public/icons/lock.svg';
import PhoneIcon from '@/../../public/icons/phone.svg';
import RoleButton from './component/RoleButton';
import SignUpForm from './component/SignUpForm';
import { Button, Checkbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';

export default function SignUp() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="bg-[rgba(0, 0, 0, 0)] flex h-full w-full flex-col items-center justify-center">
      <div className="flex h-full w-448 flex-col items-center justify-center">
        <div className="mb-32 flex h-136 w-full flex-col items-center justify-center">
          <Logo className="mb-24" />
          <div className="text-head-30-800 mb-8 text-3xl font-extrabold">
            Create your account
          </div>
          <div className="body-14-500 flex flex-row">
            <div className="text-gray-700">Or&ensp;</div>
            <div className="cursor-pointer text-gray-900 hover:underline">
              sign in to your existing account
            </div>
          </div>
        </div>

        <div className="flex h-800 w-full flex-col items-center justify-center bg-white p-32 shadow-md">
          <div className="flex h-full w-386 flex-col gap-16">
            <div className="flex flex-row items-center justify-center gap-16">
              <RoleButton icon={<AdminIcon />} role="Administrator" />
              <RoleButton icon={<WorkerIcon />} role="Worker" />
            </div>
            <SignUpForm
              icon={
                <WorkerIcon className="ml-12 mr-12 mt-15 fill-current text-gray-500" />
              }
              formName="Full Name"
            />
            <SignUpForm
              icon={
                <EmailIcon className="ml-12 mr-12 mt-15 fill-current text-gray-500" />
              }
              formName="Email address"
            />
            <SignUpForm
              icon={<LockIcon className="ml-12 mr-12 mt-15" />}
              formName="Password"
            />
            <SignUpForm
              icon={<LockIcon className="ml-12 mr-12 mt-15" />}
              formName="Confirm Password"
            />
            <SignUpForm
              icon={
                <PhoneIcon className="ml-12 mr-12 mt-15 fill-current text-gray-500" />
              }
              formName="Phone Number (Optional)"
            />

            <div className="flex h-24 w-full flex-row items-center justify-start">
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

            <Button className="flex h-46 flex-col items-center justify-center rounded-4 bg-black text-white">
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

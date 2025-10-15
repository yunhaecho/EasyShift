'use client';

import AdminIcon from '@/assets/icons/admin.svg';
import WorkerIcon from '@/assets/icons/worker.svg';
import RoleButton from './component/RoleButton';
import { Button, Checkbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/16/solid';
import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import PhoneNumberField from './component/PhoneNumberField';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

function SignUpPage() {
  const [enabled, setEnabled] = useState(false);
  const [role, setRole] = useState('ADMIN');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const router = useRouter();
  const { update, data } = useSession();

  const roles = [
    {
      id: 1,
      icon: <AdminIcon />,
      label: 'Administrator',
      value: 'ADMIN',
    },
    {
      id: 2,
      icon: <WorkerIcon />,
      label: 'Worker',
      value: 'WORKER',
    },
  ];

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);

    // 전화번호 형식 검증
    const phoneRegex = /^010-\d{3,4}-\d{4}$/;
    if (!phoneRegex.test(value)) {
      setPhoneNumberError('Not a valid phone number. (e.g. 010-1234-5678)');
    } else {
      setPhoneNumberError('');
    }
  };

  const isValidForm = useMemo(() => {
    const phoneRegex = /^010-\d{3,4}-\d{4}$/;
    return phoneRegex.test(phoneNumber) && enabled && role !== null;
  }, [phoneNumber, enabled, role]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!role) return;
    await update({ role });
    if (data) {
      data.needSignUp = false;
    }

    router.replace('/landing');
  };

  useEffect(() => {
    toast.success(`Welcome! Please Choose Your Position.`);
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        {/* Create your account 파트*/}
        <div className="mb-8 text-3xl font-extrabold">Create your account</div>
        <div className="body-14-500 mb-32 flex flex-row">
          <span className="text-gray-700">Or&ensp;</span>
          <a className="cursor-pointer text-gray-900 hover:underline">
            sign in to your existing account
          </a>
        </div>

        {/* 회원가입 정보 기입란 */}
        <div className="mb-26 flex w-full flex-col items-center justify-center bg-white p-32 shadow-md">
          <div className="mb-16 flex w-full flex-row items-center justify-center gap-16">
            {roles.map(roleInfo => (
              <RoleButton
                key={roleInfo.id}
                icon={roleInfo.icon}
                label={roleInfo.label}
                value={roleInfo.value}
                role={role}
                setRole={setRole}
              />
            ))}
          </div>
          <form>
            <PhoneNumberField
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              pattern="^\d{10,11}$"
              error={phoneNumberError}
            />
          </form>

          {/* 약관동의 파트 */}
          <div className="mb-26 flex h-24 w-full flex-row items-center justify-start">
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
            className={`body-14-500 flex h-46 w-full flex-col items-center justify-center rounded-4 ${
              isValidForm
                ? 'bg-black text-white'
                : 'cursor-not-allowed bg-gray-400 text-white'
            }`}
            disabled={!isValidForm}
            onClick={e => handleSubmit(e)}
          >
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;

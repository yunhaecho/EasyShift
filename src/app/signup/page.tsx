'use client';

import AdminIcon from '@/assets/icons/admin.svg';
import WorkerIcon from '@/assets/icons/worker.svg';
import RoleButton from './component/RoleButton';
import { Button, Checkbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/16/solid';
import React, { ChangeEvent, useMemo, useState } from 'react';
import NameField from './component/NameField';
import PhoneNumberField from './component/PhoneNumberField';
import useSignupMutation from '@/api/endpoints/user/useSignupMutation';

function SignUpPage() {
  const [enabled, setEnabled] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'ADMIN' | 'USER'>('ADMIN');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const { mutate: signUp } = useSignupMutation({
    name,
    phoneNumber,
    role: selectedRole,
  });

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
      value: 'USER',
    },
  ];

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };

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
    return (
      name.length > 0 &&
      phoneRegex.test(phoneNumber) &&
      enabled &&
      selectedRole !== null
    );
  }, [name, phoneNumber, enabled, selectedRole]);

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
            {roles.map(role => (
              <RoleButton
                key={role.id}
                icon={role.icon}
                label={role.label}
                value={role.value}
                selectedRole={selectedRole}
                setSelectedRole={setSelectedRole}
              />
            ))}
          </div>
          <form>
            <NameField name={name} onChange={handleNameChange} />
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
            onClick={() => {
              if (isValidForm) {
                signUp();
              }
            }}
          >
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;

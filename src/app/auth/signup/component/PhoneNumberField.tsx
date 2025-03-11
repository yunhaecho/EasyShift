import React, { ChangeEvent } from 'react';
import PhoneIcon from '@/assets/icons/phone.svg';

const PhoneNumberField = ({
  value,
  onChange,
  pattern,
  error,
}: {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  pattern?: string;
  error?: string;
}) => {
  return (
    <div className="mb-24">
      <div className="body-14-500 mb-4 text-gray-800">Phone Number</div>
      <div className="flex h-50 w-full flex-row border border-gray-400">
        <PhoneIcon className="ml-12 mr-12 mt-15 fill-current text-gray-500" />
        <input
          className="h-full w-342 border-collapse text-gray-800 outline-none"
          type="tel"
          autoComplete="off"
          value={value}
          onChange={onChange}
          pattern={pattern}
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default PhoneNumberField;

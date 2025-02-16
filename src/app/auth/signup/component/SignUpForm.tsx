import React, { ReactNode } from 'react';

interface SignUpFormProps {
  icon: ReactNode;
  formName: string;
}

export default function SignUpForm({ icon, formName }: SignUpFormProps) {
  return (
    <div className="">
      <div className="body-14-500 mb-4 text-gray-800">{formName}</div>
      <div className="flex h-50 w-full flex-row border border-gray-400">
        {icon}
        <input
          className="h-hull w-342 border-collapse text-sm font-medium text-gray-800 outline-none"
          type="text"
        />
      </div>
    </div>
  );
}

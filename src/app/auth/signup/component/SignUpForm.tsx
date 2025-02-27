import React, { ReactNode } from 'react';

interface SignUpFormProps {
  icon: ReactNode;
  formName: string;
  type: string;
}

export default function SignUpForm({ icon, formName, type }: SignUpFormProps) {
  return (
    <div className="mb-16">
      <div className="body-14-500 mb-4 text-gray-800">{formName}</div>
      <div className="flex h-50 w-full flex-row border border-gray-400">
        {icon}
        <input
          className="h-full w-342 border-collapse text-gray-800 outline-none"
          type={type}
        />
      </div>
    </div>
  );
}

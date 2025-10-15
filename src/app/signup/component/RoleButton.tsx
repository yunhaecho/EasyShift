import { Button } from '@headlessui/react';
import { ReactNode } from 'react';

const RoleButton = ({
  icon,
  label,
  value,
  role,
  setRole,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  role: string;
  setRole: (role: 'ADMIN' | 'WORKER') => void;
}) => {
  return (
    <Button
      className={`body-16-400 flex w-full flex-col items-center justify-center rounded-8 px-30 py-17 hover:bg-[rgba(0,0,0,0.05)] ${
        role === value
          ? 'border border-gray-900 bg-[rgba(0,0,0,0.05)]'
          : 'border border-gray-300'
      }`}
      onClick={() => setRole(value as 'ADMIN' | 'WORKER')}
    >
      <div className="flex flex-row items-center gap-8">
        <div>{icon}</div>
        <div className="body-16-400 text-gray-900">{label}</div>
      </div>
    </Button>
  );
};

export default RoleButton;

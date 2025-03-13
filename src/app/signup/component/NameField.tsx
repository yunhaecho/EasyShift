import React, { ChangeEvent } from 'react';

import WorkerIcon from '@/assets/icons/worker.svg';

const NameField = ({
  name,
  onChange,
}: {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="mb-16">
      <div className="body-14-500 mb-4 text-gray-800">Name</div>
      <div className="flex h-50 w-full flex-row border border-gray-400">
        <WorkerIcon className="ml-12 mr-12 mt-15 fill-current text-gray-500" />
        <input
          className="h-full w-342 border-collapse text-gray-800 outline-none"
          type="text"
          autoComplete="off"
          value={name}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default NameField;

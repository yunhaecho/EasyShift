import React from 'react';
import EditBlackIcon from '@/assets/icons/edit-black.svg';
import DeleteRedIcon from '@/assets/icons/delete-red.svg';
import { Button } from '@headlessui/react';

function Actions() {
  return (
    <div className="flex h-28 w-full flex-row items-center justify-center gap-12">
      <Button className="body-14-500 h-full w-auto rounded-4 bg-gray-900 px-11 text-white">
        Generate
      </Button>
      <EditBlackIcon />
      <DeleteRedIcon />
    </div>
  );
}

export default Actions;

import React from 'react'
import Editicon from '@/assets/icons/edit.svg';
import DeleteIcon from '@/assets/icons/delete-red.svg';
import { Button } from '@headlessui/react';

function Actions() {
  return (
    <div className='flex flex-row gap-12 w-full h-28 items-center'>
        <Button className='bg-gray-900 rounded-4 w-auto h-full text-white body-14-500 px-11'>
            Generate
        </Button>
        <Editicon />
        <DeleteIcon />
    </div>
  )
}

export default Actions
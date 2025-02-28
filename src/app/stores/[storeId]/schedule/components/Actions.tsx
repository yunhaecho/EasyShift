import React from 'react';
import { Button } from '@headlessui/react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

import EditBlackIcon from '@/assets/icons/edit-black.svg';
import DeleteRedIcon from '@/assets/icons/delete-red.svg';

function Actions({ scheduleId }: { scheduleId: number }) {
  const params = useParams();
  const storeId = params.storeId;

  return (
    <div className="flex h-28 w-full flex-row items-center justify-center gap-12">
      <Button className="body-14-500 h-full w-auto rounded-4 bg-gray-900 px-11 text-white">
        Generate
      </Button>
      <Link href={`/stores/${storeId}/schedule/${scheduleId}`}>
        <EditBlackIcon />
      </Link>
      <DeleteRedIcon />
    </div>
  );
}

export default Actions;

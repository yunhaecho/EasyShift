import React from 'react';
import { Button } from '@headlessui/react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

import EditBlackIcon from '@/assets/icons/edit-black.svg';
import DeleteRedIcon from '@/assets/icons/delete-red.svg';
import { useDeleteScheduleMutation } from '@/api/endpoints/schedule/useDeleteSchedule';

function AdminActions({
  schedule,
  onDeleteSuccess,
}: {
  schedule: {
    id: string;
    shiftDate: string;
  };
  onDeleteSuccess: (deletedScheduleId: string) => void;
}) {
  const params = useParams();
  const storeId = params.storeId;
  const { mutate } = useDeleteScheduleMutation();

  const handleClickDeleteScheduleButton = () => {
    mutate(schedule.id, {
      onSuccess: () => {
        onDeleteSuccess(schedule.id);
      },
    });
  };

  return (
    <div className="flex h-28 w-full flex-row items-center justify-center gap-12">
      <Button className="body-14-500 h-full w-auto rounded-4 bg-gray-900 px-11 py-4 text-white">
        Generate
      </Button>

      <Link
        href={`/stores/${storeId}/schedule/${schedule.id}?date=${schedule.shiftDate}`}
      >
        <EditBlackIcon />
      </Link>

      <Button>
        <DeleteRedIcon onClick={handleClickDeleteScheduleButton} />
      </Button>
    </div>
  );
}

export default AdminActions;

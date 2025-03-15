import React from 'react';
import { Button } from '@headlessui/react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

import EditBlackIcon from '@/assets/icons/edit-black.svg';
import DeleteRedIcon from '@/assets/icons/delete-red.svg';
import { useDeleteScheduleMutation } from '@/api/endpoints/schedule/useDeleteSchedule';
import toast from 'react-hot-toast';
import { useFetchGeneratedScheduleMutation } from '@/api/endpoints/schedule/useGeneratedScheduleMutatation';

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
  const { mutate : deleteSchedule } = useDeleteScheduleMutation();

  const handleClickDeleteScheduleButton = () => {
    deleteSchedule(schedule.id, {
      onSuccess: () => {
        onDeleteSuccess(schedule.id);
      },
    });
  };
  const { mutate : fetchGeneratedSchedule } = useFetchGeneratedScheduleMutation(schedule.id);

  const handleGenerateSchedule = () => {
    fetchGeneratedSchedule();
    toast.loading('스케줄 생성 중입니다. 잠시만 기다려 주세요.', { id: 'generate-schedule-toast' });
  }

  return (
    <div className="flex h-28 w-full flex-row items-center justify-center gap-12">
      <Button 
        onClick={handleGenerateSchedule}
        className="body-14-500 h-full w-auto rounded-4 bg-gray-900 px-11 py-4 text-white">
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

'use client';

import { Dialog, DialogTitle } from '@headlessui/react';
import CloseIcon from '@/assets/icons/close.svg';
import { useParams } from 'next/navigation';
import UserInfoContent from '@/app/users/[userId]/components/UserInfoContent';

const UserInfoModal = ({
  isOpen,
  onClose,
  userId,
}: {
  isOpen: boolean;
  onClose: () => void;
  userId: number | null;
}) => {
  const { storeId } = useParams();

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="flex h-[70%] w-[70%] flex-col rounded-8 bg-white p-24">
          <DialogTitle className="head-20-600 flex items-center justify-end text-gray-900">
            <button>
              <CloseIcon onClick={onClose} />
            </button>
          </DialogTitle>
          <UserInfoContent
            storeId={Number(storeId)}
            userId={userId}
            mode="modal"
          />
        </div>
      </div>
    </Dialog>
  );
};

export default UserInfoModal;

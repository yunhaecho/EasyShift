'use client';

import AddStoreModal from '@/app/stores/components/AddStoreModal';
import JoinStoreModal from '@/app/stores/components/JoinStoreModal';
import useToggle from '@/app/hooks/useToggle';
import PlusWhiteIcon from '@/assets/icons/plus-white.svg';
import { USER_ROLE } from '@/constants/userRole';
import { useContext } from 'react';
import { AuthContext } from '@/app/context/AuthContext';

const ManageStoreButton = () => {
  const [isAddStoreModalOpen, toggleAddStoreModal] = useToggle(false);
  const [isJoinStoreModalOpen, toggleJoinStoreModal] = useToggle(false);
  const { user } = useContext(AuthContext);

  return (
    <>
      <button
        className="flex items-center gap-12 rounded-4 bg-gray-900 px-16 py-8"
        onClick={
          USER_ROLE.ADMIN === user?.role
            ? toggleAddStoreModal
            : toggleJoinStoreModal
        }
        aria-label="Add new store"
      >
        <PlusWhiteIcon />
        <p className="body-16-400 text-white">
          {USER_ROLE.ADMIN === user?.role ? 'Add Store' : 'Join Store'}
        </p>
      </button>

      {USER_ROLE.ADMIN === user?.role ? (
        <AddStoreModal
          isOpen={isAddStoreModalOpen}
          onClose={toggleAddStoreModal}
        />
      ) : (
        <JoinStoreModal
          isOpen={isJoinStoreModalOpen}
          onClose={toggleJoinStoreModal}
        />
      )}
    </>
  );
};

export default ManageStoreButton;

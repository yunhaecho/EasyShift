'use client';

import AddStoreModal from '@/app/stores/components/AddStoreModal';
import JoinStoreModal from '@/app/stores/components/JoinStoreModal';
import useToggle from '@/app/hooks/useToggle';
import { AuthContext } from '@/app/context/AuthContext';
import { useContext } from 'react';
import PlusWhiteIcon from '@/assets/icons/plus-white.svg';
import { USER_ROLE } from '@/constants/userRole';

const ManageStoreButton = () => {
  const [isAddStoreModalOpen, toggleAddStoreModal] = useToggle(false);
  const [isJoinStoreModalOpen, toggleJoinStoreModal] = useToggle(false);
  const { userRole } = useContext(AuthContext);

  return (
    <>
      <button
        className="flex items-center gap-12 rounded-4 bg-gray-900 px-16 py-8"
        onClick={
          userRole === USER_ROLE.ADMIN
            ? toggleAddStoreModal
            : toggleJoinStoreModal
        }
        aria-label="Add new store"
      >
        <PlusWhiteIcon />
        <p className="body-16-400 text-white">
          {userRole === USER_ROLE.ADMIN ? 'Add Store' : 'Join Store'}
        </p>
      </button>

      {userRole === USER_ROLE.ADMIN ? (
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

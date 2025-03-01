'use client';

import { usePostStore } from '@/api/endpoints/stores/usePostStore';
import ManageStoreModal from '@/app/components/modals/ManageStoreModal';
import useToggle from '@/app/hooks/useToggle';

import PlusWhiteIcon from '@/assets/icons/plus-white.svg';

const AddStoreButton = () => {
  const [isModalOpen, toggleModal] = useToggle(false);
  const { mutate: postStore } = usePostStore();

  return (
    <>
      <button
        className="flex items-center gap-12 rounded-4 bg-gray-900 px-16 py-8"
        onClick={toggleModal}
        aria-label="Add new store"
      >
        <PlusWhiteIcon />
        <p className="body-16-400 text-white">Add Store</p>
      </button>

      <ManageStoreModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        mode="add"
        mutate={postStore}
      />
    </>
  );
};

export default AddStoreButton;

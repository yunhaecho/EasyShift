'use client';

import AddStoreModal from '@/app/components/modals/AddStoreModal';
import useToggle from '@/app/hooks/useToggle';

import PlusWhiteIcon from '@/assets/icons/plus-white.svg';

const AddStoreButton = () => {
  const [isModalOpen, toggleModal] = useToggle(false);

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

      <AddStoreModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default AddStoreButton;

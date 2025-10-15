'use client';

import { DialogTitle } from '@headlessui/react';
import { Dialog } from '@headlessui/react';
import ModalActions from '../../components/modals/ModalActions';
import { useState } from 'react';
import useToggle from '@/app/hooks/useToggle';
import JoinStoreConfirmationModal from './JoinStoreConfirmationModal';
import useJoinStoreMutation from '@/api/endpoints/stores/useJoinStoreMutation';

const JoinStoreModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [storeCode, setStoreCode] = useState('');
  const [isJoinStoreConfirmationModalOpen, toggleJoinStoreConfirmationModal] =
    useToggle(false);
  const { mutate: joinStore } = useJoinStoreMutation();

  const handleJoinStore = () => {
    joinStore(storeCode);
    setStoreCode('');
    toggleJoinStoreConfirmationModal();
    onClose();
  };

  return (
    <>
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Modal */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="max-h-[80%] w-full max-w-[30%] overflow-y-auto rounded-8 bg-white">
            <DialogTitle className="head-20-600 border-b border-gray-300 px-24 py-16 text-gray-900">
              Add Store
            </DialogTitle>

            {/* ModalContent */}
            <form className="flex flex-col gap-24 px-24 py-16">
              <fieldset className="flex flex-col gap-16">
                <legend className="sr-only">Store Code</legend>
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="store-code"
                    className="body-16-500 text-gray-900"
                  >
                    Store Code
                  </label>
                  <input
                    id="store-code"
                    type="text"
                    placeholder="Enter store code"
                    value={storeCode}
                    onChange={e => setStoreCode(e.target.value)}
                    className="body-16-400 border border-gray-400 px-12 py-9 text-gray-900 focus:outline-none"
                    aria-labelledby="store-code"
                  />
                </div>
              </fieldset>
            </form>
            <footer>
              <ModalActions
                mode="submit"
                onClose={onClose}
                onSubmit={toggleJoinStoreConfirmationModal}
              />
            </footer>
          </div>
        </div>
      </Dialog>
      <JoinStoreConfirmationModal
        isOpen={isJoinStoreConfirmationModalOpen}
        onClose={toggleJoinStoreConfirmationModal}
        onConfirm={handleJoinStore}
        storeCode={storeCode}
      />
    </>
  );
};

export default JoinStoreModal;

'use client';

import { DialogTitle } from '@headlessui/react';
import { Dialog } from '@headlessui/react';
import ModalActions from '../../components/modals/ModalActions';
import { useEffect, useState } from 'react';
import { useCreateStoreMutation } from '@/api/endpoints/stores/useCreateStoreMutation';

const AddStoreModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [storeName, setStoreName] = useState('');
  const [storeDescription, setStoreDescription] = useState('');
  const { mutate: createStore } = useCreateStoreMutation();

  useEffect(() => {
    if (!isOpen) {
      setStoreName('');
      setStoreDescription('');
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createStore({
      storeName,
      description: storeDescription,
    });
    onClose();
  };

  return (
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
              <legend className="sr-only">Store Information</legend>
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="store-name"
                  className="body-16-500 text-gray-900"
                >
                  Store Name
                </label>
                <input
                  id="store-name"
                  type="text"
                  placeholder="Enter store name"
                  value={storeName}
                  onChange={e => setStoreName(e.target.value)}
                  className="body-16-400 border border-gray-400 px-12 py-9 text-gray-900 focus:outline-none"
                  aria-labelledby="store-name"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="store-description"
                  className="body-16-500 text-gray-900"
                >
                  Description
                </label>
                <input
                  id="store-description"
                  type="text"
                  placeholder="Enter store description"
                  value={storeDescription}
                  onChange={e => setStoreDescription(e.target.value)}
                  className="body-16-400 border border-gray-400 px-12 py-9 text-gray-900 focus:outline-none"
                  aria-labelledby="store-description"
                />
              </div>
            </fieldset>
          </form>
          <footer>
            <ModalActions
              mode="add"
              onClose={onClose}
              onSubmit={handleSubmit}
            />
          </footer>
        </div>
      </div>
    </Dialog>
  );
};

export default AddStoreModal;

'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ManageStoreModal from '../components/modals/ManageStoreModal';

import StoreBlackIcon from '@/assets/icons/store-black.svg';
import StoreGrayIcon from '@/assets/icons/store-gray.svg';
import PlusWhiteIcon from '@/assets/icons/plus-white.svg';

const mockStores = [
  {
    id: 1,
    name: 'Starbucks Reserve',
  },
  {
    id: 2,
    name: 'Standard Bread',
  },
];

const AddStoreButton = ({
  setIsModalOpen,
}: {
  setIsModalOpen: (isOpen: boolean) => void;
}) => {
  return (
    <button
      className="flex items-center gap-12 rounded-4 bg-gray-900 px-16 py-8"
      onClick={() => setIsModalOpen(true)}
      aria-label="Add new store"
    >
      <PlusWhiteIcon />
      <p className="body-16-400 text-white">Add Store</p>
    </button>
  );
};

const StoresPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {mockStores.length === 0 ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-22">
          <StoreGrayIcon />
          <div className="flex flex-col items-center gap-4">
            <p className="body-18-500 text-gray-900">Please create a store</p>
            <p className="body-14-400 text-gray-600">
              Get started by creating your first store
            </p>
          </div>
          <AddStoreButton setIsModalOpen={setIsModalOpen} />
        </div>
      ) : (
        <div className="flex w-full flex-col gap-32 p-32">
          {/* Header */}
          <header className="flex items-end justify-between">
            <div className="flex flex-col gap-8">
              <p className="head-40-700 text-gray-900">Hello, User!</p>
              <p className="body-18-400 text-gray-700">
                Welcome back to your store management dashboard.
              </p>
            </div>
            <div className="h-fit">
              <AddStoreButton setIsModalOpen={setIsModalOpen} />
            </div>
          </header>

          {/* Stores List */}
          <div className="grid grid-cols-3 gap-16">
            {mockStores.map(store => (
              <button
                key={store.id}
                className="flex w-full items-center gap-16 rounded-8 border border-gray-200 bg-white p-24 shadow-sm"
                onClick={() => router.push(`/stores/${store.id}/home`)}
              >
                <StoreBlackIcon />
                <div className="flex flex-col">
                  <p className="body-18-500 text-gray-900">{store.name}</p>
                  <p className="body-14-400 text-gray-600">
                    Active since Jan 2024
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <ManageStoreModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="add"
      />
    </>
  );
};

export default StoresPage;

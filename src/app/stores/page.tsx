'use client';

import useToggle from '../hooks/useToggle';
import Link from 'next/link';
import ManageStoreModal from '../components/modals/ManageStoreModal';
import { mockStores } from './[storeId]/mocks';

import StoreBlackIcon from '@/assets/icons/store-black.svg';
import StoreGrayIcon from '@/assets/icons/store-gray.svg';
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

      <ManageStoreModal isOpen={isModalOpen} onClose={toggleModal} mode="add" />
    </>
  );
};

const StoresPage = () => {
  return (
    <main className="flex w-full flex-col gap-32 p-32">
      {/* Empty State */}
      {mockStores.length === 0 ? (
        <section
          className="flex h-full w-full flex-col items-center justify-center gap-22"
          aria-labelledby="empty-state-title"
        >
          <StoreGrayIcon />
          <div className="flex flex-col items-center gap-4">
            <h2 id="empty-state-title" className="body-18-500 text-gray-900">
              Please create a store
            </h2>
            <p className="body-14-400 text-gray-600">
              Get started by creating your first store
            </p>
          </div>
          <AddStoreButton />
        </section>
      ) : (
        <>
          {/* Header */}
          <header className="flex items-end justify-between">
            <div className="flex flex-col gap-8">
              <h1 className="head-40-700 text-gray-900">Hello, User!</h1>
              <p className="body-18-400 text-gray-700">
                Welcome back to your store management dashboard.
              </p>
            </div>
            <div className="h-fit">
              <AddStoreButton />
            </div>
          </header>

          {/* Store List */}
          <section
            className="grid grid-cols-3 gap-16"
            aria-labelledby="store-list-title"
          >
            <h2 id="store-list-title" className="sr-only">
              Store List
            </h2>
            {mockStores.map(store => (
              <Link
                key={store.id}
                href={`/stores/${store.id}/home`}
                className="flex w-full items-center gap-16 rounded-8 border border-gray-200 bg-white p-24 shadow-sm"
              >
                <StoreBlackIcon />
                <div className="flex flex-col">
                  <p>{store.name}</p>
                  <p className="body-14-400 text-gray-600">
                    Active since Jan 2024
                  </p>
                </div>
              </Link>
            ))}
          </section>
        </>
      )}
    </main>
  );
};

export default StoresPage;

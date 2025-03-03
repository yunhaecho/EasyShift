'use client';

import { useContext, useState } from 'react';
import Link from 'next/link';
import { useDeleteStoreMutation } from '@/api/endpoints/stores/useDeleteStoreMutation';

import AddStoreButton from './AddStoreButton';
import EmptyStoreState from './EmptyStoreState';
import ConfirmationModal from '@/app/components/modals/ConfirmationModal';
import { Store } from '@/api/endpoints/stores/types';

import DeleteRedIcon from '@/assets/icons/delete-red.svg';
import StoreBlackIcon from '@/assets/icons/store-black.svg';
import { GlobalNavBarContext } from '@/app/context/GlobalNavBarContext';

const StoreList = () => {
  const [storeToDelete, setStoreToDelete] = useState<Store | null>(null);

  const { data } = useContext(GlobalNavBarContext);
  const deleteStoreMutation = useDeleteStoreMutation();

  const handleDeleteStoreClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    store: Store,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setStoreToDelete(store);
  };

  const handleDeleteStore = () => {
    if (storeToDelete) {
      deleteStoreMutation.mutate({ storeId: storeToDelete.storeId });
      setStoreToDelete(null);
    }
  };

  return (
    <>
      {data?.stores?.length === 0 ? (
        <EmptyStoreState />
      ) : (
        <>
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

          <section
            className="grid grid-cols-3 gap-16"
            aria-labelledby="store-list-title"
          >
            <h2 id="store-list-title" className="sr-only">
              Store List
            </h2>
            {data?.stores?.map((store: Store) => (
              <div key={store.storeId} className="relative">
                <Link
                  href={`/stores/${store.storeId}/home`}
                  className="group flex w-full items-center gap-16 rounded-8 border border-gray-200 bg-white p-24 shadow-sm"
                >
                  <StoreBlackIcon className="flex-shrink-0" />
                  <div className="flex w-full flex-col">
                    <div className="flex justify-between">
                      <p className="body-18-500 text-gray-900">
                        {store.storeName}
                      </p>
                      <button
                        type="button"
                        className="body-16-500 invisible text-gray-700 group-hover:visible"
                        onClick={e => handleDeleteStoreClick(e, store)}
                        aria-label={`Delete ${store.storeName}`}
                      >
                        <DeleteRedIcon />
                      </button>
                    </div>
                    <p className="body-14-400 text-gray-600">
                      {store.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </section>
          <ConfirmationModal
            isOpen={storeToDelete !== null}
            onClose={() => setStoreToDelete(null)}
            onConfirm={handleDeleteStore}
            title={`Are you sure you want to delete '${storeToDelete?.storeName}' store?`}
            description={`This action cannot be undone. All data associated with this store will be permanently deleted.`}
          />
        </>
      )}
    </>
  );
};

export default StoreList;

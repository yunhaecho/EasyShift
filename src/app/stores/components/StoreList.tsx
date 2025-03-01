'use client';

import { useContext } from 'react';
import Link from 'next/link';

import { StoresPageContext } from '@/app/context/StoresPageContext';
import AddStoreButton from './AddStoreButton';

import StoreBlackIcon from '@/assets/icons/store-black.svg';
import { Store } from '@/api/endpoints/stores/types';

const StoreList = () => {
  const data = useContext(StoresPageContext);

  return (
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
          <Link
            key={store.storeId}
            href={`/stores/${store.storeId}/home`}
            className="flex w-full items-center gap-16 rounded-8 border border-gray-200 bg-white p-24 shadow-sm"
          >
            <StoreBlackIcon />
            <div className="flex flex-col">
              <p className="body-18-500 text-gray-900">{store.storeName}</p>
              <p className="body-14-400 text-gray-600">{store.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default StoreList;

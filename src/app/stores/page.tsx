'use client';

import StoreBlackIcon from '@/assets/icons/store-black.svg';
import { useRouter } from 'next/navigation';

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

const StoresPage = () => {
  const router = useRouter();

  return (
    <div className="flex w-full flex-col gap-32 p-32">
      <header className="flex flex-col gap-8">
        <p className="head-40-700 text-gray-900">Hello, User!</p>
        <p className="body-18-400 text-gray-700">
          Welcome back to your store management dashboard.
        </p>
      </header>

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
              <p className="body-14-400 text-gray-600">Active since Jan 2024</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StoresPage;

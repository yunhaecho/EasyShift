'use client';

import { useState } from 'react';
import { GlobalNavBarContext } from '../context/GlobalNavBarContext';
import { Store } from '@/api/endpoints/stores/types';
import toast from 'react-hot-toast';

export const initialData = {
  stores: [
    {
      storeId: 1,
      storeName: 'Starbucks Reserve',
      description:
        'Premium coffee experience with rare and unique coffee beans',
    },
    {
      storeId: 2,
      storeName: 'Standard Bread',
      description:
        'Artisanal bakery specializing in sourdough and classic pastries',
    },
    {
      storeId: 3,
      storeName: 'OffOff Coffee',
      description:
        'Cozy neighborhood cafe serving specialty coffee and light bites',
    },
  ],
};

const GlobalNavBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [storeMockData, setStoreMockData] = useState<Store[]>(
    initialData.stores,
  );

  const addStore = (store: Store) => {
    setStoreMockData(prev => [...prev, store]);
    toast.success('Store created successfully');
  };

  const deleteStore = (storeId: number) => {
    setStoreMockData(prev => prev.filter(store => store.storeId !== storeId));
    toast.success('Store deleted successfully');
  };

  return (
    <GlobalNavBarContext.Provider
      value={{ storeMockData, addStore, deleteStore }}
    >
      {children}
    </GlobalNavBarContext.Provider>
  );
};

export default GlobalNavBarProvider;

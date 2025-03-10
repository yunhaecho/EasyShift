'use client';

import UserPageContext from '@/app/context/UserPageContext';
import { storesQueryOptions } from '@/api/endpoints/stores/storesQueryOptions';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const UserPageProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: storesData } = useSuspenseQuery(storesQueryOptions.getStores());
  const [selectedStoreId, setSelectedStoreId] = useState<number | null>(null);

  useEffect(() => {
    if (storesData?.stores?.length > 0) {
      setSelectedStoreId(storesData.stores[0].storeId);
    }
  }, [storesData]);

  return (
    <UserPageContext.Provider
      value={{
        stores: storesData?.stores || [],
        selectedStoreId,
        setSelectedStoreId,
      }}
    >
      {children}
    </UserPageContext.Provider>
  );
};

export default UserPageProvider;

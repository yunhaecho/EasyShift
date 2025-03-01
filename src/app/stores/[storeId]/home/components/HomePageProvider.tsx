'use client';

import { storesQueryOptions } from '@/api/endpoints/stores/storesQueryOptions';
import { GetStoresStoreIdResponse } from '@/api/endpoints/stores/types';
import { HomePageContext } from '@/app/context/HomePageContext';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useState } from 'react';

const HomePageProvider = ({
  children,
  storeId,
}: {
  children: React.ReactNode;
  storeId: string;
}) => {
  const { data } = useSuspenseQuery<GetStoresStoreIdResponse>(
    storesQueryOptions.getStoresStoreId(storeId),
  );
  const [selectedScheduleTemplateId, setSelectedScheduleTemplateId] = useState<
    string | null
  >(null);

  return (
    <HomePageContext.Provider
      value={{
        data,
        selectedScheduleTemplateId,
        setSelectedScheduleTemplateId,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};

export default HomePageProvider;

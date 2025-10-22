'use client';

import { storesQueryOptions } from '@/api/endpoints/stores/storesQueryOptions';
import { GetStoresResponse } from '@/api/endpoints/stores/types';
import { StoresPageContext } from '@/app/context/StoresPageContext';
import { useSuspenseQuery } from '@tanstack/react-query';

const StoresPageProvider = ({ children }: { children: React.ReactNode }) => {
  const { data } = useSuspenseQuery<GetStoresResponse>(
    storesQueryOptions.getStores(),
  );

  return (
    <StoresPageContext.Provider value={data}>
      {children}
    </StoresPageContext.Provider>
  );
};

export default StoresPageProvider;

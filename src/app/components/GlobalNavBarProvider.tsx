'use client';

import { GetStoresResponse } from '@/api/endpoints/stores/types';
import { GlobalNavBarContext } from '../context/GlobalNavBarContext';
import { useSuspenseQuery } from '@tanstack/react-query';
import { storesQueryOptions } from '@/api/endpoints/stores/storesQueryOptions';

const GlobalNavBarProvider = ({ children }: { children: React.ReactNode }) => {
  const { data } = useSuspenseQuery<GetStoresResponse>(
    storesQueryOptions.getStores(),
  );

  /* 임시 */
  // const data = {
  //   stores: [
  //     {
  //       storeId: 1,
  //       storeName: 'Starbucks Reserve',
  //       description:
  //         'Premium coffee experience with rare and unique coffee beans',
  //     },
  //     {
  //       storeId: 2,
  //       storeName: 'Standard Bread',
  //       description:
  //         'Artisanal bakery specializing in sourdough and classic pastries',
  //     },
  //     {
  //       storeId: 3,
  //       storeName: 'OffOff Coffee',
  //       description:
  //         'Cozy neighborhood cafe serving specialty coffee and light bites',
  //     },
  //   ],
  // };

  return (
    <GlobalNavBarContext.Provider value={{ data }}>
      {children}
    </GlobalNavBarContext.Provider>
  );
};

export default GlobalNavBarProvider;

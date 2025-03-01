'use client';

import { Suspense } from 'react';
import StoreList from './components/StoreList';
import StoresPageProvider from './components/StoresPageProvider';

const StoresPage = () => {
  return (
    <main className="flex w-full flex-col gap-32 p-32">
      <Suspense fallback={<div>Loading...</div>}>
        <StoresPageProvider>
          <StoreList />
        </StoresPageProvider>
      </Suspense>
    </main>
  );
};

export default StoresPage;

import { Suspense } from 'react';
import { mockStores } from './[storeId]/mocks';
import EmptyStoreState from './components/EmptyStoreState';
import StoreList from './components/StoreList';
import StoresPageProvider from './components/StoresPageProvider';

const StoresPage = () => {
  return (
    <main className="flex w-full flex-col gap-32 p-32">
      <Suspense fallback={<div>Loading...</div>}>
        <StoresPageProvider>
          {mockStores.length === 0 ? <EmptyStoreState /> : <StoreList />}
        </StoresPageProvider>
      </Suspense>
    </main>
  );
};

export default StoresPage;

'use client';

import StoreList from './components/StoreList';

const StoresPage = () => {
  return (
    <main className="flex w-full flex-col gap-32 p-32">
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      {/* <StoresPageProvider> */}
      <StoreList />
      {/* </StoresPageProvider> */}
      {/* </Suspense> */}
    </main>
  );
};

export default StoresPage;

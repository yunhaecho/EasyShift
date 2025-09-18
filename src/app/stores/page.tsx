'use client';

// import { useSession } from 'next-auth/react';
import StoreList from './components/StoreList';

const StoresPage = () => {
  // const { data } = useSession();

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

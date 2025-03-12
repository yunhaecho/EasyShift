"use client"

import { useContext } from 'react';
import StoreList from './components/StoreList';
import { SignUpContext } from '../context/SignUpContext';

const StoresPage = () => {

  const userData = useContext(SignUpContext);
  console.log(userData);
  
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

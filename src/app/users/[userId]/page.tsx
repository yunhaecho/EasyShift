'use client';

import { useParams } from 'next/navigation';
import UserInfoContent from './components/UserInfoContent';
import UserPageProvider from './components/UserPageProvider';
import UserPageContext from '@/app/context/UserPageContext';
import { useContext } from 'react';

const UserPageContent = () => {
  const { userId } = useParams();
  const { selectedStoreId } = useContext(UserPageContext);

  return (
    <main className="flex w-full">
      <UserInfoContent
        storeId={selectedStoreId}
        userId={Number(userId)}
        mode="page"
      />
    </main>
  );
};

const UserPage = () => {
  return (
    <UserPageProvider>
      <UserPageContent />
    </UserPageProvider>
  );
};

export default UserPage;

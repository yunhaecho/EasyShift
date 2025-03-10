import { Suspense } from 'react';

const UserInfoModalProvider = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<div>Modal Loading...</div>}>{children}</Suspense>;
};
export default UserInfoModalProvider;

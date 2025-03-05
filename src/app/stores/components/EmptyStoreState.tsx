import ManageStoreButton from './ManageStoreButton';

import StoreGrayIcon from '@/assets/icons/store-gray.svg';

const EmptyStoreState = () => {
  return (
    <section
      className="flex h-full w-full flex-col items-center justify-center gap-22"
      aria-labelledby="empty-state-title"
    >
      <StoreGrayIcon />
      <div className="flex flex-col items-center gap-4">
        <h2 id="empty-state-title" className="body-18-500 text-gray-900">
          Please create a store
        </h2>
        <p className="body-14-400 text-gray-600">
          Get started by creating your first store
        </p>
      </div>
      <ManageStoreButton />
    </section>
  );
};

export default EmptyStoreState;

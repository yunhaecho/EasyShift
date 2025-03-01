import useToggle from '@/app/hooks/useToggle';

import EditWhiteIcon from '@/assets/icons/edit-white.svg';
import EditStoreModal from '@/app/components/modals/EditStoreModal';

const StoreInformation = () => {
  const [isCreateStoreModalOpen, toggleCreateStoreModal] = useToggle(false);

  return (
    <section className="flex flex-col gap-29 rounded-8 border border-gray-300 bg-white p-24 shadow-sm">
      <header className="flex items-center justify-between">
        <h2 id="store-info-title" className="head-20-600 text-gray-900">
          Store Information
        </h2>
        <button
          className="flex items-center gap-12 rounded-4 bg-gray-900 px-16 py-8"
          onClick={toggleCreateStoreModal}
          aria-label="Edit store information"
        >
          <EditWhiteIcon />
          <span className="body-16-400 text-white">Edit</span>
        </button>
      </header>
      <dl className="flex justify-between">
        <div className="flex flex-1 flex-col gap-4">
          <dt className="body-14-500 text-gray-700">Store Name</dt>
          <dd className="body-16-500 text-gray-900">Starbucks Reserve</dd>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <dt className="body-14-500 text-gray-700">Description</dt>
          <dd className="body-16-500 text-gray-900">
            Premium coffee experience with rare and unique coffee beans
          </dd>
        </div>
      </dl>

      <EditStoreModal
        isOpen={isCreateStoreModalOpen}
        onClose={toggleCreateStoreModal}
        storeData={{
          storeId: 1,
          storeName: 'Starbucks Reserve',
          description:
            'Premium coffee experience with rare and unique coffee beans',
        }}
      />
    </section>
  );
};

export default StoreInformation;

import useToggle from '@/app/hooks/useToggle';
import ManageStoreModal from '@/app/components/modals/ManageStoreModal';

import EditWhiteIcon from '@/assets/icons/edit-white.svg';

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
      <dl className="flex flex-col gap-4">
        <dt className="body-14-500 text-gray-700">Store Name</dt>
        <dd className="body-16-500 text-gray-900">Starbucks Reserve</dd>
      </dl>

      <ManageStoreModal
        isOpen={isCreateStoreModalOpen}
        onClose={toggleCreateStoreModal}
        mode="edit"
      />
    </section>
  );
};

export default StoreInformation;

import { Description, DialogTitle } from '@headlessui/react';
import { Dialog } from '@headlessui/react';
import StoreCircleIcon from '@/assets/icons/store-circle.svg';
import { useQuery } from '@tanstack/react-query';
import { storesQueryOptions } from '@/api/endpoints/stores/storesQueryOptions';

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  storeCode,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  storeCode: string;
}) => {
  const { data: storeData, isLoading } = useQuery({
    ...storesQueryOptions.getStoresInfoStoreCode(storeCode),
    enabled: isOpen,
  });

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="flex w-[30%] flex-col items-center rounded-8 bg-white p-32">
          <DialogTitle className="flex flex-col items-center gap-24">
            <StoreCircleIcon className="flex-shrink-0" />
            <p className="head-24-600 text-center text-gray-900">
              Would you like to join this store?
            </p>
          </DialogTitle>

          <Description className="body-16-400 mt-16 text-center text-gray-700">
            {isLoading
              ? 'Loading...'
              : `'${storeData?.storeName}', ${storeData?.description}`}
          </Description>

          <footer className="mt-32 flex w-full gap-16">
            <button
              type="button"
              className="body-16-500 flex-1 rounded-4 bg-gray-200 py-12 text-gray-800"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="body-16-500 flex-1 rounded-4 bg-gray-900 py-12 text-white"
              onClick={onConfirm}
            >
              Join
            </button>
          </footer>
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmationModal;

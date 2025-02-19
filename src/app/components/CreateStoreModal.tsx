import { DialogTitle } from '@headlessui/react';
import { Dialog } from '@headlessui/react';

export const inputStyle =
  'body-16-400 border border-gray-400 px-12 py-9 text-gray-900 focus:outline-none';

// ModalActions
const ModalActions = ({ onClose }: { onClose: () => void }) => (
  <div className="flex justify-end gap-12 border-t border-gray-300 p-16">
    <button
      onClick={onClose}
      className="body-14-500 rounded-4 border border-gray-400 bg-white px-16 py-8 text-gray-900"
    >
      Cancel
    </button>
    <button
      onClick={onClose}
      className="body-14-500 rounded-4 bg-gray-900 px-16 py-8 text-white"
    >
      Create
    </button>
  </div>
);

const CreateStoreModal = ({
  isOpen,
  onClose,
  dialogTitle,
}: {
  isOpen: boolean;
  onClose: () => void;
  dialogTitle: string;
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="max-h-[80%] w-full max-w-[30%] overflow-y-auto rounded-8 bg-white">
          <DialogTitle className="head-20-600 border-b border-gray-300 px-24 py-16 text-gray-900">
            {dialogTitle}
          </DialogTitle>

          {/* ModalContent */}
          <div className="flex flex-col gap-24 px-24 py-16">
            <div className="flex flex-col gap-4">
              <p className="body-16-500 text-gray-900">Store Name</p>
              <input
                type="text"
                placeholder="Enter store name"
                className={inputStyle}
              />
            </div>
          </div>

          <ModalActions onClose={onClose} />
        </div>
      </div>
    </Dialog>
  );
};

export default CreateStoreModal;

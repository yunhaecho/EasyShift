import { Description, DialogTitle } from '@headlessui/react';

import { Dialog } from '@headlessui/react';
import AlertCircleIcon from '@/assets/icons/alert.svg';

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="flex w-[30%] flex-col items-center rounded-8 bg-white p-32">
          <DialogTitle className="flex flex-col items-center gap-24">
            <AlertCircleIcon className="flex-shrink-0" />
            <p className="head-24-600 text-center text-gray-900">{title}</p>
          </DialogTitle>

          <Description className="body-16-400 mt-16 text-center text-gray-700">
            {description}
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
              className="body-16-500 flex-1 rounded-4 bg-red-300 py-12 text-white"
              onClick={onConfirm}
            >
              Delete
            </button>
          </footer>
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmationModal;

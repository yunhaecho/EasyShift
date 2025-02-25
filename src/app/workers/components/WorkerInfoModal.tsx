import { Dialog, DialogTitle } from '@headlessui/react';
import WorkerInfoContent from './WorkerInfoContent';

import CloseIcon from '@/assets/icons/close.svg';

const WorkerInfoModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="min-h-[40%] w-[50%] rounded-8 bg-white p-24">
          <DialogTitle className="head-20-600 flex items-center justify-end text-gray-900">
            <button onClick={onClose}>
              <CloseIcon />
            </button>
          </DialogTitle>
          <div className="py-20">
            <WorkerInfoContent />
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default WorkerInfoModal;

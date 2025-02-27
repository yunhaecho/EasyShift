import ModalActions from '@/app/components/modals/ModalActions';
import { DialogTitle } from '@headlessui/react';
import { Dialog } from '@headlessui/react';
import AddScheduleModalContent from './AddScheduleModalContent';

const AddScheduleModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="max-h-[80%] w-full max-w-[40%] overflow-y-auto rounded-8 bg-white">
          <DialogTitle className="head-20-600 border-b border-gray-300 px-24 py-16 text-gray-900">
            Add Schedule
          </DialogTitle>
          <AddScheduleModalContent />
          <ModalActions mode="add" onClose={onClose} />
        </div>
      </div>
    </Dialog>
  );
};

export default AddScheduleModal;

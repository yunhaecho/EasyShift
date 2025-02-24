import { Description, DialogTitle } from '@headlessui/react';
import { Dialog } from '@headlessui/react';
import toast from 'react-hot-toast';

import CloseIcon from '@/assets/icons/close.svg';
import CopyIcon from '@/assets/icons/copy.svg';

const INVITE_LINK = 'https://example.com/invite/xyz123';

const InviteLinkModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(INVITE_LINK);
      toast.success('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
      toast.error('Failed to copy link');
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="min-w-480 rounded-8 bg-white p-24">
          <DialogTitle className="head-20-600 flex items-center justify-between text-gray-900">
            <p>Invite Link</p>
            <button onClick={onClose}>
              <CloseIcon />
            </button>
          </DialogTitle>

          <Description className="body-14-400 mt-24 text-gray-700">
            Copy this link to add members
          </Description>

          <div className="mt-16 flex items-center justify-between rounded-8 border border-gray-300 bg-gray-200 px-25 py-21">
            <p className="body-16-400 text-gray-800">{INVITE_LINK}</p>
            <button
              onClick={handleCopy}
              className="flex items-center justify-between gap-5 hover:text-gray-600"
            >
              <CopyIcon />
              <p className="body-14-400 text-gray-900">Copy</p>
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default InviteLinkModal;

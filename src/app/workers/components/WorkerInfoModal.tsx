import { Dialog, DialogTitle } from '@headlessui/react';
import WorkerInfoContent from './WorkerInfoContent';
import CloseIcon from '@/assets/icons/close.svg';
import { Provider } from './WorkerInfoModal.context';
import { Suspense } from 'react';

const WorkerInfoModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        {/* <ErrorBoundary fallback={<p> ⚠️ Something went wrong</p>}> */}
          <Suspense fallback={<LoadingSpinner />}>

          <Provider>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/30" aria-hidden="true"/>
            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center">
              <div className="min-h-[40%] w-[50%] rounded-8 bg-white p-24">
                <DialogTitle className="head-20-600 flex items-center justify-end text-gray-900">
                  <button >
                    <CloseIcon onClick={onClose}/>
                  </button>
                </DialogTitle>
                <div className="py-20">
                  <WorkerInfoContent />
                </div>
              </div>
            </div> 
          </Provider>
          </Suspense>
        {/* </ErrorBoundary> */}

    </Dialog>
  );
};

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};




export default WorkerInfoModal;

import { Dialog, DialogTitle } from '@headlessui/react';
import WorkerInfoContent from './WorkerInfoContent';
import CloseIcon from '@/assets/icons/close.svg';
import useMonthlyCalendar from '@/hooks/useMonthlyCalendar';
import { useWorkerSchedule } from '@/api/endpoints/settings/workerSchedule/useFetchWorkerScheule';
import { format } from 'date-fns';

const WorkerInfoModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const {currentMonth , currentYear} = useMonthlyCalendar();
  const date = new Date(currentYear, currentMonth);  
  const { data, isLoading } = useWorkerSchedule(`${format(date, 'yyyy-MM')}`);

  return (
  
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {isLoading || !data ?(
        'Loading...' 
      ) : (  
      <div>
{/* Overlay */}
<div className="fixed inset-0 bg-black/30" aria-hidden="true"/>

{/* Modal */}
<div className="fixed inset-0 flex items-center justify-center">
  <div className="min-h-[40%] w-[50%] rounded-8 bg-white p-24">
    <DialogTitle className="head-20-600 flex items-center justify-end text-gray-900">
      <button onClick={onClose}>
        <CloseIcon />
      </button>
    </DialogTitle>
    <div className="py-20">
      <WorkerInfoContent data={data}/>
    </div>
  </div>
</div>
      </div>
      ) 
      }
    </Dialog>
  );
};

export default WorkerInfoModal;

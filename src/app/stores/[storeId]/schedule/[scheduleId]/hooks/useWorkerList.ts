import { useState, useContext } from 'react';
import { User } from '@/api/endpoints/stores/types';
import { ScheduleDetailPageContext } from '@/app/context/ScheduleDetailPageContext';

const useWorkerList = () => {
  const { workerData } = useContext(ScheduleDetailPageContext);
  const [workers, setWorkers] = useState<User[]>(workerData?.users || []);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDeleteWorker = (workerId: number) => {
    setWorkers(prevWorkers =>
      prevWorkers.filter(worker => worker.userId !== workerId),
    );
  };

  const filteredWorkers = workers.filter(worker =>
    worker.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return {
    workers,
    searchQuery,
    setSearchQuery,
    handleDeleteWorker,
    filteredWorkers,
  };
};

export default useWorkerList;

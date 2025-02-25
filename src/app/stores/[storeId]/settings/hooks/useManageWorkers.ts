import { useState } from 'react';
import { Worker } from '../types';
import { initialWorkers } from '../../mocks';

const useManageWorkers = () => {
  const [workers, setWorkers] = useState<Worker[]>(initialWorkers);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDeleteWorker = (workerId: number) => {
    setWorkers(prevWorkers =>
      prevWorkers.filter(worker => worker.id !== workerId),
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

export default useManageWorkers;

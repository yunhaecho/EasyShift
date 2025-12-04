import { useState, useContext } from 'react';
import { SettingsPageContext } from '@/app/context/SettingsPageContext';
import { User } from '@/api/endpoints/stores/types';

const useManageWorkers = () => {
  const { storeUserData } = useContext(SettingsPageContext);
  const [workers, setWorkers] = useState<User[]>(storeUserData?.users || []);
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

export default useManageWorkers;

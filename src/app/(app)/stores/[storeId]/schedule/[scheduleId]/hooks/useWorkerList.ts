import { useState, useContext } from 'react';
import { ScheduleDetailPageContext } from '@/app/context/ScheduleDetailPageContext';

const useWorkerList = () => {
  const { leaveRequestData } = useContext(ScheduleDetailPageContext);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWorkers = leaveRequestData?.users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return {
    leaveRequests: leaveRequestData,
    searchQuery,
    setSearchQuery,
    filteredWorkers,
  };
};

export default useWorkerList;

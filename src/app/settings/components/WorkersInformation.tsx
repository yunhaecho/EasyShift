'use client';

import { useState } from 'react';
import { Worker } from '../types';

import PlusWhiteIcon from '../../../assets/icons/plus-white.svg';
import MagnifyingGlassIcon from '../../../assets/icons/magnifying-glass.svg';
import DeleteRedIcon from '../../../assets/icons/delete-red.svg';

const initialWorkers = [
  {
    id: 1,
    name: 'Sarah Wilson',
    phoneNumber: '+1 (555) 123-4567',
    email: 'sarah.wilson@example.com',
    avatarUrl: 'https://via.placeholder.com/150',
    role: 'worker',
  },
  {
    id: 2,
    name: 'James Thompson',
    phoneNumber: '+44 20 7123 4567',
    email: 'james.thompson@example.com',
    avatarUrl: 'https://via.placeholder.com/150',
    role: 'worker',
  },
  {
    id: 3,
    name: 'Emily Davis',
    phoneNumber: '+61 2 9371 0000',
    email: 'emily.davis@example.com',
    avatarUrl: 'https://via.placeholder.com/150',
    role: 'worker',
  },
];

const WorkersInformation = () => {
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

  return (
    <div className="rounded-8 border border-gray-300 bg-white shadow-sm">
      {/* Search bar */}
      <div className="flex items-center justify-between border-b border-gray-400 p-24">
        <div className="flex w-[30%] items-center gap-12 border border-gray-400 p-12">
          <MagnifyingGlassIcon />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search workers..."
            className="w-full focus:outline-none"
          />
        </div>
        <button className="flex h-fit items-center gap-12 rounded-4 bg-gray-900 px-16 py-8">
          <PlusWhiteIcon width={14} height={14} />
          <p className="body-16-400 text-white">Add Worker</p>
        </button>
      </div>

      {/* Header */}
      <div className="flex items-center bg-gray-100 px-24 py-12">
        <p className="body-14-500 flex-1 text-gray-600">Worker</p>
        <p className="body-14-500 flex-1 text-gray-600">Phone</p>
        <p className="body-14-500 flex-1 text-gray-600">Email</p>
      </div>

      {/* Workers */}
      {filteredWorkers.map(worker => (
        <div
          key={worker.id}
          className="flex items-center border-t border-gray-400 px-24 py-12"
        >
          <div className="flex flex-1 items-center gap-16">
            <div className="h-40 w-40 rounded-full bg-gray-300" />
            <p className="body-14-500 text-gray-800">{worker.name}</p>
          </div>
          <p className="body-14-400 flex-1 text-gray-600">
            {worker.phoneNumber}
          </p>
          <div className="flex flex-1 items-center justify-between">
            <p className="body-14-400 text-gray-600">{worker.email}</p>
            <button
              onClick={() => handleDeleteWorker(worker.id)}
              className="p-8 hover:bg-gray-100"
            >
              <DeleteRedIcon />
            </button>
          </div>
        </div>
      ))}

      {/* Empty state */}
      {filteredWorkers.length === 0 && (
        <div className="flex justify-center py-24">
          <p className="body-14-400 text-gray-600">No workers found</p>
        </div>
      )}
    </div>
  );
};

export default WorkersInformation;

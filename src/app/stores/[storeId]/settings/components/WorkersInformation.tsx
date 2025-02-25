'use client';

import { useState } from 'react';
import { Worker } from '../types';
import InviteLinkModal from './InviteLinkModal';
import { initialWorkers } from '../../mocks';

import PlusWhiteIcon from '@/assets/icons/plus-white.svg';
import MagnifyingGlassIcon from '@/assets/icons/magnifying-glass.svg';
import DeleteRedIcon from '@/assets/icons/delete-red.svg';

const WorkersInformation = () => {
  const [workers, setWorkers] = useState<Worker[]>(initialWorkers);
  const [searchQuery, setSearchQuery] = useState('');
  const [isInviteLinkModalOpen, setIsInviteLinkModalOpen] = useState(false);

  const handleDeleteWorker = (workerId: number) => {
    setWorkers(prevWorkers =>
      prevWorkers.filter(worker => worker.id !== workerId),
    );
  };

  const filteredWorkers = workers.filter(worker =>
    worker.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section className="rounded-8 border border-gray-300 bg-white shadow-sm">
      <h2 id="workers-section-title" className="sr-only">
        Workers Information
      </h2>

      {/* Search bar & Invite Link Button */}
      <header className="flex items-center justify-between border-b border-gray-400 p-24">
        <div className="flex w-[30%] items-center gap-12 border border-gray-400 p-12">
          <MagnifyingGlassIcon />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search workers..."
            className="w-full focus:outline-none"
            aria-label="Search workers"
          />
        </div>
        <button
          onClick={() => setIsInviteLinkModalOpen(true)}
          className="flex h-fit items-center gap-12 rounded-4 bg-gray-900 px-16 py-8"
          aria-label="Add new worker"
        >
          <PlusWhiteIcon width={14} height={14} />
          <span className="body-16-400 text-white">Add Worker</span>
        </button>
      </header>

      {/* Workers Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 px-24 py-12">
            <th className="body-14-500 px-24 py-12 text-left text-gray-600">
              Worker
            </th>
            <th className="body-14-500 px-24 py-12 text-left text-gray-600">
              Phone
            </th>
            <th className="body-14-500 px-24 py-12 text-left text-gray-600">
              Email
            </th>
            <th className="body-14-500 px-24 py-12 text-left text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredWorkers.map(worker => (
            <tr key={worker.id} className="border-t border-gray-400">
              <td className="flex items-center gap-16 px-24 py-12">
                <div className="h-40 w-40 rounded-full bg-gray-300" />
                <span className="body-14-500 text-gray-800">{worker.name}</span>
              </td>
              <td className="body-14-400 px-24 py-12 text-gray-600">
                {worker.phoneNumber}
              </td>
              <td className="body-14-400 px-24 py-12 text-gray-600">
                {worker.email}
              </td>
              <td className="px-24 py-12">
                <button
                  onClick={() => handleDeleteWorker(worker.id)}
                  className="p-8 hover:bg-gray-100"
                  aria-label={`Delete ${worker.name}`}
                >
                  <DeleteRedIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Empty state */}
      {filteredWorkers.length === 0 && (
        <section className="flex justify-center py-24" role="alert">
          <p className="body-14-400 text-gray-600">No workers found</p>
        </section>
      )}

      {/* Invite Link Modal */}
      <InviteLinkModal
        isOpen={isInviteLinkModalOpen}
        onClose={() => setIsInviteLinkModalOpen(false)}
      />
    </section>
  );
};

export default WorkersInformation;

'use client';

import useToggle from '@/app/hooks/useToggle';
import useManageWorkers from '../hooks/useManageWorkers';

import InviteLinkModal from './InviteLinkModal';
import WorkerInfoModal from '@/app/workers/components/WorkerInfoModal';
import WorkerSearchBar from './WorkerSearchBar';

import PlusWhiteIcon from '@/assets/icons/plus-white.svg';
import DeleteRedIcon from '@/assets/icons/delete-red.svg';

const WorkersInformation = () => {
  const { searchQuery, setSearchQuery, handleDeleteWorker, filteredWorkers } =
    useManageWorkers();
  const [isInviteLinkModalOpen, toggleInviteLinkModal] = useToggle(false);
  const [isWorkerInfoModalOpen, toggleWorkerInfoModal] = useToggle(false);

  return (
    <section className="rounded-8 border border-gray-300 bg-white shadow-sm">
      <h2 id="workers-section-title" className="sr-only">
        Workers Information
      </h2>

      {/* Search bar & Invite Link Button */}
      <header className="flex items-center justify-between border-b border-gray-400 p-24">
        <div className="w-[30%]">
          <WorkerSearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <button
          onClick={toggleInviteLinkModal}
          className="flex h-fit items-center gap-12 rounded-4 bg-gray-900 px-16 py-8"
          aria-label="Add new worker"
        >
          <PlusWhiteIcon width={14} height={14} />
          <span className="body-16-400 text-white">Add Worker</span>
        </button>
      </header>

      {/* Workers Table */}
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="body-14-500 w-2/10 w-[30%] px-24 py-12 text-left text-gray-600">
              Worker
            </th>
            <th className="body-14-500 w-3/10 w-[30%] px-24 py-12 text-left text-gray-600">
              Phone
            </th>
            <th className="body-14-500 w-3/10 w-[30%] px-24 py-12 text-left text-gray-600">
              Email
            </th>
            <th className="body-14-500 w-2/10 w-[10%] px-24 py-12 text-left text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredWorkers.map(worker => (
            <tr
              key={worker.id}
              className="border-t border-gray-400"
              onClick={toggleWorkerInfoModal}
            >
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
                  className="pl-16 hover:bg-gray-100"
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
        onClose={toggleInviteLinkModal}
      />

        <WorkerInfoModal
          isOpen={isWorkerInfoModalOpen}
          onClose={toggleWorkerInfoModal}
        />
    </section>
  );
};

export default WorkersInformation;

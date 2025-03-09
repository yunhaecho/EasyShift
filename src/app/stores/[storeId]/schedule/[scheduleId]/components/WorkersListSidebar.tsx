import useToggle from '@/app/hooks/useToggle';
import WorkerSearchBar from '../../../settings/components/WorkerSearchBar';
import WorkerInfoModal from '@/app/workers/components/WorkerInfoModal';
import useWorkerList from '../hooks/useWorkerList';
import { format } from 'date-fns';

const WorkersListSidebar = () => {
  const { filteredWorkers, searchQuery, setSearchQuery } = useWorkerList();
  const [isWorkerInfoModalOpen, toggleWorkerInfoModal] = useToggle(false);

  return (
    <>
      <aside className="flex h-full w-[20%] flex-col border-l border-gray-300 bg-white">
        <header className="flex flex-col gap-16 border-b border-gray-400 p-16">
          <h2 className="body-18-500">Workers List</h2>
          <nav>
            <WorkerSearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              aria-label="Search workers"
            />
          </nav>
        </header>
        <div className="flex-1 overflow-y-auto">
          <section aria-label="Workers list">
            <h3 className="sr-only">Available Workers</h3>
            <ul className="flex flex-col gap-8 p-8" role="list">
              {filteredWorkers?.map(worker => {
                return (
                  <li
                    key={worker.userId}
                    className="flex cursor-pointer flex-col gap-8 rounded-8 border border-gray-400 px-16 py-12 hover:bg-gray-100"
                    role="listitem"
                    onClick={toggleWorkerInfoModal}
                  >
                    <div className="flex items-center gap-12">
                      <span className="body-14-500 text-gray-800">
                        {worker.name}
                      </span>
                    </div>
                    <p className="caption-12-400 text-gray-600">
                      {worker.leaveRequests
                        ?.map(date => format(new Date(date), 'M/d (EEE)'))
                        .join(', ')}
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </aside>
      <WorkerInfoModal
        isOpen={isWorkerInfoModalOpen}
        onClose={toggleWorkerInfoModal}
      />
    </>
  );
};

export default WorkersListSidebar;

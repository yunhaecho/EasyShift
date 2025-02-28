import WorkerSearchBar from '../../../settings/components/WorkerSearchBar';
import useManageWorkers from '../../../settings/hooks/useManageWorkers';

const WorkersListSidebar = () => {
  const { searchQuery, setSearchQuery, filteredWorkers } = useManageWorkers();

  return (
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
          <ul className="flex flex-col gap-16 p-16" role="list">
            {filteredWorkers.map(worker => (
              <li
                key={worker.id}
                className="flex items-center gap-16"
                role="listitem"
              >
                <div className="h-40 w-40 rounded-full border border-gray-400" />
                <span className="body-14-500 text-gray-800">{worker.name}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </aside>
  );
};

export default WorkersListSidebar;

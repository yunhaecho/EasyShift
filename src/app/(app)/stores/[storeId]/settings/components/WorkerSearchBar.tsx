import MagnifyingGlassIcon from '@/assets/icons/magnifying-glass.svg';

const WorkerSearchBar = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}) => {
  return (
    <div className="flex items-center gap-12 border border-gray-400 p-12">
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
  );
};

export default WorkerSearchBar;

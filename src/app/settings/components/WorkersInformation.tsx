import PlusWhiteIcon from '../../../assets/icons/plus-white.svg';
import MagnifyingGlassIcon from '../../../assets/icons/magnifying-glass.svg';
import DeleteRedIcon from '../../../assets/icons/delete-red.svg';

const WorkersInformation = () => {
  return (
    <div className="rounded-8 border border-gray-300 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-400 p-24">
        <div className="flex w-[30%] items-center gap-12 border border-gray-400 p-12">
          <MagnifyingGlassIcon />
          <input
            type="text"
            placeholder="Search workers..."
            className="w-full focus:outline-none"
          />
        </div>
        <button className="flex h-fit items-center gap-12 rounded-4 bg-gray-900 px-16 py-8">
          <PlusWhiteIcon width={14} height={14} />
          <p className="body-16-400 text-white">Add Worker</p>
        </button>
      </div>
      <div className="flex items-center bg-gray-100 px-24 py-12">
        <p className="body-14-500 flex-1 text-gray-600">Worker</p>
        <p className="body-14-500 flex-1 text-gray-600">Phone</p>
        <p className="body-14-500 flex-1 text-gray-600">Email</p>
      </div>
      <div className="flex items-center border-t border-gray-400 px-24 py-12">
        <div className="flex flex-1 items-center gap-16">
          <div className="h-40 w-40 rounded-full bg-gray-300" />
          <p className="body-14-500 text-gray-800">Sarah Wilson</p>
        </div>
        <p className="body-14-400 flex-1 text-gray-600">+1 (555) 123-4567</p>
        <div className="flex flex-1 items-center justify-between">
          <p className="body-14-400 text-gray-600">sarah.wilson@example.com</p>
          <button>
            <DeleteRedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkersInformation;

import EditIcon from '../../../assets/icons/edit.svg';

const StoreInformation = () => {
  return (
    <div className="w-full rounded-8 border border-gray-300 bg-white p-24 shadow-sm">
      <div className="flex flex-col gap-17">
        <div className="flex flex-col gap-16">
          <div className="flex items-center justify-between">
            <p className="head-20-600 text-gray-900">Store Details</p>
            <button className="flex items-center gap-12 rounded-4 bg-gray-900 px-16 py-8">
              <EditIcon />
              <p className="body-16-400 text-white">Edit Store Info</p>
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <p className="body-14-500 text-gray-700">Store Name</p>
            <p className="body-16-500 text-gray-900">Starbucks Reserve</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-16">
          <p className="head-20-600 text-gray-900">Schedule Details</p>
          <div className="flex flex-col gap-4 rounded-8 border border-gray-300 p-17">
            <p className="body-16-500 text-gray-900">Schedule1</p>
            <div className="flex gap-20">
              <div className="flex-1 rounded-8 border border-gray-300 p-17">
                <p className="body-16-500 text-gray-900">Open</p>
                <p className="body-14-400 text-gray-700">6:00 AM - 2:00 PM</p>
              </div>
              <div className="flex-1 rounded-8 border border-gray-300 p-17">
                <p className="body-16-500 text-gray-900">Middle</p>
                <p className="body-14-400 text-gray-700">11:00 AM - 6:00 PM</p>
              </div>
              <div className="flex-1 rounded-8 border border-gray-300 p-17">
                <p className="body-16-500 text-gray-900">Close</p>
                <p className="body-14-400 text-gray-700">3:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInformation;

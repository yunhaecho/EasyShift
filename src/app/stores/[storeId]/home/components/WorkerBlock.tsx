const WorkerBlock = ({
  toggleWorkerInfoModal,
}: {
  toggleWorkerInfoModal: () => void;
}) => {
  return (
    <button
      className="w-full rounded-4 border border-gray-400 bg-white p-8"
      onClick={toggleWorkerInfoModal}
    >
      <p className="body-14-400 truncate text-gray-900">WorkerBlock</p>
    </button>
  );
};

export default WorkerBlock;
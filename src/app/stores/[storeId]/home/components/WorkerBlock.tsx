const WorkerBlock = ({
  toggleWorkerInfoModal,
  shift,
}: {
  toggleWorkerInfoModal: () => void;
  shift: {
    assignedShiftId: number;
    userId: number;
    userName: string;
  };
}) => {
  return (
    <button
      className="w-full rounded-4 border border-gray-400 bg-white p-8"
      onClick={toggleWorkerInfoModal}
    >
      <p className="body-14-400 truncate text-gray-900">{shift.userName}</p>
    </button>
  );
};

export default WorkerBlock;

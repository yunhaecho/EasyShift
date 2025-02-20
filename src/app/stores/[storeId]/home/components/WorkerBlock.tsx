const WorkerBlock = ({ worker }: { worker: { id: number; name: string } }) => {
  console.log(worker);
  return (
    <div className="rounded-4 border border-gray-400 bg-white p-8">
      <p className="body-14-400 truncate text-gray-900">{worker.name}</p>
    </div>
  );
};

export default WorkerBlock;

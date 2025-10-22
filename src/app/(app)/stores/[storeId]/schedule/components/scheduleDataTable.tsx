import React, { useContext } from 'react';
import Status from './Status';
import AdminActions from './AdminActions';
import WorkerActions from './WorkerActions';
import { AuthContext } from '@/app/context/AuthContext';
import { USER_ROLE } from '@/constants/userRole';

type ScheduleDataTableProps = {
  filteredData: Array<{
    id: string;
    scheduleName: string;
    description: string;
    shiftDate: string;
    status: string;
  }>;
  onDeleteSuccess: (deletedScheduleId: string) => void;
};

function ScheduleDataTable({
  filteredData,
  onDeleteSuccess,
}: ScheduleDataTableProps) {
  const column = ['Name', 'Description', 'Period', 'Status', 'Actions'];
  const { user } = useContext(AuthContext);

  return (
    <table className="w-full table-fixed">
      <thead>
        <tr className="caption-12-500 border-b border-gray-300">
          {column.map(col => (
            <td className="body-14-500 px-24 py-12 text-center" key={col}>
              {col}
            </td>
          ))}
        </tr>
      </thead>

      <tbody>
        {filteredData &&
          filteredData.map(schedule => (
            <tr key={schedule.id} className="border-b border-gray-300 bg-white">
              <td className="body-14-500 px-24 py-12 text-center">
                <span>{schedule.scheduleName}</span>
              </td>
              <td className="body-14-500 px-24 py-12 text-center">
                {schedule.description}
              </td>
              <td className="body-14-500 px-24 py-12 text-center">
                {schedule.shiftDate}
              </td>
              <td className="body-14-500 px-24 py-12 text-center">
                <Status status={schedule.status} />
              </td>
              <td className="body-14-500 px-24 py-12 text-center">
                {user?.role === USER_ROLE.ADMIN ? (
                  <AdminActions
                    schedule={schedule}
                    onDeleteSuccess={onDeleteSuccess}
                  />
                ) : (
                  <WorkerActions status={schedule.status} />
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default ScheduleDataTable;

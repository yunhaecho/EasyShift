import React from 'react';
import Status from '../components/Status';
import AdminActions from './AdminActions';
import { UserRole } from '@/app/stores/components/ManageStoreButton';
import WorkerActions from './WorkerActions';

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
  const userRole = 'ADMIN' as UserRole;

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
        {filteredData.map(schedule => (
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
              {userRole === 'ADMIN' ? (
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

import React from 'react'
import Status from '../components/Status';
import Actions from '../components/Actions';

type ScheduleDataTableProps = {
    filteredData: Array<{
        id: string,
        scheduleName: string,
        shiftDate: string,
        status: string,
    }
>,
onDeleteSuccess: (deletedScheduleId: string) => void;
}

function ScheduleDataTable({filteredData , onDeleteSuccess }: ScheduleDataTableProps) {
    
    const column = ['Name', 'Period', 'Status', 'Actions'];

  return (
    <table className="w-full table-fixed">

    <thead>
      <tr className="caption-12-500 border-b border-gray-300">
        {column.map(col => (
          <td
            className="body-14-500 px-24 py-12 text-center"
            key={col}
          >
            {col}
          </td>
        ))}
      </tr>
    </thead>
    
    <tbody>
      {filteredData.map(schedule => (
        <tr
          key={schedule.id}
          className="border-b border-gray-300 bg-white"
        >
          <td className="body-14-500 px-24 py-12 text-center">
            <span>{schedule.scheduleName}</span>
          </td>
          <td className="body-14-500 px-24 py-12 text-center">
            {schedule.shiftDate}
          </td>
          <td className="body-14-500 px-24 py-12 text-center">
            <Status status={schedule.status} />
          </td>
          <td className="body-14-500 px-24 py-12 text-center">
            <Actions schedule={schedule} onDeleteSuccess = {onDeleteSuccess}/>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default ScheduleDataTable
import { mockSchedule } from '../../mocks';

import CalendarGrayIcon from '@/assets/icons/calendar-gray.svg';
import EditIcon from '@/assets/icons/edit.svg';

const ScheduleInformation = ({
  setIsCreateScheduleModalOpen,
}: {
  setIsCreateScheduleModalOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex items-center justify-between">
        <p className="head-20-600 text-gray-900">Schedule Templates</p>
        <button
          className="flex items-center gap-12 rounded-4 bg-gray-900 px-16 py-8"
          onClick={() => setIsCreateScheduleModalOpen(true)}
        >
          <EditIcon />
          <p className="body-16-400 text-white">Edit</p>
        </button>
      </div>
      <div className="flex gap-16">
        {mockSchedule.length === 0 ? (
          <div className="flex w-full flex-col items-center py-64">
            <CalendarGrayIcon />
            <p className="body-18-500 mt-16 text-gray-900">
              No schedule templates registered
            </p>
            <p className="body-14-400 mt-8 text-gray-600">
              Please register a new schedule template
            </p>
          </div>
        ) : (
          mockSchedule.map(schedule => (
            <div
              key={schedule.id}
              className="flex flex-1 flex-col gap-12 rounded-8 border border-gray-300 bg-gray-100 p-16 shadow-sm"
            >
              <p className="body-16-500 text-gray-900">{schedule.name}</p>
              <div className="flex h-full flex-col justify-center gap-10">
                {schedule.shifts.map(shift => (
                  <div
                    key={shift.id}
                    className="grid grid-cols-[60px_1fr] items-center gap-10 pl-20"
                  >
                    <p className="body-14-500 text-gray-900">{shift.name}</p>
                    <p className="body-14-400 text-gray-700">
                      {shift.startTime} - {shift.endTime}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ScheduleInformation;

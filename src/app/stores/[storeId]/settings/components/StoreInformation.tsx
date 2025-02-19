import EditIcon from '@/assets/icons/edit.svg';
import { Schedule } from '../types';

import CalendarGrayIcon from '@/assets/icons/calendar-gray.svg';

const mockSchedule = [
  // {
  //   id: 1,
  //   name: 'Schedule1',
  //   shifts: [
  //     {
  //       id: 1,
  //       name: 'Open',
  //       startTime: '6:00 AM',
  //       endTime: '2:00 PM',
  //     },
  //     {
  //       id: 2,
  //       name: 'Middle',
  //       startTime: '11:00 AM',
  //       endTime: '6:00 PM',
  //     },
  //     {
  //       id: 3,
  //       name: 'Close',
  //       startTime: '3:00 PM',
  //       endTime: '9:00 PM',
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   name: 'Schedule2',
  //   shifts: [
  //     {
  //       id: 1,
  //       name: 'Open',
  //       startTime: '6:00 AM',
  //       endTime: '2:00 PM',
  //     },
  //     {
  //       id: 2,
  //       name: 'Close',
  //       startTime: '3:00 PM',
  //       endTime: '9:00 PM',
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   name: 'Schedule3',
  //   shifts: [
  //     {
  //       id: 1,
  //       name: 'Open',
  //       startTime: '6:00 AM',
  //       endTime: '2:00 PM',
  //     },
  //     {
  //       id: 2,
  //       name: 'Close',
  //       startTime: '3:00 PM',
  //       endTime: '9:00 PM',
  //     },
  //   ],
  // },
] as Schedule[];

const StoreInfoCard = ({
  setIsCreateStoreModalOpen,
}: {
  setIsCreateStoreModalOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex items-center justify-between">
        <p className="head-20-600 text-gray-900">Store Information</p>
        <button
          className="flex items-center gap-12 rounded-4 bg-gray-900 px-16 py-8"
          onClick={() => setIsCreateStoreModalOpen(true)}
        >
          <EditIcon />
          <p className="body-16-400 text-white">Edit</p>
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <p className="body-14-500 text-gray-700">Store Name</p>
        <p className="body-16-500 text-gray-900">Starbucks Reserve</p>
      </div>
    </div>
  );
};

const ScheduleInfoCard = ({
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

const StoreInformation = ({
  setIsCreateStoreModalOpen,
  setIsCreateScheduleModalOpen,
}: {
  setIsCreateStoreModalOpen: (isOpen: boolean) => void;
  setIsCreateScheduleModalOpen: (isOpen: boolean) => void;
}) => {
  return (
    <>
      <div className="rounded-8 border border-gray-300 bg-white p-24 shadow-sm">
        <StoreInfoCard setIsCreateStoreModalOpen={setIsCreateStoreModalOpen} />
      </div>
      <div className="rounded-8 border border-gray-300 bg-white p-24 shadow-sm">
        <ScheduleInfoCard
          setIsCreateScheduleModalOpen={setIsCreateScheduleModalOpen}
        />
      </div>
    </>
  );
};

export default StoreInformation;

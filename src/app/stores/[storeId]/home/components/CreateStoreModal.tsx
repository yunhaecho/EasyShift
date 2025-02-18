'use client';

import { useState } from 'react';
import { DialogTitle } from '@headlessui/react';
import { Dialog } from '@headlessui/react';
import { ModalContentProps } from '../types';

import PlusBlackIcon from '@/assets/icons/plus-black.svg';
import DeleteIcon from '@/assets/icons/delete.svg';

// Common Style
const buttonStyle =
  'flex w-fit items-center gap-10 rounded-4 border border-gray-400 px-12 py-8';
const inputStyle =
  'body-16-400 border border-gray-400 px-12 py-9 text-gray-900 focus:outline-none';

// StoreNameInput
const StoreNameInput = () => (
  <div className="flex flex-col gap-4">
    <p className="body-16-500 text-gray-900">Store Name</p>
    <input type="text" placeholder="Enter store name" className={inputStyle} />
  </div>
);

// ScheduleInput
const ScheduleInput = ({ deleteSchedule }: { deleteSchedule: () => void }) => (
  <div className="flex flex-col gap-4">
    <div className="flex justify-between">
      <p className="body-16-500 text-gray-900">Schedule Name</p>
      <DeleteIcon className="cursor-pointer" onClick={deleteSchedule} />
    </div>
    <input
      type="text"
      placeholder="Enter schedule name (e.g. '주방', '홀')"
      className={inputStyle}
    />
  </div>
);

// ShiftInput
const ShiftInput = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div className="flex min-w-0 flex-1 flex-col gap-4">
    <p className="body-16-500 text-gray-900">{label}</p>
    <input type="text" placeholder={placeholder} className={inputStyle} />
  </div>
);

// ModalContent
const ModalContent = ({
  schedules,
  addSchedule,
  addShift,
  deleteSchedule,
  deleteShift,
}: ModalContentProps) => (
  <div className="flex flex-col gap-24 px-24 py-16">
    <StoreNameInput />
    <div className="flex flex-col gap-16">
      <p className="body-16-500 text-gray-900">Store Schedules</p>
      {schedules.map(
        (schedule: { shifts: number[] }, scheduleIndex: number) => (
          <div
            key={scheduleIndex}
            className="flex flex-col gap-16 rounded-8 border border-gray-300 p-16"
          >
            <ScheduleInput
              deleteSchedule={() => deleteSchedule(scheduleIndex)}
            />
            <div className="flex flex-col gap-16 rounded-8 border border-gray-300 p-16">
              {schedule.shifts.map((shift: number, shiftIndex: number) => (
                <div key={shift} className="flex flex-wrap items-end gap-16">
                  <ShiftInput
                    label={`Shift ${shift + 1}`}
                    placeholder="Enter shift name (e.g. '오픈')"
                  />
                  <ShiftInput label="Start Time" placeholder="--:--" />
                  <ShiftInput label="End Time" placeholder="--:--" />
                  <DeleteIcon
                    className="mb-12 cursor-pointer"
                    onClick={() => deleteShift(scheduleIndex, shiftIndex)}
                  />
                </div>
              ))}
              <button
                onClick={() => addShift(scheduleIndex)}
                className={buttonStyle}
              >
                <PlusBlackIcon />
                <p className="body-16-500">Add New Shift</p>
              </button>
            </div>
          </div>
        ),
      )}
      <button onClick={addSchedule} className={buttonStyle}>
        <PlusBlackIcon />
        <p className="body-16-500">Add New Schedule</p>
      </button>
    </div>
  </div>
);

// ModalActions
const ModalActions = ({ onClose }: { onClose: () => void }) => (
  <div className="flex justify-end gap-12 border-t border-gray-300 p-16">
    <button
      onClick={onClose}
      className="body-14-500 rounded-4 border border-gray-400 bg-white px-16 py-8 text-gray-900"
    >
      Cancel
    </button>
    <button
      onClick={onClose}
      className="body-14-500 rounded-4 bg-gray-900 px-16 py-8 text-white"
    >
      Create
    </button>
  </div>
);

const CreateStoreModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [schedules, setSchedules] = useState<{ shifts: number[] }[]>([
    { shifts: [0] },
  ]);

  const addSchedule = () => {
    setSchedules([...schedules, { shifts: [0] }]);
  };

  const addShift = (scheduleIndex: number) => {
    const newSchedules = schedules.map((schedule, index) => {
      if (index === scheduleIndex) {
        return {
          ...schedule,
          shifts: [...schedule.shifts, schedule.shifts.length],
        };
      }
      return schedule;
    });
    setSchedules(newSchedules);
  };

  const deleteSchedule = (scheduleIndex: number) => {
    setSchedules(schedules.filter((_, index) => index !== scheduleIndex));
  };

  const deleteShift = (scheduleIndex: number, shiftIndex: number) => {
    const newSchedules = schedules.map((schedule, index) => {
      if (index === scheduleIndex) {
        return {
          ...schedule,
          shifts: schedule.shifts.filter((_, i) => i !== shiftIndex),
        };
      }
      return schedule;
    });
    setSchedules(newSchedules);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="max-h-[80%] w-full max-w-[50%] overflow-y-auto rounded-8 bg-white">
          <DialogTitle className="head-20-600 border-b border-gray-300 px-24 py-16 text-gray-900">
            Create New Store
          </DialogTitle>
          <ModalContent
            schedules={schedules}
            addSchedule={addSchedule}
            addShift={addShift}
            deleteSchedule={deleteSchedule}
            deleteShift={deleteShift}
          />
          <ModalActions onClose={onClose} />
        </div>
      </div>
    </Dialog>
  );
};

export default CreateStoreModal;

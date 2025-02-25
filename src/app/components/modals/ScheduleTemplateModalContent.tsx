import { Shift } from '@/app/stores/[storeId]/settings/types';
import { ModalContentProps } from '../types';

import PlusBlackIcon from '@/assets/icons/plus-black.svg';
import DeleteIcon from '@/assets/icons/delete-red.svg';

const buttonStyle =
  'flex w-fit items-center gap-10 rounded-4 border border-gray-400 px-12 py-8';
const inputStyle =
  'body-16-400 border border-gray-400 px-12 py-9 text-gray-900 focus:outline-none';

const ScheduleInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <fieldset className="flex flex-col gap-4">
    <legend className="body-16-500 text-gray-900">Schedule Name</legend>
    <input
      type="text"
      placeholder="Enter schedule name (e.g. '주방', '홀')"
      className={inputStyle}
      value={value}
      onChange={onChange}
      aria-label="Schedule name"
    />
  </fieldset>
);

const ShiftInput = ({
  label,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <fieldset className="flex min-w-0 flex-1 flex-col gap-4">
    <label className="body-16-500 text-gray-900">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className={inputStyle}
      value={value}
      onChange={onChange}
      aria-label={label}
    />
  </fieldset>
);

const ScheduleTemplateModalContent = ({
  schedule,
  setSchedule,
  addShift,
  deleteShift,
}: ModalContentProps) => (
  <form className="flex flex-col gap-24 px-24 py-16">
    <ScheduleInput
      value={schedule.name}
      onChange={e => setSchedule({ ...schedule, name: e.target.value })}
    />

    <section className="flex flex-col gap-16 rounded-8 border border-gray-300 p-16">
      <h2 className="sr-only">Shift List</h2>
      {schedule.shifts.map((shift: Shift, index: number) => (
        <fieldset key={shift.id} className="flex flex-wrap items-end gap-16">
          <legend className="sr-only">Shift {index + 1}</legend>
          <ShiftInput
            label={`Shift ${index + 1}`}
            placeholder="Enter shift name (e.g. '오픈')"
            value={shift.name}
            onChange={e => {
              const newShifts = [...schedule.shifts];
              newShifts[index].name = e.target.value;
              setSchedule({ ...schedule, shifts: newShifts });
            }}
          />
          <ShiftInput
            label="Start Time"
            placeholder="--:--"
            value={shift.startTime}
            onChange={e => {
              const newShifts = [...schedule.shifts];
              newShifts[index].startTime = e.target.value;
              setSchedule({ ...schedule, shifts: newShifts });
            }}
          />
          <ShiftInput
            label="End Time"
            placeholder="--:--"
            value={shift.endTime}
            onChange={e => {
              const newShifts = [...schedule.shifts];
              newShifts[index].endTime = e.target.value;
              setSchedule({ ...schedule, shifts: newShifts });
            }}
          />
          <button
            type="button"
            className="p-2"
            aria-label={`Delete Shift ${index + 1}`}
            onClick={() => deleteShift(index)}
          >
            <DeleteIcon className="mb-14 cursor-pointer" />
          </button>
        </fieldset>
      ))}
      <button type="button" onClick={addShift} className={buttonStyle}>
        <PlusBlackIcon />
        <span className="body-16-500">Add Shift</span>
      </button>
    </section>
  </form>
);

export default ScheduleTemplateModalContent;

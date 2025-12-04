import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { format, addYears, subYears, addMonths } from 'date-fns';
import { mockSchedule } from '../../mocks';
import { ScheduleTemplate } from '../../settings/types';

import ChevronDownIcon from '@/assets/icons/chevron-down.svg';
import {
  ShiftDetail,
  AddNewScheduleParams,
} from '@/app/(app)/stores/[storeId]/settings/types';
import { useParams } from 'next/navigation';

const ScheduleTemplateDropdown = ({
  onSelect,
}: {
  onSelect: (template: ScheduleTemplate | null) => void;
}) => {
  const [selectedScheduleTemplate, setSelectedScheduleTemplate] =
    useState<ScheduleTemplate | null>(null);

  return (
    <Menu>
      <MenuButton className="flex w-full justify-between border border-gray-400 bg-white py-9 pl-12">
        <div className="flex w-full items-center justify-between">
          <span
            className={`body-16-400 ${
              selectedScheduleTemplate ? 'text-gray-900' : 'text-gray-500'
            }`}
          >
            {selectedScheduleTemplate
              ? selectedScheduleTemplate.name
              : 'Select Schedule Template'}
          </span>
          <ChevronDownIcon className="mr-8 h-24 w-24" />
        </div>
      </MenuButton>
      <MenuItems
        anchor="bottom"
        transition
        className="w-[var(--button-width)] border border-gray-400 bg-white transition duration-200 ease-out [--anchor-gap:0.25rem] data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        {mockSchedule.map(schedule => (
          <MenuItem key={schedule.id}>
            <button
              className="flex w-full justify-start px-12 py-9 data-[focus]:bg-gray-300"
              onClick={() => {
                setSelectedScheduleTemplate(schedule);
                onSelect(schedule);
              }}
            >
              {schedule.name}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

const MonthYearPicker = ({
  selectedDate,
  onChange,
}: {
  selectedDate: Date;
  onChange: (date: Date) => void;
}) => {
  return (
    <Menu>
      <MenuButton className="body-16-400 flex w-full justify-between border border-gray-400 bg-white py-9 pl-12 text-gray-900">
        <span>{format(selectedDate, 'yyyy년 M월')}</span>
        <ChevronDownIcon className="mr-8 h-24 w-24" />
      </MenuButton>

      <MenuItems
        anchor="bottom"
        transition
        className="w-[var(--button-width)] border border-gray-400 bg-white p-16 transition duration-200 ease-out [--anchor-gap:0.25rem] data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <div className="flex items-center justify-between pb-16">
          <button
            onClick={() => onChange(subYears(selectedDate, 1))}
            className="rounded-4 p-8 hover:bg-gray-100"
          >
            ←
          </button>
          <span className="body-16-500">{format(selectedDate, 'yyyy년')}</span>
          <button
            onClick={() => onChange(addYears(selectedDate, 1))}
            className="rounded-4 p-8 hover:bg-gray-100"
          >
            →
          </button>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {Array.from({ length: 12 }, (_, i) => {
            const date = new Date(selectedDate.getFullYear(), i);
            return (
              <MenuItem key={i}>
                <button
                  className={`w-full rounded-4 p-8 hover:bg-gray-100 ${
                    i === selectedDate.getMonth() && 'bg-gray-200'
                  }`}
                  onClick={() => {
                    onChange(date);
                  }}
                >
                  {format(date, 'M월')}
                </button>
              </MenuItem>
            );
          })}
        </div>
      </MenuItems>
    </Menu>
  );
};

const ShiftRequirementsTable = ({
  shifts,
  shiftDetails,
  onChange,
}: {
  shifts: ScheduleTemplate['shifts'];
  shiftDetails: ShiftDetail[];
  onChange: (index: number, newValue: number) => void;
}) => {
  return (
    <table className="w-full table-fixed border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="body-14-500 w-[20%] px-12 py-8 text-center text-gray-600">
            Shift
          </th>
          <th className="body-14-500 w-[45%] px-24 py-12 text-center text-gray-600">
            Time
          </th>
          <th className="body-14-500 w-[35%] px-24 py-12 text-center text-gray-600">
            Num of Workers
          </th>
        </tr>
      </thead>
      <tbody>
        {shifts.map((shift, index) => (
          <tr key={shift.id} className="border-t border-gray-400">
            <td className="body-14-500 px-24 py-12 text-center text-gray-900">
              {shift.name}
            </td>
            <td className="body-14-400 px-24 py-8 text-center text-gray-600">
              {shift.startTime} - {shift.endTime}
            </td>
            <td className="px-24 py-8">
              <input
                id={`min-workers-${shift.name}`}
                type="number"
                min="1"
                className="body-14-400 w-full border border-gray-400 px-12 py-8 text-gray-900 focus:outline-none"
                name="expectedWorkers"
                value={shiftDetails[index]?.expectedWorkers ?? 0} //
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  // 자식에서 값이 변경되면 부모에 index와 새로운 값을 전달
                  onChange(index, e.currentTarget.valueAsNumber);
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const AddScheduleModalContent = ({
  onParamsChange,
}: {
  onParamsChange: (params: AddNewScheduleParams) => void;
}) => {
  const { storeId } = useParams();

  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    const today = new Date();
    return addMonths(today, 1);
  });

  const [selectedScheduleTemplate, setSelectedScheduleTemplate] =
    useState<ScheduleTemplate | null>(null);

  const [addNewScheduleParameters, setAddNewScheduleParameters] =
    useState<AddNewScheduleParams>({
      storeId: storeId as string,
      scheduleTemplateId: selectedScheduleTemplate
        ? selectedScheduleTemplate.id
        : 0,
      scheduleName: '',
      scheduleMonth: format(selectedDate, 'yyyy-MM'),
      description: '',
      shiftDetails: [],
    });

  // 스케줄 템플릿이 선택되면, 해당 템플릿의 shift 목록을 기반으로 shiftDetails를 초기화
  useEffect(() => {
    if (selectedScheduleTemplate) {
      setAddNewScheduleParameters(prev => ({
        ...prev,
        shiftDetails: selectedScheduleTemplate.shifts.map(shift => ({
          shiftTemplateId: shift.id,
          expectedWorkers: 0,
        })),
      }));
    }
  }, [selectedScheduleTemplate]);

  useEffect(() => {
    onParamsChange(addNewScheduleParameters);
  }, [addNewScheduleParameters, onParamsChange]);

  // ShiftRequirementsTable에서 호출할 업데이트 함수
  const handleShiftChange = (index: number, newExpectedWorkers: number) => {
    setAddNewScheduleParameters(prev => ({
      ...prev,
      shiftDetails: prev.shiftDetails.map((detail, i) =>
        i === index
          ? { ...detail, expectedWorkers: newExpectedWorkers }
          : detail,
      ),
    }));
  };

  const handleAddNewScheduleParamsChange = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.currentTarget;
    setAddNewScheduleParameters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className="flex flex-col gap-24 px-24 py-16">
      <fieldset className="flex flex-col gap-16">
        <legend className="sr-only">Add New Schedule</legend>

        <section className="flex w-full gap-16">
          <div className="flex flex-1 flex-col gap-4">
            <label
              htmlFor="schedule-name"
              className="body-16-500 text-gray-900"
            >
              Schedule Name
            </label>
            <input
              type="text"
              placeholder="Enter Schedule Name"
              className="body-16-400 w-full border border-gray-400 px-12 py-8 text-gray-900 focus:outline-none"
              name="scheduleName"
              onChange={handleAddNewScheduleParamsChange}
            />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <label
              htmlFor="schedule-date"
              className="body-16-500 text-gray-900"
            >
              Schedule Date
            </label>
            <MonthYearPicker
              selectedDate={selectedDate}
              onChange={setSelectedDate}
            />
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <label
            htmlFor="schedule-description"
            className="body-16-500 text-gray-900"
          >
            Schedule Description
          </label>
          <input
            placeholder="Enter Schedule Description"
            className="body-16-400 w-full border border-gray-400 px-12 py-8 text-gray-900 focus:outline-none"
            name="description"
            onChange={handleAddNewScheduleParamsChange}
          />
        </section>

        <section className="flex flex-col gap-4">
          <label
            htmlFor="schedule-template"
            className="body-16-500 text-gray-900"
          >
            Schedule Template
          </label>
          <ScheduleTemplateDropdown onSelect={setSelectedScheduleTemplate} />
        </section>

        {selectedScheduleTemplate && (
          <section className="mt-4 flex flex-col gap-16 border border-gray-300">
            <h3 className="sr-only">Shift Requirements</h3>
            <ShiftRequirementsTable
              shifts={selectedScheduleTemplate.shifts}
              shiftDetails={addNewScheduleParameters.shiftDetails}
              onChange={handleShiftChange}
            />
          </section>
        )}
      </fieldset>
    </form>
  );
};

export default AddScheduleModalContent;

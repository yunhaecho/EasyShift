import WorkerInfoModal from '@/app/workers/components/WorkerInfoModal';
import { WeekDate } from '@/app/stores/[storeId]/home/types';

import useToggle from '@/app/hooks/useToggle';
import { useSearchParams } from 'next/navigation';
import { useContext } from 'react';
import { ScheduleDetailPageContext } from '@/app/context/ScheduleDetailPageContext';
import { ShiftTemplateResponse } from '@/api/endpoints/stores/types';
import WorkerBlock from './WorkerBlock';

const SHIFT_COLORS = ['#EEF2FF', '#F0FDF4', '#FFF1E7'];

const WeeklyCalendar = ({
  currentWeekDates,
}: {
  currentWeekDates: WeekDate[];
}) => {
  const [isWorkerInfoModalOpen, toggleWorkerInfoModal] = useToggle();
  const { scheduleData } = useContext(ScheduleDetailPageContext);

  const searchParams = useSearchParams();
  const selectedMonth = searchParams.get('date')?.split('-')[1];

  // 임시 컬러 배열
  const getShiftColor = (shiftName: string) => {
    const shiftIndex = scheduleData?.shifts.findIndex(
      (s: ShiftTemplateResponse) => s.shiftTemplateName === shiftName,
    );
    return SHIFT_COLORS[shiftIndex ?? 0 % SHIFT_COLORS.length];
  };

  const isNotSelectedMonth = (date: WeekDate) => {
    return date?.fullDate.getMonth() + 1 !== Number(selectedMonth);
  };

  return (
    <section className="w-full rounded-8 border border-gray-300 bg-white shadow-sm">
      <h2 className="sr-only">오늘 날짜 기준 주간 근무 일정</h2>
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr>
            <th className="body-16-500 p-16 text-gray-600">Shifts</th>
            {currentWeekDates.map((date, index) => (
              <th
                key={index}
                className={`body-16-500 p-16 text-center text-gray-900 ${
                  isNotSelectedMonth(date) && 'opacity-40'
                }`}
              >
                {date ? `${date.day} ${date.dayOfWeek.toUpperCase()}` : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {scheduleData?.shifts.map(shift => (
            <tr
              key={shift.shiftTemplateId}
              className="border-t border-gray-400 align-top"
            >
              <td className="p-16">
                <div className="body-14-500 text-gray-900">
                  {shift.shiftTemplateName}
                </div>
                <div className="body-14-400 text-gray-600">
                  {shift.startTime} - {shift.endTime}
                </div>
              </td>
              {currentWeekDates.map(currentWeekDate => {
                const assignedShifts = shift.dates.filter(
                  date =>
                    date.date ===
                    currentWeekDate.fullDate.toISOString().split('T')[0],
                );

                return (
                  <td
                    key={`${shift.shiftTemplateId}-${currentWeekDate?.fullDate?.getTime()}`}
                    style={{
                      backgroundColor: isNotSelectedMonth(currentWeekDate)
                        ? '#F3F4F6'
                        : getShiftColor(shift.shiftTemplateName),
                    }}
                    className="h-162 border-l border-gray-400 p-16 align-top"
                  >
                    <div className="flex flex-col gap-8">
                      {assignedShifts.length > 0 &&
                        assignedShifts[0]?.assignedShifts?.map(
                          assignedShift => (
                            <WorkerBlock
                              key={`${assignedShift.userId}-${assignedShift.shiftId}`}
                              assignedShift={assignedShift}
                              targetDate={
                                currentWeekDate.fullDate
                                  .toISOString()
                                  .split('T')[0]
                              }
                            />
                          ),
                        )}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <WorkerInfoModal
        isOpen={isWorkerInfoModalOpen}
        onClose={toggleWorkerInfoModal}
      />
    </section>
  );
};

export default WeeklyCalendar;

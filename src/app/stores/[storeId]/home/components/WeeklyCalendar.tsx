'use client';

import WorkerBlock from './WorkerBlock';
import { useContext, useState } from 'react';
import { HomePageContext } from '@/app/context/HomePageContext';
import useToggle from '@/app/hooks/useToggle';
import UserInfoModal from '@/app/components/modals/UserInfoModal';

const SHIFT_COLORS = ['#EEF2FF', '#F0FDF4', '#FFF1E7'];

const WeeklyCalendar = () => {
  const { shiftData, showMyScheduleOnly, currentWeekDates } =
    useContext(HomePageContext);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [isUserInfoModalOpen, toggleUserInfoModal] = useToggle();

  const mockUserId = 401;

  const getShiftColor = (shiftTemplateName: string) => {
    const shiftIndex = shiftData?.findIndex(
      s => s.shiftTemplateName === shiftTemplateName,
    );
    return SHIFT_COLORS[(shiftIndex ?? 0) % SHIFT_COLORS.length];
  };

  const handleWorkerBlockClick = (userId: number) => {
    setSelectedUserId(userId);
    toggleUserInfoModal();
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
                className="body-16-500 p-16 text-center text-gray-900"
              >
                {`${date.day} ${date.dayOfWeek.toUpperCase()}`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {shiftData?.map(shift => (
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
              {currentWeekDates.map(date => {
                /* TODO: 백엔드 날짜 포멧 변경 후 수정 필요 */
                const assignedShifts = shift.dates
                  .filter(d => d.date === date.fullDateString)
                  .flatMap(d => d.assignedShifts);

                return (
                  <td
                    key={`${shift.shiftTemplateId}-${date.fullDateString}`}
                    style={{
                      backgroundColor: getShiftColor(shift.shiftTemplateName),
                    }}
                    className="h-162 border-l border-gray-400 p-16 align-top"
                  >
                    <div className="flex flex-col gap-8">
                      {assignedShifts
                        ?.filter(
                          shift =>
                            !showMyScheduleOnly || shift.userId === mockUserId,
                        )
                        .map(shift => (
                          <WorkerBlock
                            key={shift.shiftId}
                            shift={shift}
                            onClick={() => handleWorkerBlockClick(shift.userId)}
                          />
                        ))}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <UserInfoModal
        isOpen={isUserInfoModalOpen}
        onClose={toggleUserInfoModal}
        userId={selectedUserId}
      />
    </section>
  );
};

export default WeeklyCalendar;

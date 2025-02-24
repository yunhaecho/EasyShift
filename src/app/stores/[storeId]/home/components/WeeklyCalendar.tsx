import WorkerInfoModal from '@/app/workers/components/WorkerInfoModal';
import { WeekDate } from '../types';
import WorkerBlock from './WorkerBlock';
import useToggle from '@/app/hooks/useToggle';
import { mockShifts } from '../../mocks';

const WeeklyCalendar = ({
  currentWeekDates,
}: {
  currentWeekDates: WeekDate[];
}) => {
  const [isWorkerInfoModalOpen, toggleWorkerInfoModal] = useToggle();

  return (
    <section className="w-full rounded-8 border border-gray-300 bg-white shadow-sm">
      <h2 className="sr-only">오늘 날짜 기준 주간 근무 일정</h2>
      <table className="w-full border-collapse">
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
          {mockShifts.map(shift => (
            <tr key={shift.id} className="border-t border-gray-400 align-top">
              <td className="p-16">
                <div className="body-14-500 text-gray-900">{shift.label}</div>
                <div className="body-14-400 text-gray-600">{shift.time}</div>
              </td>
              {Array.from({ length: 7 }).map((_, index) => (
                <td
                  key={index}
                  style={{ backgroundColor: shift.color }}
                  className="h-162 border-l border-gray-400 p-16 align-top"
                >
                  <WorkerBlock toggleWorkerInfoModal={toggleWorkerInfoModal} />
                </td>
              ))}
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

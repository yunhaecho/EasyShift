import { WeekDate } from '../types';
import WorkerBlock from './WorkerBlock';

const shifts = [
  {
    id: 1,
    label: 'Opening',
    time: '06:00-15:00',
    color: '#EEF2FF',
  },
  {
    id: 2,
    label: 'Middle',
    time: '11:00-18:00',
    color: '#F0FDF4',
  },
  {
    id: 3,
    label: 'Closing',
    time: '14:00-23:00',
    color: '#FFF1E7',
  },
];

const WeeklyCalendar = ({
  currentWeekDates,
  toggleWorkerInfoModal,
}: {
  currentWeekDates: WeekDate[];
  toggleWorkerInfoModal: () => void;
}) => {
  return (
    <section className="w-full rounded-8 border border-gray-300 bg-white shadow-sm">
      <table className="w-full border-collapse border border-gray-300">
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
          {shifts.map(shift => (
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
    </section>
  );
};

export default WeeklyCalendar;

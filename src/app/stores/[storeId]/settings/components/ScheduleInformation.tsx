import useToggle from '@/app/hooks/useToggle';
import { mockSchedule } from '../../mocks';
import AddScheduleTemplateModal from '@/app/components/modals/AddScheduleTemplateModal';
import EditScheduleTemplateModal from '@/app/components/modals/EditScheduleTemplateModal';

import CalendarGrayIcon from '@/assets/icons/calendar-gray.svg';
import PlusWhiteIcon from '@/assets/icons/plus-white.svg';
import EditBlackIcon from '@/assets/icons/edit-black.svg';

const ScheduleInformation = () => {
  const [isAddScheduleModalOpen, toggleAddScheduleModal] = useToggle(false);
  const [isEditScheduleModalOpen, toggleEditScheduleModal] = useToggle(false);

  return (
    <section className="flex flex-col gap-16 rounded-8 border border-gray-300 bg-white p-24 shadow-sm">
      <header className="flex items-center justify-between">
        <h2 className="head-20-600 text-gray-900">Schedule Templates</h2>
        <button
          onClick={toggleAddScheduleModal}
          className="flex h-fit items-center gap-12 rounded-4 bg-gray-900 px-16 py-8"
          aria-label="Add new schedule template"
        >
          <PlusWhiteIcon width={14} height={14} />
          <span className="body-16-400 text-white">Add Schedule Template</span>
        </button>
      </header>

      {mockSchedule.length === 0 ? (
        <article className="flex w-full flex-col items-center py-64">
          <CalendarGrayIcon />
          <p role="alert" className="body-18-500 mt-16 text-gray-900">
            No schedule templates registered
          </p>
          <p className="body-14-400 mt-8 text-gray-600">
            Please register a new schedule template
          </p>
        </article>
      ) : (
        <ul className="flex gap-24">
          {mockSchedule.map(schedule => (
            <article
              key={schedule.id}
              className="flex flex-1 flex-col gap-12 rounded-8 border border-gray-300 bg-gray-100 p-16 shadow-sm"
              aria-labelledby={`schedule-title-${schedule.id}`}
            >
              <h3
                id={`schedule-title-${schedule.id}`}
                className="flex items-center justify-between"
              >
                <p className="body-16-500 text-gray-900">{schedule.name}</p>
                <button onClick={toggleEditScheduleModal}>
                  <EditBlackIcon />
                </button>
              </h3>
              <ul className="flex h-full flex-col justify-center gap-10">
                {schedule.shifts.map(shift => (
                  <li key={shift.id}>
                    <dl className="grid grid-cols-[60px_1fr] items-center gap-10 pl-20">
                      <dt className="body-14-500 text-gray-900">
                        {shift.name}
                      </dt>
                      <dd className="body-14-400 text-gray-700">
                        {shift.startTime} - {shift.endTime}
                      </dd>
                    </dl>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </ul>
      )}

      <AddScheduleTemplateModal
        onClose={toggleAddScheduleModal}
        isOpen={isAddScheduleModalOpen}
      />
      <EditScheduleTemplateModal
        isOpen={isEditScheduleModalOpen}
        onClose={toggleEditScheduleModal}
      />
    </section>
  );
};

export default ScheduleInformation;

import EditIcon from '@/assets/icons/edit.svg';
import CalendarGrayIcon from '@/assets/icons/calendar-gray.svg';
import { mockSchedule } from '../../mocks';
import CreateStoreModal from '@/app/components/CreateStoreModal';
import useToggle from '@/app/hooks/useToggle';
import CreateScheduleModal from '@/app/components/CreateScheduleModal';

const StoreInfoCard = () => {
  const [isCreateStoreModalOpen, toggleCreateStoreModal] = useToggle(false);

  return (
    <article className="rounded-8 border border-gray-300 bg-white p-24 shadow-sm">
      <header className="mb-16 flex items-center justify-between">
        <h3 id="store-info-title" className="head-20-600 text-gray-900">
          Store Information
        </h3>
        <button
          className="flex items-center gap-12 rounded-4 bg-gray-900 px-16 py-8"
          onClick={toggleCreateStoreModal}
          aria-label="Edit store information"
        >
          <EditIcon />
          <span className="body-16-400 text-white">Edit</span>
        </button>
      </header>
      <dl className="flex flex-col gap-4">
        <dt className="body-14-500 text-gray-700">Store Name</dt>
        <dd className="body-16-500 text-gray-900">Starbucks Reserve</dd>
      </dl>

      <CreateStoreModal
        isOpen={isCreateStoreModalOpen}
        onClose={toggleCreateStoreModal}
        dialogTitle="Edit Store"
      />
    </article>
  );
};

const ScheduleInfoCard = () => {
  const [isCreateScheduleModalOpen, toggleCreateScheduleModal] =
    useToggle(false);

  return (
    <article className="flex flex-col gap-16 rounded-8 border border-gray-300 bg-white p-24 shadow-sm">
      <header className="flex items-center justify-between">
        <h3 className="head-20-600 text-gray-900">Schedule Templates</h3>
        <button
          className="flex items-center gap-12 rounded-4 bg-gray-900 px-16 py-8"
          onClick={toggleCreateScheduleModal}
          aria-label="Edit schedule templates"
        >
          <EditIcon />
          <span className="body-16-400 text-white">Edit</span>
        </button>
      </header>

      {mockSchedule.length === 0 ? (
        <section className="flex w-full flex-col items-center py-64">
          <CalendarGrayIcon />
          <p role="alert" className="body-18-500 mt-16 text-gray-900">
            No schedule templates registered
          </p>
          <p className="body-14-400 mt-8 text-gray-600">
            Please register a new schedule template
          </p>
        </section>
      ) : (
        <ul className="flex gap-24">
          {mockSchedule.map(schedule => (
            <article
              key={schedule.id}
              className="flex flex-1 flex-col gap-12 rounded-8 border border-gray-300 bg-gray-100 p-16 shadow-sm"
              aria-labelledby={`schedule-title-${schedule.id}`}
            >
              <h4
                id={`schedule-title-${schedule.id}`}
                className="body-16-500 text-gray-900"
              >
                {schedule.name}
              </h4>
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

      <CreateScheduleModal
        isOpen={isCreateScheduleModalOpen}
        onClose={toggleCreateScheduleModal}
        dialogTitle="Edit Schedule"
      />
    </article>
  );
};

const StoreInformation = () => {
  return (
    <section className="flex flex-col gap-29">
      <h2 id="store-section-title" className="sr-only">
        Store Information and Schedule Templates
      </h2>
      <StoreInfoCard />
      <ScheduleInfoCard />
    </section>
  );
};

export default StoreInformation;

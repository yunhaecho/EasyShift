import CalendarGrayIcon from '@/assets/icons/calendar-gray.svg';

const EmptyScheduleTemplateState = () => {
  return (
    <article className="flex w-full flex-col items-center py-64">
      <CalendarGrayIcon />
      <p role="alert" className="body-18-500 mt-16 text-gray-900">
        No schedule templates registered
      </p>
      <p className="body-14-400 mt-8 text-gray-600">
        Please register a new schedule template
      </p>
    </article>
  );
};

export default EmptyScheduleTemplateState;

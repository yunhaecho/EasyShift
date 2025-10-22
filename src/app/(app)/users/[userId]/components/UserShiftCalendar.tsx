import { CalendarCell, CalendarHeader } from './calendar';

const UserShiftCalendar = ({ mode }: { mode: 'modal' | 'page' }) => {
  return (
    <section>
      <article className="h-full rounded-8 bg-white p-12 shadow-md">
        <CalendarHeader mode={mode} />
        <CalendarCell />
      </article>
    </section>
  );
};

export default UserShiftCalendar;

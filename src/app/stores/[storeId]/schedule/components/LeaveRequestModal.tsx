import ModalActions from '@/app/components/modals/ModalActions';
import { Dialog, DialogTitle } from '@headlessui/react';
import { isSameMonth, isSameDay, format } from 'date-fns';
import {
  CalendarHeader,
  DateButton,
  SelectedDates,
  WeekdayHeader,
} from './LeaveRequestCalendarContents';
import useLeaveRequestCalendar from '../hooks/useLeaveRequestCalendar';
import { useEffect } from 'react';
import useCreateLeaveRequestMutation from '@/api/endpoints/stores/useCreateLeaveRequestMutation';
import { useParams } from 'next/navigation';

const LeaveRequestModal = ({
  isOpen,
  onClose,
  scheduleDate,
}: {
  isOpen: boolean;
  onClose: () => void;
  scheduleDate: string;
}) => {
  const { scheduleId } = useParams();
  const { mutate: createLeaveRequest } = useCreateLeaveRequestMutation();

  const currentMonth = new Date(scheduleDate);
  const { calendarDays, selectedDates, resetSelectedDates, handleDateClick } =
    useLeaveRequestCalendar(currentMonth);

  useEffect(() => {
    resetSelectedDates();
  }, [isOpen]);

  const handleSubmit = () => {
    createLeaveRequest({
      scheduleId: Number(scheduleId),
      leaveRequest: {
        dates: selectedDates.map(date => format(date, 'yyyy-MM-dd')),
      },
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="max-h-[80%] w-full max-w-[30%] overflow-y-auto rounded-8 bg-white">
          <DialogTitle className="head-20-600 border-b border-gray-300 px-24 py-16 text-gray-900">
            Submit Leave Request
          </DialogTitle>

          {/* Calendar */}
          <main className="px-24 py-16">
            <CalendarHeader currentMonth={currentMonth} />

            <section className="grid grid-cols-7 gap-16">
              <WeekdayHeader />

              {calendarDays.map(day => {
                const isSelected = selectedDates.some(d => isSameDay(d, day));
                const isCurrentMonth = isSameMonth(day, currentMonth);

                return (
                  <DateButton
                    key={day.toString()}
                    day={day}
                    isSelected={isSelected}
                    isCurrentMonth={isCurrentMonth}
                    onClick={() => handleDateClick(day)}
                  />
                );
              })}
            </section>

            {selectedDates.length > 0 && (
              <SelectedDates dates={selectedDates} />
            )}
          </main>
          <footer>
            <ModalActions
              mode="submit"
              onClose={onClose}
              onSubmit={handleSubmit}
            />
          </footer>
        </div>
      </div>
    </Dialog>
  );
};

export default LeaveRequestModal;

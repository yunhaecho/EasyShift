import ModalActions from '@/app/components/modals/ModalActions';
import { Dialog, DialogTitle } from '@headlessui/react';
import { useMemo, useState } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  isSameDay,
  startOfWeek,
  endOfWeek,
  addDays,
} from 'date-fns';
import { weekNames } from '@/constants/monthNames';

const LeaveRequestModal = ({
  isOpen,
  onClose,
  scheduleDate,
}: {
  isOpen: boolean;
  onClose: () => void;
  scheduleDate: string;
}) => {
  // 날짜 형식 변환 (예: "2025-03" -> Date 객체)
  const currentMonth = new Date(scheduleDate);

  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  // 날짜 선택 핸들러
  const handleDateClick = (date: Date) => {
    setSelectedDates(prevDates => {
      // 이미 선택된 날짜인지 확인
      const isSelected = prevDates.some(d => isSameDay(d, date));

      if (isSelected) {
        // 이미 선택된 날짜라면 제거
        return prevDates.filter(d => !isSameDay(d, date));
      } else {
        // 선택되지 않은 날짜라면 추가
        return [...prevDates, date];
      }
    });
  };

  // 월의 시작일과 끝일을 포함하는 주의 모든 날짜 가져오기
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 }); // 일요일부터 시작
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 }); // 토요일에 끝

  // 캘린더에 표시할 모든 날짜 생성
  const calendarDays = useMemo(() => {
    const days = [];
    let day = calendarStart;
    while (day <= calendarEnd) {
      days.push(new Date(day));
      day = addDays(day, 1);
    }
    return days;
  }, [calendarStart, calendarEnd]);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="max-h-[80%] w-full max-w-[30%] overflow-y-auto rounded-8 bg-white">
          <DialogTitle className="head-20-600 border-b border-gray-300 px-24 py-16 text-gray-900">
            Submit Time Off Request
          </DialogTitle>

          {/* Calendar */}
          <div className="px-24 py-16">
            <h2 className="body-18-500 mb-16 text-center text-gray-900">
              {format(currentMonth, 'MMMM yyyy')}
            </h2>

            <div className="grid grid-cols-7 gap-16">
              {/* 요일 헤더 */}
              {weekNames.map(day => (
                <div
                  key={day}
                  className="body-14-500 py-2 text-center text-gray-600"
                >
                  {day}
                </div>
              ))}

              {/* 날짜 그리드 */}
              {calendarDays.map(day => {
                const isSelected = selectedDates.some(d => isSameDay(d, day));
                const isCurrentMonth = isSameMonth(day, currentMonth);

                return (
                  <button
                    key={day.toString()}
                    onClick={() => handleDateClick(day)}
                    className={`mx-auto flex h-30 w-30 items-center justify-center rounded-full ${isSelected && 'bg-gray-400 text-white'} ${!isCurrentMonth ? 'text-gray-400 disabled:cursor-not-allowed' : 'text-gray-900'}`}
                    disabled={!isCurrentMonth}
                  >
                    <span className="body-14-400">{format(day, 'd')}</span>
                  </button>
                );
              })}
            </div>

            {/* 선택된 날짜 표시 */}
            {selectedDates.length > 0 && (
              <div className="mt-16 rounded-4 border border-gray-300 p-12">
                <h3 className="body-14-500 mb-8 text-gray-900">
                  Selected Dates:
                </h3>
                <div className="body-14-400 text-gray-600">
                  {selectedDates
                    .sort((a, b) => a.getTime() - b.getTime())
                    .map(date => format(date, 'M/d(EEE)'))
                    .join(', ')}
                </div>
              </div>
            )}
          </div>

          <footer>
            <ModalActions
              mode="submit"
              onClose={onClose}
              onSubmit={() => {
                // 선택된 날짜로 휴가 요청 제출 로직
                console.log(
                  'Submitting leave request for dates:',
                  selectedDates,
                );
                onClose();
              }}
            />
          </footer>
        </div>
      </div>
    </Dialog>
  );
};

export default LeaveRequestModal;

'use client';

import { useState } from 'react';
import { Schedule } from '../stores/[storeId]/home/types';

const useScheduleTemplate = (initialSchedule?: Schedule) => {
  const [schedule, setSchedule] = useState<Schedule>(
    initialSchedule || {
      id: '',
      name: '',
      shifts: [{ id: 1, name: '', startTime: '', endTime: '' }],
    },
  );

  const addShift = () => {
    setSchedule(prev => ({
      ...prev,
      shifts: [
        ...prev.shifts,
        {
          id:
            prev.shifts.length > 0
              ? Math.max(...prev.shifts.map(shift => shift.id)) + 1
              : 1,
          name: '',
          startTime: '',
          endTime: '',
        },
      ],
    }));
  };

  const deleteShift = (shiftIndex: number) => {
    if (schedule.shifts.length > 1) {
      setSchedule(prev => ({
        ...prev,
        shifts: prev.shifts.filter((_, index) => index !== shiftIndex),
      }));
    }
  };

  return {
    schedule,
    setSchedule,
    addShift,
    deleteShift,
  };
};

export default useScheduleTemplate;

import { HttpResponse, http } from 'msw';

export const storeHandlers = [
  http.get('/api/stores', () => {
    return HttpResponse.json({
      storeId: 1,
      storeName: 'Standard Bread',
      schedules: [
        {
          scheduleId: 101,
          scheduleName: 'Barista',
        },
        {
          scheduleId: 102,
          scheduleName: 'Bakery',
        },
      ],
      selectedSchedule: {
        scheduleId: 101,
        scheduleName: 'Barista',
        shifts: [
          {
            shiftName: 'Open',
            startTime: '09:00',
            endTime: '18:00',
            dates: [
              {
                date: '2025-02-18',
                assignedShifts: [
                  {
                    shiftId: 12,
                    userId: 1,
                    userName: '양소연',
                  },
                  {
                    shiftId: 13,
                    userId: 2,
                    userName: '김찬호',
                  },
                ],
              },
              {
                date: '2025-02-19',
                assignedShifts: [
                  {
                    shiftId: 14,
                    userId: 1,
                    userName: '양소연',
                  },
                  {
                    shiftId: 15,
                    userId: 2,
                    userName: '김찬호',
                  },
                ],
              },
            ],
          },
          {
            shiftId: 102,
            shiftName: 'Middle',
            startTime: '13:00',
            endTime: '17:00',
            dates: [
              {
                date: '2025-02-20',
                assignedShifts: [
                  {
                    shiftId: 16,
                    userId: 1,
                    userName: '양소연',
                  },
                  {
                    shiftId: 17,
                    userId: 2,
                    userName: '김찬호',
                  },
                ],
              },
            ],
          },
          {
            shiftName: 'Close',
            startTime: '17:00',
            endTime: '23:00',
            dates: [
              {
                date: '2025-02-10',
                assignedShifts: [
                  {
                    shiftId: 18,
                    userId: 1,
                    userName: '양소연',
                  },
                ],
              },
            ],
          },
        ],
      },
    });
  }),
];

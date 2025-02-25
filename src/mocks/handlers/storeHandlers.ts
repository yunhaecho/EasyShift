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
        scheduleId: 201,
        scheduleName: 'Barista',
        shifts: [
          {
            shiftId: 301,
            shiftName: 'Open',
            startTime: '09:00',
            endTime: '18:00',
            dates: [
              {
                date: '2025-02-27',
                assignedShifts: [
                  {
                    assignedShiftId: 401,
                    userId: 501,
                    userName: '양소연',
                  },
                  {
                    assignedShiftId: 402,
                    userId: 502,
                    userName: '김찬호',
                  },
                ],
              },
              {
                date: '2025-02-28',
                assignedShifts: [
                  {
                    assignedShiftId: 403,
                    userId: 503,
                    userName: '양소연',
                  },
                  {
                    assignedShiftId: 404,
                    userId: 504,
                    userName: '김찬호',
                  },
                ],
              },
            ],
          },
          {
            shiftId: 302,
            shiftName: 'Middle',
            startTime: '13:00',
            endTime: '17:00',
            dates: [
              {
                date: '2025-02-27',
                assignedShifts: [
                  {
                    assignedShiftId: 405,
                    userId: 505,
                    userName: '양소연',
                  },
                  {
                    assignedShiftId: 406,
                    userId: 506,
                    userName: '김찬호',
                  },
                ],
              },
            ],
          },
          {
            shiftId: 303,
            shiftName: 'Close',
            startTime: '17:00',
            endTime: '23:00',
            dates: [
              {
                date: '2025-02-28',
                assignedShifts: [
                  {
                    assignedShiftId: 407,
                    userId: 507,
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

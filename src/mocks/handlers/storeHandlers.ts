import { HttpResponse, http } from 'msw';

export const storeHandlers = [
  http.get('/api/stores', () => {
    return HttpResponse.json({
      storeId: 1,
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
            shiftId: 201,
            shiftName: 'Open',
            startTime: '09:00',
            endTime: '18:00',
            dates: [
              {
                date: '2025-02-27',
                assignedShifts: [
                  {
                    assignedShiftId: 301,
                    userId: 401,
                    userName: '양소연',
                  },
                  {
                    assignedShiftId: 302,
                    userId: 402,
                    userName: '김찬호',
                  },
                ],
              },
              {
                date: '2025-02-28',
                assignedShifts: [
                  {
                    assignedShiftId: 303,
                    userId: 403,
                    userName: '양소연',
                  },
                  {
                    assignedShiftId: 304,
                    userId: 404,
                    userName: '김찬호',
                  },
                ],
              },
            ],
          },
          {
            shiftId: 202,
            shiftName: 'Middle',
            startTime: '13:00',
            endTime: '17:00',
            dates: [
              {
                date: '2025-02-27',
                assignedShifts: [
                  {
                    assignedShiftId: 305,
                    userId: 405,
                    userName: '양소연',
                  },
                  {
                    assignedShiftId: 306,
                    userId: 406,
                    userName: '김찬호',
                  },
                ],
              },
            ],
          },
          {
            shiftId: 203,
            shiftName: 'Close',
            startTime: '17:00',
            endTime: '23:00',
            dates: [
              {
                date: '2025-02-28',
                assignedShifts: [
                  {
                    assignedShiftId: 307,
                    userId: 407,
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

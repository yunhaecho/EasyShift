import { HttpResponse, http } from 'msw';

export const storeHandlers = [
  /* 매장 생성 */
  http.post('/api/stores', () => {
    return HttpResponse.json({
      storeId: 4,
      storeName: 'I Love Pub',
      storeCode: 'c1a9c6b7-d5e4-47d3-9c33-abcdef123456',
    });
  }),

  /* 매장 조회 */
  http.get('/api/stores', () => {
    return HttpResponse.json({
      stores: [
        {
          storeId: 1,
          storeName: 'Starbucks Reserve',
          description:
            'Premium coffee experience with rare and unique coffee beans',
        },
        {
          storeId: 2,
          storeName: 'Standard Bread',
          description:
            'Artisanal bakery specializing in sourdough and classic pastries',
        },
        {
          storeId: 3,
          storeName: 'OffOff Coffee',
          description:
            'Cozy neighborhood cafe serving specialty coffee and light bites',
        },
      ],
    });
  }),

  /* 매장 스케쥴 조회 */
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

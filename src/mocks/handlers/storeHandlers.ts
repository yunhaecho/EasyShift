import { HttpResponse, http } from 'msw';

export const storeHandlers = [
  http.get('/api/stores', () => {
    return HttpResponse.json({
      id: 1,
      name: 'Standard Bread',
      schedules: [
        {
          id: 101,
          scheduleName: 'Barista',
        },
        {
          id: 102,
          scheduleName: 'Bakery',
        },
      ],
      selectedSchedule: {
        id: 101,
        scheduleName: 'Barista',
        shifts: [
          {
            id: 201,
            shiftDate: '2025-2-19',
            shiftName: 'Morning',
            startTime: '08:00',
            endTime: '12:00',
            assignedUser: [
              {
                id: 1,
                name: '손태인',
              },
              {
                id: 2,
                name: '조장호',
              },
            ],
          },
          {
            id: 202,
            shiftDate: '2025-2-19',
            shiftName: 'Afternoon',
            startTime: '12:00',
            endTime: '16:00',
            assignedUser: [
              {
                id: 3,
                name: '김찬호',
              },
            ],
          },
          {
            id: 203,
            shiftDate: '2025-2-19',
            shiftName: 'Night',
            startTime: '16:00',
            endTime: '20:00',
            assignedUser: [
              {
                id: 4,
                name: '고주형',
              },
              {
                id: 5,
                name: '조윤해',
              },
            ],
          },
        ],
      },
    });
  }),
];

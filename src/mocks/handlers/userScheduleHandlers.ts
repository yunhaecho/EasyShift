import { http, HttpResponse } from 'msw';

export const userSchedulesHandlers = [
  http.get('/api/stores/:storeId/workers/:userId/schedules', () => {
    return HttpResponse.json({
      schedules: [
        {
          id: 101,
          scheduleName: '3월 주방 스케줄',
          shifts: [
            {
              id: 201,
              shiftDate: '2025-03-05',
              shiftName: 'Open',
              startTime: '09:00',
              endTime: '18:00',
            },
            {
              id: 202,
              shiftDate: '2025-03-07',
              shiftName: 'Close',
              startTime: '18:00',
              endTime: '23:00',
            },
            {
              id: 203,
              shiftDate: '2025-03-08',
              shiftName: 'Open',
              startTime: '09:00',
              endTime: '18:00',
            },
            {
              id: 204,
              shiftDate: '2025-03-09',
              shiftName: 'Close',
              startTime: '18:00',
              endTime: '23:00',
            },
          ],
        },
        {
          id: 102,
          scheduleName: '3월 홀 스케줄',
          shifts: [
            {
              id: 205,
              shiftDate: '2025-03-12',
              shiftName: 'Open',
              startTime: '09:00',
              endTime: '18:00',
            },
            {
              id: 206,
              shiftDate: '2025-03-13',
              shiftName: 'Close',
              startTime: '18:00',
              endTime: '23:00',
            },
          ],
        },
      ],
    });
  }),
];

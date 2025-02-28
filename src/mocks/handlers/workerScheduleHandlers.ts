import { http, HttpResponse } from 'msw';

export const workerSchedulesHandlers = [
  http.get(
    '/api/stores/:storeId/workers/:userId/schedules',
    ({ request, params }) => {
      const { storeId, userId } = params;

      const url = new URL(request.url);
      const date = url.searchParams.get('date'); // "date" 값 가져오기

      // storeId별로 다른 데이터 반환
      if (storeId === '2' && userId === '2') {
        return HttpResponse.json({
          schedules: [
            {
              id: 101,
              scheduleName: '야간 근무',
              shifts: [
                {
                  id: 201,
                  shiftDate: '2025-02-05',
                  shiftName: '1교대',
                  startTime: '12:00',
                  endTime: '15:00',
                },
                {
                  id: 202,
                  shiftDate: '2025-02-07',
                  shiftName: '1교대',
                  startTime: '12:00',
                  endTime: '15:00',
                },
              ],
            },
          ],
        });
      }

      // 기본 응답
      return HttpResponse.json({
        schedules: [],
        requestedDate: date,
      });
    },
  ),
];

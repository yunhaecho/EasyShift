import { HttpResponse, http } from 'msw';

export const scheduleHandlers = [
  http.get('/api/stores/:storeId/schedules', ({ params }) => {
    const { storeId } = params;

    // storeId별로 다른 데이터 반환
    let schedules;
    if (storeId === '1') {
      schedules = [
        {
          id: 201,
          scheduleName: '새벽 근무',
          shiftDate: '2024-12',
          status: 'pending',
          description: '새벽 근무 일정입니다.',
        },
      ];
    } else if (storeId === '2') {
      schedules = [
        {
          id: 301,
          scheduleName: '오픈조 ',
          shiftDate: '2024-10',
          status: 'completed',
          description: '야간 근무 일정입니다.',
        },
        {
          id: 302,
          scheduleName: '주말 근무',
          shiftDate: '2024-11',
          status: 'pending',
          description: '주말 근무 일정입니다.',
        },
      ];
    } else {
      // 기본 응답 (storeId가 정의되지 않거나, 특정 ID가 아닐 경우)
      schedules = [
        {
          id: 101,
          scheduleName: '야간 근무',
          shiftDate: '2024-11',
          status: 'pending',
          description: '야간 근무 일정입니다.',
        },
        {
          id: 102,
          scheduleName: '주간 근무',
          shiftDate: '2024-11',
          status: 'completed',
          description: '주간 근무 일정입니다.',
        },
      ];
    }

    return HttpResponse.json({ schedules });
  }),
];

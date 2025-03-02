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
          shiftDate: '2025-03',
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

  /* 일주일치 스케줄 조회(캘린더 인디케이터) */
  http.get('/api/schedules/:scheduleTemplateId?date=:date', ({ params }) => {
    const { scheduleTemplateId } = params;

    return HttpResponse.json({
      scheduleTemplateId: scheduleTemplateId,
      scheduleTemplateName: 'Bakery',
      shifts: [
        {
          shiftTemplateId: 1,
          shiftTemplateName: 'Open',
          startTime: '09:00',
          endTime: '18:00',
          dates: [
            {
              date: '2025-03-01',
              assignedShifts: [
                {
                  shiftId: 12,
                  userId: 1,
                  userName: 'Yang Soyeon',
                },
                {
                  shiftId: 13,
                  userId: 2,
                  userName: 'Kim Chanho',
                },
              ],
            },
            {
              date: '2025-03-02',
              assignedShifts: [
                {
                  shiftId: 14,
                  userId: 1,
                  userName: 'Yang Soyeon',
                },
                {
                  shiftId: 15,
                  userId: 2,
                  userName: 'Kim Chanho',
                },
              ],
            },
          ],
        },
        {
          shiftTemplateId: 2,
          shiftTemplateName: 'Close',
          startTime: '18:00',
          endTime: '22:00',
          dates: [
            {
              date: '2025-03-01',
              assignedShifts: [
                {
                  shiftId: 14,
                  userId: 3,
                  userName: 'Lee Youngjae',
                },
              ],
            },
            {
              date: '2025-03-02',
              assignedShifts: [
                {
                  shiftId: 15,
                  userId: 3,
                  userName: 'Lee Youngjae',
                },
              ],
            },
          ],
        },
      ],
    });
  }),

  /* 스케줄 조회(all) */
  http.get('/api/schedules/:scheduleId/all', ({ params }) => {
    const { scheduleId } = params;

    return HttpResponse.json({
      scheduleId: scheduleId,
      scheduleName: 'Bakery',
      shifts: [
        {
          shiftTemplateId: 1,
          shiftTemplateName: 'Open',
          startTime: '09:00',
          endTime: '18:00',
          dates: [
            {
              date: '2025-03-01',
              assignedShifts: [
                {
                  shiftId: 12,
                  userId: 1,
                  userName: 'Yang Soyeon',
                },
                {
                  shiftId: 13,
                  userId: 2,
                  userName: 'Kim Chanho',
                },
              ],
            },
            {
              date: '2025-03-02',
              assignedShifts: [
                {
                  shiftId: 14,
                  userId: 1,
                  userName: 'Yang Soyeon',
                },
                {
                  shiftId: 15,
                  userId: 2,
                  userName: 'Kim Chanho',
                },
              ],
            },
            {
              date: '2025-03-03',
              assignedShifts: [
                {
                  shiftId: 16,
                  userId: 1,
                  userName: 'Yang Soyeon',
                },
                {
                  shiftId: 17,
                  userId: 2,
                  userName: 'Kim Chanho',
                },
              ],
            },
            {
              date: '2025-03-04',
              assignedShifts: [
                {
                  shiftId: 18,
                  userId: 1,
                  userName: 'Yang Soyeon',
                },
                {
                  shiftId: 19,
                  userId: 2,
                  userName: 'Kim Chanho',
                },
              ],
            },
          ],
        },
        {
          shiftTemplateId: 2,
          shiftTemplateName: 'Close',
          startTime: '18:00',
          endTime: '22:00',
          dates: [
            {
              date: '2025-03-01',
              assignedShifts: [
                {
                  shiftId: 20,
                  userId: 3,
                  userName: 'Lee Youngjae',
                },
              ],
            },
            {
              date: '2025-03-02',
              assignedShifts: [
                {
                  shiftId: 21,
                  userId: 3,
                  userName: 'Lee Youngjae',
                },
              ],
            },
            {
              date: '2025-03-03',
              assignedShifts: [
                {
                  shiftId: 22,
                  userId: 4,
                  userName: 'Jo Jangho',
                },
              ],
            },
            {
              date: '2025-03-04',
              assignedShifts: [
                {
                  shiftId: 23,
                  userId: 4,
                  userName: 'Jo Jangho',
                },
              ],
            },
          ],
        },
      ],
    });
  }),
];

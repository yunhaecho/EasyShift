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

  /* 매장 목록 조회 */
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

  /* 매장 수정 */
  http.patch('/api/stores/:storeId', ({ params }) => {
    return HttpResponse.json({
      storeId: params.storeId,
      storeName: 'Starbucks Reserve',
      description:
        'Premium coffee experience with rare and unique coffee beans',
    });
  }),

  /* 매장 삭제 */
  http.delete('/api/stores/:storeId', () => {
    return HttpResponse.json({
      success: true,
      response: null,
      error: null,
    });
  }),

  /* 매장 Home 조회 */
  http.get('/api/stores/:storeId', ({ params }) => {
    return HttpResponse.json({
      storeId: params.storeId,
      scheduleTemplates: [
        {
          scheduleTemplateId: 101,
          scheduleTemplateName: 'Barista',
        },
        {
          scheduleTemplateId: 102,
          scheduleTemplateName: 'Bakery',
        },
      ],
      selectedScheduleTemplate: {
        scheduleTemplateId: 101,
        scheduleTemplateName: 'Barista',
        shifts: [
          {
            shiftTemplateId: 201,
            shiftTemplateName: 'Open',
            startTime: '09:00',
            endTime: '18:00',
            dates: [
              {
                date: '2025-03-10',
                assignedShifts: [
                  {
                    shiftId: 301,
                    userId: 401,
                    userName: 'Yang Soyeon',
                  },
                  {
                    shiftId: 302,
                    userId: 402,
                    userName: 'Kim Chanho',
                  },
                ],
              },
              {
                date: '2025-03-11',
                assignedShifts: [
                  {
                    shiftId: 303,
                    userId: 401,
                    userName: 'Yang Soyeon',
                  },
                  {
                    shiftId: 304,
                    userId: 402,
                    userName: 'Kim Chanho',
                  },
                ],
              },
            ],
          },
          {
            shiftTemplateId: 202,
            shiftTemplateName: 'Middle',
            startTime: '13:00',
            endTime: '17:00',
            dates: [
              {
                date: '2025-03-12',
                assignedShifts: [
                  {
                    shiftId: 305,
                    userId: 403,
                    userName: 'Jo Jangho',
                  },
                  {
                    shiftId: 306,
                    userId: 404,
                    userName: 'Cho Yunhae',
                  },
                ],
              },
            ],
          },
          {
            shiftTemplateId: 203,
            shiftTemplateName: 'Close',
            startTime: '17:00',
            endTime: '23:00',
            dates: [
              {
                date: '2025-03-13',
                assignedShifts: [
                  {
                    shiftId: 307,
                    userId: 405,
                    userName: 'Lee Youngjae',
                  },
                ],
              },
            ],
          },
        ],
      },
    });
  }),

  /* 매장 스케줄 템플릿 조회 */
  http.get('/api/stores/:storeId/schedule-templates', () => {
    return HttpResponse.json({
      scheduleTemplates: [
        {
          scheduleTemplateId: 1,
          scheduleTemplateName: 'Barista',
          shiftTemplates: [
            {
              shiftTemplateId: 10,
              shiftTemplateName: 'Open',
              startTime: '09:00',
              endTime: '18:00',
            },
            {
              shiftTemplateId: 11,
              shiftTemplateName: 'Middle',
              startTime: '13:00',
              endTime: '17:00',
            },
            {
              shiftTemplateId: 13,
              shiftTemplateName: 'Close',
              startTime: '17:00',
              endTime: '23:00',
            },
          ],
        },
        {
          scheduleTemplateId: 2,
          scheduleTemplateName: 'Bakery',
          shiftTemplates: [
            {
              shiftTemplateId: 12,
              shiftTemplateName: 'Open',
              startTime: '09:00',
              endTime: '18:00',
            },
            {
              shiftTemplateId: 13,
              shiftTemplateName: 'Close',
              startTime: '17:00',
              endTime: '23:00',
            },
          ],
        },
      ],
    });
  }),

  /* 매장 스케줄 템플릿 생성 */
  http.post('/api/stores/:storeId/schedule-templates', () => {
    return HttpResponse.json({
      scheduleTemplateId: 3,
      scheduleTemplateName: 'Storage',
      shiftTemplates: [
        {
          shiftTemplateId: 1,
          shiftTemplateName: 'Open',
          startTime: '09:00',
          endTime: '18:00',
        },
        {
          shiftTemplateId: 2,
          shiftTemplateName: 'Close',
          startTime: '18:00',
          endTime: '23:00',
        },
      ],
    });
  }),

  /* 매장 스케줄 템플릿 삭제 */
  http.delete('/api/schedule-templates/:scheduleTemplateId', () => {
    return HttpResponse.json({
      success: true,
      response: null,
      error: null,
    });
  }),

  /* 매장 사용자 목록 조회 */
  http.get('/api/stores/:storeId/users', () => {
    return HttpResponse.json({
      storeId: 1,
      storeName: 'BurnToBurn Coffee',
      description: 'To Infinity and Beyond! 🚀',
      users: [
        {
          userId: 1,
          name: 'Ko Juhyong',
          email: 'dury.ko@gmail.com',
          phoneNumber: '010-1234-5678',
          avatarUrl: 'https://example.com/avatar5.png',
          role: 'worker',
        },
        {
          userId: 2,
          name: 'Kim Chanho',
          email: 'nh0903@pusan.ac.kr',
          phoneNumber: '010-9876-5432',
          avatarUrl: 'https://example.com/avatar6.png',
          role: 'worker',
        },
        {
          userId: 3,
          name: 'Son Taein',
          email: 'handtaein@gmail.com',
          phoneNumber: '010-9876-5432',
          avatarUrl: 'https://example.com/avatar6.png',
          role: 'worker',
        },
        {
          userId: 4,
          name: 'Yang Soyeon',
          email: 'jayy_19@ewhain.net',
          phoneNumber: '010-9876-5432',
          avatarUrl: 'https://example.com/avatar6.png',
          role: 'worker',
        },
        {
          userId: 5,
          name: 'Lee Youngjae',
          email: 'zerojae175@gmail.com',
          phoneNumber: '010-9876-5432',
          avatarUrl: 'https://example.com/avatar6.png',
          role: 'worker',
        },
        {
          userId: 6,
          name: 'Cho Yunhae',
          email: 'susu12356@gmail.com',
          phoneNumber: '010-9876-5432',
          avatarUrl: 'https://example.com/avatar6.png',
          role: 'worker',
        },
        {
          userId: 7,
          name: 'Jo Jangho',
          email: '26dev@naver.com',
          phoneNumber: '010-9876-5432',
          avatarUrl: 'https://example.com/avatar6.png',
          role: 'worker',
        },
      ],
    });
  }),

  /* 매장 정보 조회 */
  http.get('/api/stores/info?storeCode=:storeCode', () => {
    return HttpResponse.json({
      storeId: 1,
      storeName: 'BurnToBurn Coffee',
      description: 'To Infinity and Beyond! 🚀',
    });
  }),

  /* 매장 참여 */
  http.post('/api/stores/join', () => {
    return HttpResponse.json({
      success: true,
      response: null,
      error: null,
    });
  }),
];

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
                date: '2025-02-27',
                assignedShifts: [
                  {
                    shiftId: 301,
                    userId: 401,
                    userName: '양소연',
                  },
                  {
                    shiftId: 302,
                    userId: 402,
                    userName: '김찬호',
                  },
                ],
              },
              {
                date: '2025-02-28',
                assignedShifts: [
                  {
                    shiftId: 303,
                    userId: 403,
                    userName: '양소연',
                  },
                  {
                    shiftId: 304,
                    userId: 404,
                    userName: '김찬호',
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
                date: '2025-02-27',
                assignedShifts: [
                  {
                    shiftId: 305,
                    userId: 405,
                    userName: '양소연',
                  },
                  {
                    shiftId: 306,
                    userId: 406,
                    userName: '김찬호',
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
                date: '2025-02-28',
                assignedShifts: [
                  {
                    shiftId: 307,
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

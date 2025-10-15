import { http, HttpResponse } from 'msw';

export const scheduleAddHandlers = [
  http.post('/api/schedules/', () => {
    return HttpResponse.json({
      success: true,
      response: null,
      error: null,
    });
  }),
];

import { http, HttpResponse } from 'msw';

export const scheduleDeleteHandlers = [
  http.delete('/api/schedules/:scheduleId', () => {
    return HttpResponse.json({
      success: true,
      response: null,
      error: null,
    });
  }),
];

import { HttpResponse, http } from 'msw';

export const shiftHandlers = [
  /* 근무자 변경 */
  http.patch('/api/shifts/:shiftId', () => {
    return HttpResponse.json({
      success: true,
      response: null,
      error: null,
    });
  }),

  /* 근무 삭제 */
  http.delete('/api/shifts/:shiftId', () => {
    return HttpResponse.json({
      success: true,
      response: null,
      error: null,
    });
  }),
];

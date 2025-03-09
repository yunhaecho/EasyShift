import { http, HttpResponse } from 'msw';

export const kakaoLoginHandlers = [
  http.post('/api/user/login', () => {
    return HttpResponse.json(
      {
        userId: 1,
        email: 'qqqq@kakao.com',
        role: 'worker',
        avatarUrl:
          'https://cdn.pixabay.com/photo/2022/07/04/10/46/vintage-car-7300881_1280.jpg',
        needsSignup: true,
      },
      {
        headers: {
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9',
        },
      },
    );
  }),
];

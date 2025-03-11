export const ROUTES = {
  LANDING: 'landing',
  SIGNIN: `${process.env.NEXT_PUBLIC_KAKAO_LOGIN_URL}/oauth2/authorization/kakao?redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}`,
  SIGNUP: 'signup',
  STORES: 'stores',
  HOME: 'home',
  SCHEDULE: 'schedule',
  SETTINGS: 'settings',
  USERS: 'users',
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];

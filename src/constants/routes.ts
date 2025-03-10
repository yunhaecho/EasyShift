export const ROUTES = {
  LANDING: 'landing',
  SIGNIN: 'auth/signin',
  SIGNUP: 'auth/signup',
  STORES: 'stores',
  HOME: 'home',
  SCHEDULE: 'schedule',
  SETTINGS: 'settings',
  USERS: 'users',
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];

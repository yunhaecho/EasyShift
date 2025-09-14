export const ROUTES = {
  LANDING: 'landing',
  SIGNUP: 'signup',
  STORES: 'stores',
  HOME: 'home',
  SCHEDULE: 'schedule',
  SETTINGS: 'settings',
  USERS: 'users',
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];

export const ROUTES = {
  LANDING: 'landing',
  SIGNIN: 'signin',
  SIGNUP: 'signup',
  STORES: 'stores',
  HOME: 'home',
  SCHEDULE: 'schedule',
  SETTINGS: 'settings',
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];

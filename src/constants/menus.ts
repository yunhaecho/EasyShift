import { ROUTES } from './routes';

export const STORE_MENUS = [
  {
    label: 'Home',
    path: ROUTES.HOME,
  },
  {
    label: 'Schedules',
    path: ROUTES.SCHEDULE,
  },
  {
    label: 'Settings',
    path: ROUTES.SETTINGS,
  },
] as const;

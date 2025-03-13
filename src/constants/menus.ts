import { USER_ROLE } from './userRole';
import { ROUTES } from './routes';
import { UserRole } from '@/api/endpoints/user/types';

export const STORE_MENUS = [
  {
    label: 'Home',
    path: ROUTES.HOME,
    requiredRoles: [USER_ROLE.ADMIN, USER_ROLE.WORKER] as UserRole[],
  },
  {
    label: 'Schedules',
    path: ROUTES.SCHEDULE,
    requiredRoles: [USER_ROLE.ADMIN, USER_ROLE.WORKER] as UserRole[],
  },
  {
    label: 'Settings',
    path: ROUTES.SETTINGS,
    requiredRoles: [USER_ROLE.ADMIN] as UserRole[],
  },
] as const;

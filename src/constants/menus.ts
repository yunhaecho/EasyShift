import { UserRole } from '@/app/stores/components/ManageStoreButton';
import { ROUTES } from './routes';

export const STORE_MENUS = [
  {
    label: 'Home',
    path: ROUTES.HOME,
    requiredRoles: ['ADMIN', 'WORKER'] as UserRole[],
  },
  {
    label: 'Schedules',
    path: ROUTES.SCHEDULE,
    requiredRoles: ['ADMIN', 'WORKER'] as UserRole[],
  },
  {
    label: 'Settings',
    path: ROUTES.SETTINGS,
    requiredRoles: ['ADMIN'] as UserRole[],
  },
] as const;

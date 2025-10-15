import { ROUTES } from '@/constants/routes';

export const HIDDEN_ROUTES = [
  `/${ROUTES.LANDING}`,
  `/${ROUTES.SIGNUP}`,
  `/${ROUTES.STORES}`,
  `/${ROUTES.USERS}`,
] as const;

export type HiddenRoute = (typeof HIDDEN_ROUTES)[number];

export const hideNavigation = (path: string, status: string): boolean => {
  if (status === 'unauthenticated') return true;

  if (path.match(/^\/stores\/\d+\/.+/)) {
    return false;
  }

  return HIDDEN_ROUTES.some(
    route => path === route || path.startsWith(`${route}/`),
  );
};

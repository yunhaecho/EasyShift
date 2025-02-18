import { ROUTES } from '@/constants/routes';

export const HIDDEN_ROUTES = [
  `/${ROUTES.LANDING}`,
  `/${ROUTES.SIGNIN}`,
  `/${ROUTES.SIGNUP}`,
  `/${ROUTES.STORES}`,
] as const;

export type HiddenRoute = (typeof HIDDEN_ROUTES)[number];

export const hideNavigation = (
  path: string,
  isAuthenticated: boolean,
): boolean => {
  return !isAuthenticated || HIDDEN_ROUTES.includes(path as HiddenRoute);
};

export const USER_ROLE = {
  ADMIN: 'ADMIN',
  WORKER: 'WORKER',
  GUEST: 'GUEST',
} as const;

export type UserRole = (typeof USER_ROLE)[keyof typeof USER_ROLE];

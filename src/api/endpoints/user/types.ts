import { USER_ROLE } from '@/constants/userRole';

export type LoginResponse = {
  userId: number;
  email: string;
  name: string;
  avatarUrl: string;
  needsSignup: boolean;
};

export type SignupRequest = {
  name: string;
  phoneNumber?: string;
  role: UserRole;
};

export type User = {
  userId?: number;
  email: string | null | undefined;
  name: string | null | undefined;
  // avatarUrl: string;
  // phoneNumber: string | null;
  role: UserRole | undefined;
  needsSignup: boolean | undefined;
};

export type UserRole = (typeof USER_ROLE)[keyof typeof USER_ROLE];

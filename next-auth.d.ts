// types/next-auth.d.ts
import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface signIn {
    needsSignup?: boolean;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: 'ADMIN' | 'WORKER';
    needsSignup?: boolean;
  }
}
declare module 'next-auth' {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: 'ADMIN' | 'WORKER';
    };
    needSignUp?: boolean;
  }
}

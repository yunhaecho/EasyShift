import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    accessToken: string;
    user: {
      id: number;
      email: string;
      role: string;
      needsSignup: boolean;
    } & DefaultSession['user'];
  }

  interface User {
    accessToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
    user: {
      id: number;
      role: string;
    };
  }
}

declare module 'next-auth/redirect' {
  interface Redirect {
    accessToken: string;
    user: {
      id: number;
      role: string;
    };
  }
}

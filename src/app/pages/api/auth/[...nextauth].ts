import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

declare module 'next-auth' {
  interface User {
    accessToken: string;
  }
  interface Session {
    accessToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
  }
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Kakao',
      credentials: {
        code: { label: 'Kakao Authorization Code', type: 'text' },
      },
      async authorize(credentials) {
        if (!credentials?.code)
          throw new Error('Authorization code is required');

        const res = await fetch(
          `${process.env.NEXTAUTH_URL}/api/auth/kakao-login`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code: credentials.code }),
          },
        );

        const data = await res.json();
        if (!res.ok) throw new Error('Failed to authenticate with Kakao');

        return { id: 'kakao', accessToken: data.access_token };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

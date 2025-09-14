import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

const handler = NextAuth({
  providers: [
    KakaoProvider({
      id: 'kakao',
      name: 'Kakao',
      authorization: 'https://kauth.kakao.com/oauth/authorize',
      token: 'https://kauth.kakao.com/oauth/token',
      clientId: process.env.AUTH_SECRET ?? '',
      clientSecret: process.env.NEXTAUTH_SECRET ?? '',
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {

    async jwt({ token, trigger, session, account }) {
      if (trigger === 'update' && session?.role) {
        token.role = session.role;
        token.needSignUp = false;
      }
      if (account) {
        if (!token.role) {
          token.needSignUp = true;
        }
      }
      return token;
    },
    async session({ token, session }) {
      session.user.role = token.role;
      session.needSignUp = token.needSignUp === true;
      return session;
    },
  },
});

export { handler as GET, handler as POST };

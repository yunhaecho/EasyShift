import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

const handler = NextAuth({
  providers: [
    KakaoProvider({
      id: 'kakao',
      name: 'Kakao',
      authorization: 'https://kauth.kakao.com/oauth/authorize',
      token: 'https://kauth.kakao.com/oauth/token',
      clientId: process.env.AUTH_SECRET!,
      clientSecret: process.env.NEXTAUTH_SECRET!,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {

    async jwt({ user, token, trigger, session }) {
      if(user && !token.role) {
          token.needSignUp = true;
      }
      
      if (trigger === 'update' && session?.role) {
        token.role = session.role;
        token.needSignUp = false;
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

// import { randomBytes, randomUUID } from 'crypto';
// import NextAuth, { AuthOptions } from 'next-auth';
// import KakaoProvider from 'next-auth/providers/kakao';

// const authOptions: AuthOptions = {
//   providers: [
//     KakaoProvider({
//       clientId: process.env.KAKAO_CLIENT_ID as string,
//       clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
//     }),
//   ],
//   session: {
//     strategy: 'jwt',
//     generateSessionToken: () => {
//       return randomUUID?.() ?? randomBytes(32).toString('hex');
//     },
//   },
//   events: {
//     async signIn({ account }) {
//       console.log('account: ', account);
//     },
//   },
//   callbacks: {
//     async jwt({ token, account }) {
//       if (account) {
//         token.code = account.code;
//         token.accessToken = account.access_token;
//         token.refreshToken = account.refresh_token;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user.id = token.id as number;
//       session.user.email = token.email as string;
//       session.user.avatarUrl = token.avatarUrl as string;
//       session.accessToken = token.accessToken as string;
//       session.code = token.code as string;
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

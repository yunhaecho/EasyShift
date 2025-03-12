// import { DefaultSession } from 'next-auth';

// declare module 'next-auth' {
//   interface Session extends DefaultSession {
//     accessToken: string;
//     code: string;
//     user: {
//       id: number;
//       email: string;
//       role: string;
//       needSignup: boolean;
//       avatarUrl: string;
//     } & DefaultSession['user'];
//   }

//   interface User {
//     id: number;
//     role: string;
//     avatarUrl: string;
//     email: string;
//     token: string;
//   }
// }

// declare module 'next-auth/jwt' {
//   interface JWT {
//     user: {
//       id: number;
//       role: string;
//       avatarUrl: string;
//       needSignUp: boolean;
//     };
//   }
// }

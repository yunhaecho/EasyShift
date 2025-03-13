const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

export const API_CONFIG = {
  BASE_URL,
  ENDPOINTS: {
    USER: {
      LOGIN: `${BASE_URL}/api/user/login`,
      SIGNUP: `${BASE_URL}/api/user/signup`,
    },
    // [TODO] 추가 예정
  },
} as const;

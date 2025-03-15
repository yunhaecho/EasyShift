const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

const API_PATHS = {
  USER: `${BASE_URL}/api/user`,
  STORES: `${BASE_URL}/api/stores`,
  SCHEDULES: `${BASE_URL}/api/schedules`,
  SHIFTS: `${BASE_URL}/api/shifts`,
  LEAVE_REQUESTS: `${BASE_URL}/api/leave-requests`,
} as const;

export const API_CONFIG = {
  BASE_URL,
  PATHS: API_PATHS,
  ENDPOINTS: {
    USER: {
      LOGIN: `${API_PATHS.USER}/login`,
      SIGNUP: `${API_PATHS.USER}/signup`,
      INFO: `${API_PATHS.USER}/info`,
    },
    STORES: {
      GET_STORES: (userId: number) => `${API_PATHS.STORES}?userId=${userId}`,
      CREATE_STORE: `${API_PATHS.STORES}`,
      GET_STORE_BY_ID: (storeId: number) => `${API_PATHS.STORES}/${storeId}`,
      UPDATE_STORE: (storeId: number) => `${API_PATHS.STORES}/${storeId}`,
      DELETE_STORE: (storeId: number) => `${API_PATHS.STORES}/${storeId}`,
      GET_USERS_BY_STORE_ID: (storeId: number) =>
        `${API_PATHS.STORES}/${storeId}/users`,
      GET_STORE_INFO_BY_STORE_CODE: (storeCode: string) =>
        `${API_PATHS.STORES}/info?storeCode=${storeCode}`,
      JOIN_STORE: `${API_PATHS.STORES}/join`,
    },
    SCHEDULES: {
      GET_SCHEDULES_BY_STORE_ID: (storeId: string) =>
        `${API_PATHS.SCHEDULES}/${storeId}/schedules`,
      GET_AUTO_ASSIGN_SCHEDULE: (scheduleId: string) =>
        `${API_PATHS.SCHEDULES}/${scheduleId}/auto-assign`,
    },
  },
} as const;

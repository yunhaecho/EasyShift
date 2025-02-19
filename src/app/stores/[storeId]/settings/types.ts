export interface Worker {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  avatarUrl: string;
  role: string;
}

export interface Schedule {
  id: number;
  name: string;
  shifts: Shift[];
}

export interface Shift {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
}

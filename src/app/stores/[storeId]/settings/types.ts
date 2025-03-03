export type Worker = {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  avatarUrl: string;
  role: string;
};

export type ScheduleTemplate = {
  id: number;
  name: string;
  shifts: Shift[];
};

export type Shift = {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
};

import { Schedule } from './settings/types';

export const mockStores = [
  {
    id: 1,
    name: 'Starbucks Reserve',
  },
  {
    id: 2,
    name: 'Standard Bread',
  },
  {
    id: 3,
    name: 'OffOff Coffee',
  },
];

export const initialWorkers = [
  {
    id: 1,
    name: 'Sarah Wilson',
    phoneNumber: '+1 (555) 123-4567',
    email: 'sarah.wilson@example.com',
    avatarUrl: 'https://via.placeholder.com/150',
    role: 'worker',
  },
  {
    id: 2,
    name: 'James Thompson',
    phoneNumber: '+44 20 7123 4567',
    email: 'james.thompson@example.com',
    avatarUrl: 'https://via.placeholder.com/150',
    role: 'worker',
  },
  {
    id: 3,
    name: 'Emily Davis',
    phoneNumber: '+61 2 9371 0000',
    email: 'emily.davis@example.com',
    avatarUrl: 'https://via.placeholder.com/150',
    role: 'worker',
  },
];

export const mockSchedule = [
  {
    id: 1,
    name: 'Schedule1',
    shifts: [
      {
        id: 1,
        name: 'Open',
        startTime: '6:00 AM',
        endTime: '2:00 PM',
      },
      {
        id: 2,
        name: 'Middle',
        startTime: '11:00 AM',
        endTime: '6:00 PM',
      },
      {
        id: 3,
        name: 'Close',
        startTime: '3:00 PM',
        endTime: '9:00 PM',
      },
    ],
  },
  {
    id: 2,
    name: 'Schedule2',
    shifts: [
      {
        id: 1,
        name: 'Open',
        startTime: '6:00 AM',
        endTime: '2:00 PM',
      },
      {
        id: 2,
        name: 'Close',
        startTime: '3:00 PM',
        endTime: '9:00 PM',
      },
    ],
  },
  {
    id: 3,
    name: 'Schedule3',
    shifts: [
      {
        id: 1,
        name: 'Open',
        startTime: '6:00 AM',
        endTime: '2:00 PM',
      },
      {
        id: 2,
        name: 'Close',
        startTime: '3:00 PM',
        endTime: '9:00 PM',
      },
    ],
  },
] as Schedule[];

export const mockShifts = [
  {
    id: 1,
    label: 'Opening',
    time: '06:00-15:00',
    color: '#EEF2FF',
  },
  {
    id: 2,
    label: 'Middle',
    time: '11:00-18:00',
    color: '#F0FDF4',
  },
  {
    id: 3,
    label: 'Closing',
    time: '14:00-23:00',
    color: '#FFF1E7',
  },
];

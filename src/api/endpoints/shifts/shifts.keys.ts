export const queryKeys = {
  shifts: ['shifts'] as const,
  shiftsShiftId: (shiftId: number) => [...queryKeys.shifts, shiftId] as const,
  shiftsShiftIdUserId: (shiftId: number, userId: number) =>
    [...queryKeys.shiftsShiftId(shiftId), userId] as const,
};

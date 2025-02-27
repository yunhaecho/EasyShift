export const queryKeys = {
  home: (storeId: string, selectedScheduleId?: string) =>
    ['stores', storeId, selectedScheduleId] as const,
};

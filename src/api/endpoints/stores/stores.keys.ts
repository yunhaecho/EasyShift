export const queryKeys = {
  stores: ['stores'] as const,
  storesStoreId: (storeId: string) => ['stores', storeId] as const,
};

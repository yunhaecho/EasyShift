export const queryKeys = {
  stores: ['stores'] as const,
  storesStoreId: (storeId: number) => ['stores', storeId] as const,
  storesStoreIdScheduleTemplates: (storeId: number) =>
    [storeId, 'schedule-templates'] as const, // [고민] 매장에 대한 정보가 아닌, 매장의 템플릿 정보만 조회라서 'stores'를 넣어야 하는지?
  storesStoreIdUsers: (storeId: number) =>
    ['stores', storeId, 'users'] as const,
};

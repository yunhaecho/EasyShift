/* TODO: 쿼리키 재검토 필요 */

export const queryKeys = {
  stores: ['stores'] as const,
  storesStoreId: (storeId: number) => [...queryKeys.stores, storeId] as const,
  storesStoreIdUsers: (storeId: number) =>
    [...queryKeys.storesStoreId(storeId), 'users'] as const,
  storesInfoStoreCode: (storeCode: string) =>
    [...queryKeys.stores, storeCode] as const,

  scheduleTemplates: ['schedule-templates'] as const,
  storesStoreIdScheduleTemplates: (storeId: number) =>
    [
      ...queryKeys.scheduleTemplates,
      ...queryKeys.storesStoreId(storeId),
    ] as const, // [고민] 매장에 대한 정보가 아닌, 매장의 템플릿 정보만 조회라서 'stores'를 넣어야 하는지?
  scheduleTemplatesScheduleTemplateId: (scheduleTemplateId: number) =>
    [...queryKeys.scheduleTemplates, scheduleTemplateId] as const,
};

import { SettingsPageContext } from '@/app/context/SettingsPageContext';
import { useSuspenseQuery } from '@tanstack/react-query';
import { storesQueryOptions } from '@/api/endpoints/stores/storesQueryOptions';
import {
  GetStoresStoreIdScheduleTemplatesResponse,
  GetStoresStoreIdUsersResponse,
} from '@/api/endpoints/stores/types';

const SettingsPageProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: storeUserData } =
    useSuspenseQuery<GetStoresStoreIdUsersResponse>(
      storesQueryOptions.getStoresStoreIdUsers(1),
    );
  const { data: scheduleTemplateData } =
    useSuspenseQuery<GetStoresStoreIdScheduleTemplatesResponse>(
      storesQueryOptions.getStoresStoreIdScheduleTemplates(1),
    );

  return (
    <SettingsPageContext.Provider
      value={{ storeUserData, scheduleTemplateData }}
    >
      {children}
    </SettingsPageContext.Provider>
  );
};

export default SettingsPageProvider;

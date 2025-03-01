import { SettingsPageContext } from '@/app/context/SettingsPageContext';

const SettingsPageProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SettingsPageContext.Provider value={null}>
      {children}
    </SettingsPageContext.Provider>
  );
};

export default SettingsPageProvider;

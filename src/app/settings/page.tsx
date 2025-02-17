import StoreInformation from './components/StoreInformation';
import WorkersInformation from './components/WorkersInformation';
const SettingsPage = () => {
  return (
    <div className="flex w-full flex-col gap-29 overflow-y-auto p-32">
      <StoreInformation />
      <WorkersInformation />
    </div>
  );
};

export default SettingsPage;

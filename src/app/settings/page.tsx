import StoreInformation from './components/StoreInformation';

const SettingsPage = () => {
  return (
    <div className="flex w-full flex-col gap-29 p-32">
      <StoreInformation />
      <div className="rounded-8 border border-gray-300 bg-white p-24 shadow-sm">
        근로자 정보 box
      </div>
    </div>
  );
};

export default SettingsPage;

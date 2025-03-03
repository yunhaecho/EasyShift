import useToggle from '@/app/hooks/useToggle';
import EmptyScheduleTemplateState from './EmptyScheduleTemplateState';
import ScheduleTemplateList from './ScheduleTemplateList';
import AddScheduleTemplateModal from '@/app/components/modals/AddScheduleTemplateModal';
import { SettingsPageContext } from '@/app/context/SettingsPageContext';
import { useContext } from 'react';

import PlusWhiteIcon from '@/assets/icons/plus-white.svg';

const ScheduleTemplateInformation = () => {
  const [isAddScheduleModalOpen, toggleAddScheduleModal] = useToggle(false);
  const { scheduleTemplateData } = useContext(SettingsPageContext);

  return (
    <section className="flex flex-col gap-16 rounded-8 border border-gray-300 bg-white p-24 shadow-sm">
      <header className="flex items-center justify-between">
        <h2 className="head-20-600 text-gray-900">Schedule Templates</h2>
        <button
          onClick={toggleAddScheduleModal}
          className="flex h-fit items-center gap-12 rounded-4 bg-gray-900 px-16 py-8"
          aria-label="Add new schedule template"
        >
          <PlusWhiteIcon width={14} height={14} />
          <span className="body-16-400 text-white">Add Schedule Template</span>
        </button>
      </header>

      {scheduleTemplateData?.scheduleTemplates.length === 0 ? (
        <EmptyScheduleTemplateState />
      ) : (
        <ScheduleTemplateList />
      )}

      <AddScheduleTemplateModal
        onClose={toggleAddScheduleModal}
        isOpen={isAddScheduleModalOpen}
      />
    </section>
  );
};

export default ScheduleTemplateInformation;

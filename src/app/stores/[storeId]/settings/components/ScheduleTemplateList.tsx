import EditScheduleTemplateModal from '@/app/components/modals/EditScheduleTemplateModal';
import useToggle from '@/app/hooks/useToggle';
import EditBlackIcon from '@/assets/icons/edit-black.svg';
import { SettingsPageContext } from '@/app/context/SettingsPageContext';
import { useContext } from 'react';

const ScheduleTemplateList = () => {
  const [isEditScheduleModalOpen, toggleEditScheduleModal] = useToggle(false);
  const { scheduleTemplateData } = useContext(SettingsPageContext);

  return (
    <>
      <ul className="flex gap-24">
        {scheduleTemplateData?.scheduleTemplates.map(scheduleTemplate => (
          <article
            key={scheduleTemplate.scheduleTemplateId}
            className="flex flex-1 flex-col gap-12 rounded-8 border border-gray-300 bg-gray-100 p-16 shadow-sm"
            aria-labelledby={`schedule-title-${scheduleTemplate.scheduleTemplateId}`}
          >
            <h3
              id={`schedule-title-${scheduleTemplate.scheduleTemplateId}`}
              className="flex items-center justify-between"
            >
              <p className="body-16-500 text-gray-900">
                {scheduleTemplate.scheduleTemplateName}
              </p>
              <button onClick={toggleEditScheduleModal}>
                <EditBlackIcon />
              </button>
            </h3>
            <ul className="flex h-full flex-col justify-center gap-10">
              {scheduleTemplate.shiftTemplates.map(shiftTemplate => (
                <li key={shiftTemplate.shiftTemplateId}>
                  <dl className="grid grid-cols-[60px_1fr] items-center gap-10 pl-20">
                    <dt className="body-14-500 text-gray-900">
                      {shiftTemplate.shiftTemplateName}
                    </dt>
                    <dd className="body-14-400 text-gray-700">
                      {shiftTemplate.startTime} - {shiftTemplate.endTime}
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </ul>
      <EditScheduleTemplateModal
        isOpen={isEditScheduleModalOpen}
        onClose={toggleEditScheduleModal}
      />
    </>
  );
};

export default ScheduleTemplateList;

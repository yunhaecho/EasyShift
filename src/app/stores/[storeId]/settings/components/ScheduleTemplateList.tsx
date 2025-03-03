import { useContext, useState } from 'react';
import { SettingsPageContext } from '@/app/context/SettingsPageContext';
import { ScheduleTemplate } from '@/api/endpoints/stores/types';

import DeleteRedIcon from '@/assets/icons/delete-red.svg';
import ConfirmationModal from '@/app/components/modals/ConfirmationModal';
import useDeleteScheduleTemplateMutation from '@/api/endpoints/stores/useDeleteScheduleTemplateMutation';

const ScheduleTemplateList = () => {
  const [templateToDelete, setTemplateToDelete] =
    useState<ScheduleTemplate | null>(null);
  const { scheduleTemplateData } = useContext(SettingsPageContext);
  const { mutate: deleteScheduleTemplate } =
    useDeleteScheduleTemplateMutation();

  const handleDeleteClick = (template: ScheduleTemplate) => {
    setTemplateToDelete(template);
  };

  const handleCloseDeleteModal = () => {
    setTemplateToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (templateToDelete) {
      deleteScheduleTemplate(templateToDelete.scheduleTemplateId);
      setTemplateToDelete(null);
    }
  };

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
              <button onClick={() => handleDeleteClick(scheduleTemplate)}>
                <DeleteRedIcon />
              </button>
            </h3>
            <ul className="flex h-full flex-col justify-center gap-10">
              {scheduleTemplate.shiftTemplates.map(
                (shiftTemplate, shiftTemplateIndex) => (
                  <li
                    key={`${shiftTemplate.shiftTemplateName}-${shiftTemplateIndex}`}
                  >
                    <dl className="grid grid-cols-[60px_1fr] items-center gap-10 pl-20">
                      <dt className="body-14-500 text-gray-900">
                        {shiftTemplate.shiftTemplateName}
                      </dt>
                      <dd className="body-14-400 text-gray-700">
                        {shiftTemplate.startTime} - {shiftTemplate.endTime}
                      </dd>
                    </dl>
                  </li>
                ),
              )}
            </ul>
          </article>
        ))}
      </ul>

      <ConfirmationModal
        isOpen={templateToDelete !== null}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
        title={
          templateToDelete
            ? `Are you sure you want to delete '${templateToDelete.scheduleTemplateName}' schedule template?`
            : ''
        }
        description={`All data associated with this schedule template will be permanently deleted. However, schedules already created using this template will remain intact.`}
      />
    </>
  );
};

export default ScheduleTemplateList;

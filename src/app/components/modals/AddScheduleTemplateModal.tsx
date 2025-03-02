'use client';

import { DialogTitle } from '@headlessui/react';
import { Dialog } from '@headlessui/react';
import ScheduleTemplateModalContent from './ScheduleTemplateModalContent';
import ModalActions from './ModalActions';
import useScheduleTemplate from '@/app/hooks/useScheduleTemplate';
import { useContext, useEffect } from 'react';
import { SettingsPageContext } from '@/app/context/SettingsPageContext';
import { useCreateScheduleTemplateMutation } from '@/api/endpoints/stores/useCreateScheduleTemplateMutation';

const AddScheduleTemplateModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const {
    scheduleTemplate,
    setScheduleTemplate,
    addShiftTemplate,
    deleteShiftTemplate,
    resetScheduleTemplate,
  } = useScheduleTemplate();
  const { storeUserData } = useContext(SettingsPageContext);
  const createScheduleTemplateMutation = useCreateScheduleTemplateMutation();

  useEffect(() => {
    if (isOpen) {
      resetScheduleTemplate();
    }
  }, [isOpen, resetScheduleTemplate]);

  const handleSubmit = () => {
    createScheduleTemplateMutation.mutate({
      storeId: storeUserData!.storeId, // [고민] suspense query를 통해 storeUserData의 존재 보장으로 assertion 사용
      scheduleTemplateData: scheduleTemplate,
    });
    onClose();
  };

  console.log(scheduleTemplate);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="max-h-[80%] min-w-[40%] overflow-y-auto rounded-8 bg-white">
          <DialogTitle className="head-20-600 border-b border-gray-300 px-24 py-16 text-gray-900">
            Add Schedule Template
          </DialogTitle>
          <ScheduleTemplateModalContent
            scheduleTemplate={scheduleTemplate}
            setScheduleTemplate={setScheduleTemplate}
            addShiftTemplate={addShiftTemplate}
            deleteShiftTemplate={deleteShiftTemplate}
          />
          <ModalActions mode="add" onClose={onClose} onSubmit={handleSubmit} />
        </div>
      </div>
    </Dialog>
  );
};

export default AddScheduleTemplateModal;

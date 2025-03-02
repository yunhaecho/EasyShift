'use client';

import { useCallback, useState } from 'react';
import { CreateScheduleTemplateRequest } from '@/api/endpoints/stores/types';

const initialState: CreateScheduleTemplateRequest = {
  scheduleTemplateName: '',
  shiftTemplates: [{ shiftTemplateName: '', startTime: '', endTime: '' }],
};

const useScheduleTemplate = () => {
  const [scheduleTemplate, setScheduleTemplate] =
    useState<CreateScheduleTemplateRequest>(initialState);

  const addShiftTemplate = useCallback(() => {
    setScheduleTemplate(prev => ({
      ...prev,
      shiftTemplates: [
        ...prev.shiftTemplates,
        {
          shiftTemplateName: '',
          startTime: '',
          endTime: '',
        },
      ],
    }));
  }, []);

  const deleteShiftTemplate = useCallback((index: number) => {
    setScheduleTemplate(prev => ({
      ...prev,
      shiftTemplates: prev.shiftTemplates.filter((_, i) => i !== index),
    }));
  }, []);

  const resetScheduleTemplate = useCallback(() => {
    setScheduleTemplate(initialState);
  }, []);

  return {
    scheduleTemplate,
    setScheduleTemplate,
    addShiftTemplate,
    deleteShiftTemplate,
    resetScheduleTemplate,
  };
};

export default useScheduleTemplate;

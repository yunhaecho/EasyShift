'use client';

import { useCallback, useState, useMemo } from 'react';
import { CreateScheduleTemplateRequest } from '@/api/endpoints/stores/types';

const getInitialState = (): CreateScheduleTemplateRequest => ({
  scheduleTemplateName: '',
  shiftTemplates: [{ shiftTemplateName: '', startTime: '', endTime: '' }],
});

const useScheduleTemplate = () => {
  const [scheduleTemplate, setScheduleTemplate] =
    useState<CreateScheduleTemplateRequest>(getInitialState);

  const updateScheduleTemplate = useCallback(
    (
      updater: (
        prev: CreateScheduleTemplateRequest,
      ) => CreateScheduleTemplateRequest,
    ) => {
      setScheduleTemplate(updater);
    },
    [],
  );

  const setScheduleTemplateValue = useCallback(
    (newTemplate: CreateScheduleTemplateRequest) => {
      setScheduleTemplate(newTemplate);
    },
    [],
  );

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
    setScheduleTemplate(getInitialState());
  }, []);

  return useMemo(
    () => ({
      scheduleTemplate,
      setScheduleTemplate: updateScheduleTemplate,
      setScheduleTemplateValue,
      addShiftTemplate,
      deleteShiftTemplate,
      resetScheduleTemplate,
    }),
    [
      scheduleTemplate,
      updateScheduleTemplate,
      setScheduleTemplateValue,
      addShiftTemplate,
      deleteShiftTemplate,
      resetScheduleTemplate,
    ],
  );
};

export default useScheduleTemplate;

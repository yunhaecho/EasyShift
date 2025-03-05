'use client';

import { useCallback, useState, useMemo } from 'react';
import { CreateScheduleTemplateRequest } from '@/api/endpoints/stores/types';
import toast from 'react-hot-toast';

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

  const checkScheduleTemplate = useCallback(() => {
    if (!scheduleTemplate.scheduleTemplateName.trim()) {
      toast.error('Please enter a schedule template name.');
      return false;
    }

    if (scheduleTemplate.shiftTemplates.length === 0) {
      toast.error('Please add at least one shift template.');
      return false;
    }

    const invalidShift = scheduleTemplate.shiftTemplates.some(
      shift =>
        !shift.shiftTemplateName.trim() || !shift.startTime || !shift.endTime,
    );

    if (invalidShift) {
      toast.error(
        'Please enter the name, start time, and end time for all shifts.',
      );
      return false;
    }

    return true;
  }, [scheduleTemplate]);

  return useMemo(
    () => ({
      scheduleTemplate,
      setScheduleTemplate: updateScheduleTemplate,
      setScheduleTemplateValue,
      addShiftTemplate,
      deleteShiftTemplate,
      resetScheduleTemplate,
      checkScheduleTemplate,
    }),
    [
      scheduleTemplate,
      updateScheduleTemplate,
      setScheduleTemplateValue,
      addShiftTemplate,
      deleteShiftTemplate,
      resetScheduleTemplate,
      checkScheduleTemplate,
    ],
  );
};

export default useScheduleTemplate;

import { memo, useCallback } from 'react';
import {
  CreateScheduleTemplateRequest,
  ShiftTemplate,
} from '@/api/endpoints/stores/types';
import ScheduleTemplateModalTimeInput from './ScheduleTemplateModalTimeInput';
import ScheduleTemplateModalCommonInput from './ScheduleTemplateModalCommonInput';

import DeleteIcon from '@/assets/icons/delete-red.svg';

const ScheduleTemplateModalShiftTemplateInput = memo(
  ({
    shiftTemplate,
    shiftTemplateIndex,
    setScheduleTemplate,
    deleteShiftTemplate,
  }: {
    shiftTemplate: ShiftTemplate;
    shiftTemplateIndex: number;
    setScheduleTemplate: (
      updater: (
        prev: CreateScheduleTemplateRequest,
      ) => CreateScheduleTemplateRequest,
    ) => void;
    deleteShiftTemplate: (shiftTemplateIndex: number) => void;
  }) => {
    const handleShiftNameChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setScheduleTemplate(prev => {
          const newShiftTemplates = [...prev.shiftTemplates];
          newShiftTemplates[shiftTemplateIndex] = {
            ...newShiftTemplates[shiftTemplateIndex],
            shiftTemplateName: value,
          };
          return {
            ...prev,
            shiftTemplates: newShiftTemplates,
          };
        });
      },
      [shiftTemplateIndex, setScheduleTemplate],
    );

    const handleStartTimeChange = useCallback(
      (type: 'hours' | 'minutes', value: string) => {
        setScheduleTemplate(prev => {
          const updatedShiftTemplates = [...prev.shiftTemplates];
          const currentShift = updatedShiftTemplates[shiftTemplateIndex];

          updatedShiftTemplates[shiftTemplateIndex] = {
            ...currentShift,
            startTime:
              type === 'hours'
                ? `${value}:${currentShift.startTime.split(':')[1]}`
                : `${currentShift.startTime.split(':')[0]}:${value}`,
          };

          return {
            ...prev,
            shiftTemplates: updatedShiftTemplates,
          };
        });
      },
      [shiftTemplateIndex, setScheduleTemplate],
    );

    const handleEndTimeChange = useCallback(
      (type: 'hours' | 'minutes', value: string) => {
        setScheduleTemplate(prev => {
          const updatedShiftTemplates = [...prev.shiftTemplates];
          const currentShift = updatedShiftTemplates[shiftTemplateIndex];

          updatedShiftTemplates[shiftTemplateIndex] = {
            ...currentShift,
            endTime:
              type === 'hours'
                ? `${value}:${currentShift.endTime.split(':')[1]}`
                : `${currentShift.endTime.split(':')[0]}:${value}`,
          };

          return {
            ...prev,
            shiftTemplates: updatedShiftTemplates,
          };
        });
      },
      [shiftTemplateIndex, setScheduleTemplate],
    );

    const handleDelete = useCallback(
      () => deleteShiftTemplate(shiftTemplateIndex),
      [deleteShiftTemplate, shiftTemplateIndex],
    );

    return (
      <fieldset className="flex w-full items-end gap-16">
        <legend className="sr-only">Shift {shiftTemplateIndex + 1}</legend>

        <ScheduleTemplateModalCommonInput
          label={`Shift ${shiftTemplateIndex + 1}`}
          placeholder="Enter shift name (e.g. '오픈')"
          value={shiftTemplate.shiftTemplateName}
          onChange={handleShiftNameChange}
        />

        <ScheduleTemplateModalTimeInput
          label="Start Time"
          hours={shiftTemplate.startTime.split(':')[0] || ''}
          minutes={shiftTemplate.startTime.split(':')[1] || ''}
          onHoursChange={value => handleStartTimeChange('hours', value)}
          onMinutesChange={value => handleStartTimeChange('minutes', value)}
        />

        <ScheduleTemplateModalTimeInput
          label="End Time"
          hours={shiftTemplate.endTime.split(':')[0] || ''}
          minutes={shiftTemplate.endTime.split(':')[1] || ''}
          onHoursChange={value => handleEndTimeChange('hours', value)}
          onMinutesChange={value => handleEndTimeChange('minutes', value)}
        />

        <button
          type="button"
          className="p-2"
          aria-label={`Delete Shift ${shiftTemplateIndex + 1}`}
          onClick={handleDelete}
        >
          <DeleteIcon className="mb-14 cursor-pointer" />
        </button>
      </fieldset>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.shiftTemplate.shiftTemplateName ===
        nextProps.shiftTemplate.shiftTemplateName &&
      prevProps.shiftTemplate.startTime === nextProps.shiftTemplate.startTime &&
      prevProps.shiftTemplate.endTime === nextProps.shiftTemplate.endTime &&
      prevProps.shiftTemplateIndex === nextProps.shiftTemplateIndex
    );
  },
);

ScheduleTemplateModalShiftTemplateInput.displayName =
  'ScheduleTemplateModalShiftTemplateInput';

export default ScheduleTemplateModalShiftTemplateInput;

import {
  CreateScheduleTemplateRequest,
  ShiftTemplate,
} from '@/api/endpoints/stores/types';
import ScheduleTemplateModalCommonInput from './ScheduleTemplateModalCommonInput';
import ScheduleTemplateModalShiftTemplateInput from './ScheduleTemplateModalShiftTemplateInput';

import PlusBlackIcon from '@/assets/icons/plus-black.svg';

const ScheduleTemplateModalContent = ({
  scheduleTemplate,
  setScheduleTemplate,
  addShiftTemplate,
  deleteShiftTemplate,
}: {
  scheduleTemplate: CreateScheduleTemplateRequest;
  setScheduleTemplate: (
    updater: (
      prev: CreateScheduleTemplateRequest,
    ) => CreateScheduleTemplateRequest,
  ) => void;
  addShiftTemplate: () => void;
  deleteShiftTemplate: (shiftTemplateIndex: number) => void;
}) => (
  <form className="flex flex-col gap-24 px-24 py-16">
    <ScheduleTemplateModalCommonInput
      label="Schedule Name"
      value={scheduleTemplate.scheduleTemplateName}
      placeholder="Enter schedule name (e.g. '주방', '홀')"
      onChange={e =>
        setScheduleTemplate(prev => ({
          ...prev,
          scheduleTemplateName: e.target.value,
        }))
      }
    />
    <section className="flex flex-col gap-16 rounded-8 border border-gray-300 p-16">
      <h2 className="sr-only">Shift List</h2>
      {scheduleTemplate.shiftTemplates.map(
        (shiftTemplate: ShiftTemplate, shiftTemplateIndex: number) => (
          <ScheduleTemplateModalShiftTemplateInput
            key={`${shiftTemplate.shiftTemplateName}-${shiftTemplateIndex}`}
            shiftTemplate={shiftTemplate}
            shiftTemplateIndex={shiftTemplateIndex}
            setScheduleTemplate={setScheduleTemplate}
            deleteShiftTemplate={deleteShiftTemplate}
          />
        ),
      )}
      <button
        type="button"
        onClick={addShiftTemplate}
        className="flex w-fit items-center gap-10 rounded-4 border border-gray-400 px-12 py-8"
      >
        <PlusBlackIcon />
        <span className="body-16-500">Add Shift</span>
      </button>
    </section>
  </form>
);

export default ScheduleTemplateModalContent;

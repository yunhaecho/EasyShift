const inputStyle =
  'body-16-400 border border-gray-400 px-12 py-9 text-gray-900 focus:outline-none';

const ScheduleTemplateModalTimeInput = ({
  label,
  hours,
  minutes,
  onHoursChange,
  onMinutesChange,
}: {
  label: string;
  hours: string;
  minutes: string;
  onHoursChange: (value: string) => void;
  onMinutesChange: (value: string) => void;
}) => (
  <fieldset className="flex flex-shrink-0 flex-col gap-4">
    <label className="body-16-500 text-gray-900">{label}</label>
    <div className="flex items-center gap-6">
      <input
        type="number"
        placeholder="HH"
        className={inputStyle}
        value={hours}
        onChange={e => {
          const newValue = e.target.value;
          if (
            newValue === '' ||
            (Number(newValue) >= 0 && Number(newValue) <= 23)
          ) {
            onHoursChange(newValue);
          }
        }}
        min={0}
        max={23}
        aria-label={`${label} hours`}
      />
      <span>:</span>
      <input
        type="number"
        placeholder="MM"
        className={inputStyle}
        value={minutes}
        onChange={e => {
          const newValue = e.target.value;
          if (
            newValue === '' ||
            (Number(newValue) >= 0 && Number(newValue) <= 59)
          ) {
            onMinutesChange(newValue);
          }
        }}
        min={0}
        max={59}
        aria-label={`${label} minutes`}
      />
    </div>
  </fieldset>
);

export default ScheduleTemplateModalTimeInput;

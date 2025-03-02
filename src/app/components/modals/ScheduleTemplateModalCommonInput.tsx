'use client';

import { debounce } from 'lodash';
import { memo, useEffect, useMemo, useState } from 'react';

const inputStyle =
  'body-16-400 border border-gray-400 px-12 py-9 text-gray-900 focus:outline-none';

const ScheduleTemplateModalCommonInput = memo(
  ({
    label,
    value,
    placeholder,
    onChange,
  }: {
    label: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) => {
    const [localValue, setLocalValue] = useState(value);

    const debouncedOnChange = useMemo(
      () =>
        debounce((e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e);
        }, 300),
      [onChange],
    );

    useEffect(() => {
      setLocalValue(value);
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalValue(e.target.value);
      debouncedOnChange(e);
    };

    return (
      <fieldset className="flex w-full flex-col gap-4">
        <label className="body-16-500 text-gray-900">{label}</label>
        <input
          type="text"
          placeholder={placeholder}
          className={inputStyle}
          value={localValue}
          onChange={handleChange}
          aria-label={label}
        />
      </fieldset>
    );
  },
);

ScheduleTemplateModalCommonInput.displayName =
  'ScheduleTemplateModalCommonInput';

export default ScheduleTemplateModalCommonInput;

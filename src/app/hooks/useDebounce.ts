'use client';

import { useEffect, useState } from 'react';

const useDebounce = (value: boolean, delay: number = 500): boolean => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (!value) {
      setDebouncedValue(false);
      return;
    }

    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;

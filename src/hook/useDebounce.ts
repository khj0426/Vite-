import { useState, useEffect } from 'react';

const useDebounce = <T>(value: T, delay?: number) => {
  const [state, setState] = useState<T>(value);
  const Delay = delay || 800;
  useEffect(() => {
    const timer = setTimeout(() => setState(value), Delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return state;
};

export default useDebounce;

import { useEffect, useState } from 'react';

const useDebounce = (searchText: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(searchText);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(searchText);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [searchText, delay]);

  return debouncedValue;
};
export default useDebounce;

import { useCallback, useEffect, useState } from 'react';

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const isBrowser = typeof window !== 'undefined';

  const [storedValue, setStoredValue] = useState<T>(() => {
    if (!isBrowser) return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(`${item}`) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        if (isBrowser) {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.error(`Error setting localStorage key “${key}”:`, error);
      }
    },
    [isBrowser, key, storedValue]
  );

  useEffect(() => {
    setValue(storedValue);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return [storedValue, setValue] as const;
}

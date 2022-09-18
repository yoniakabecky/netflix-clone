import { useCallback, useMemo } from 'react';

import * as KEYS from 'constants/keys';

import useLocalStorage from './useLocalStorage';

type Result = [inMyList: boolean, toggleList: () => void];

export default function useMyList(id: number | null): Result {
  const [storedValue, setValue] = useLocalStorage<number[]>(KEYS.MY_LIST, []);

  const isOnMyList = useMemo(() => {
    if (!id) return false;

    const myListSet = new Set(storedValue);
    return myListSet.has(id);
  }, [storedValue, id]);

  const toggleList = useCallback(() => {
    if (!id) return;

    if (isOnMyList) {
      const newList = storedValue.filter((x) => x !== id);
      setValue(newList);
    } else {
      setValue([...storedValue, id]);
    }
  }, [isOnMyList, storedValue, setValue, id]);

  return [isOnMyList, toggleList];
}

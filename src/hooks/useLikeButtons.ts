import { useCallback, useMemo } from 'react';

import type { LikeType, UserRate } from 'components/uis/LikeButtons';
import * as KEYS from 'constants/keys';

import useLocalStorage from './useLocalStorage';

type StoredLikes = Record<LikeType, Array<number>>;

const initialValues: StoredLikes = {
  like: [],
  dislike: [],
  love: [],
};

type Result = [rating: UserRate, onClick: (_: LikeType) => void];

export default function useLikeButtons(id: number | null): Result {
  const [storedValue, setValue] = useLocalStorage<StoredLikes>(
    KEYS.LIKES,
    initialValues
  );

  const isLiked = useMemo(() => {
    if (!id) return false;
    return storedValue.like.includes(id);
  }, [storedValue, id]);

  const isDisliked = useMemo(() => {
    if (!id) return false;
    return storedValue.dislike.includes(id);
  }, [storedValue, id]);

  const isLoved = useMemo(() => {
    if (!id) return false;
    return storedValue.love.includes(id);
  }, [storedValue, id]);

  const rating: UserRate = useMemo(() => {
    if (isLiked) return 'like';
    if (isDisliked) return 'dislike';
    if (isLoved) return 'love';
    return null;
  }, [isLiked, isDisliked, isLoved]);

  const handleClick = useCallback(
    (type: LikeType) => {
      if (!id) return;

      const copy = { ...storedValue };

      if (isLiked) {
        const likes = copy.like.filter((x) => x !== id);
        copy.like = likes;
      }
      if (isDisliked) {
        const dislikes = copy.dislike.filter((x) => x !== id);
        copy.dislike = dislikes;
      }
      if (isLoved) {
        const loves = copy.love.filter((x) => x !== id);
        copy.love = loves;
      }

      copy[type].push(id);
      setValue(copy);
    },
    [id, storedValue, setValue, isLiked, isDisliked, isLoved]
  );

  return [rating, handleClick];
}

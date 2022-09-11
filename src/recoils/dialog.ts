import { useCallback } from 'react';

import { nanoid } from 'nanoid';
import { atom, useRecoilState, useResetRecoilState } from 'recoil';

import { useOpenState } from 'hooks/useOpenState';
import { CategoryModel, FeaturedMovieModel } from 'models';

type DialogState = {
  movie: FeaturedMovieModel | null;
  list: CategoryModel | null;
  type: 'info' | 'list';
};

const dialogState = atom<DialogState>({
  key: `dialogState_${nanoid()}`,
  default: {
    movie: null,
    list: null,
    type: 'info',
  },
});

export const useDialogState = () => {
  const { open, handleOpen, handleClose } = useOpenState(false);
  const [state, setState] = useRecoilState(dialogState);
  const reset = useResetRecoilState(dialogState);

  const setMovie = (movie: FeaturedMovieModel) =>
    setState({ ...state, type: 'info', movie });

  const setList = (list: CategoryModel) =>
    setState({ ...state, type: 'list', list });

  const closeDialog = useCallback(() => {
    reset();
    handleClose();
  }, [handleClose, reset]);

  return {
    open,
    handleClose: closeDialog,
    handleOpen,
    movie: state.movie,
    list: state.list,
    setMovie,
    setList,
  };
};

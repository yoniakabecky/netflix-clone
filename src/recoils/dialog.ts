import { nanoid } from 'nanoid';
import { atom, useRecoilState, useResetRecoilState } from 'recoil';

import { CategoryModel, FeaturedMovieModel, MovieListItemModel } from 'models';

type DialogState = {
  movie: FeaturedMovieModel | MovieListItemModel | null;
  list: CategoryModel | null;
  type: 'info' | 'list' | null;
};

const dialogState = atom<DialogState>({
  key: `dialogState_${nanoid()}`,
  default: {
    movie: null,
    list: null,
    type: null,
  },
});

export const useDialogState = () => {
  const [state, setState] = useRecoilState(dialogState);
  const reset = useResetRecoilState(dialogState);

  const setMovie = (movie: FeaturedMovieModel | MovieListItemModel) =>
    setState({ ...state, type: 'info', movie });

  const setList = (list: CategoryModel) =>
    setState({ ...state, type: 'list', list });

  const handleClose = () => reset();

  return {
    open: Boolean(state.type),
    handleClose,
    movie: state.movie,
    list: state.list,
    type: state.type,
    setMovie,
    setList,
  };
};

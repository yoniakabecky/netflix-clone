import { nanoid } from 'nanoid';
import { atom, useRecoilState } from 'recoil';

const playSnackbarState = atom<boolean>({
  key: `playSnackbarState_${nanoid()}`,
  default: false,
});

export const usePlaySnackbarState = () => {
  const [state, setState] = useRecoilState(playSnackbarState);

  const handleOpen = () => setState(true);
  const handleClose = () => setState(false);

  return {
    open: state,
    openSnackbar: handleOpen,
    closeSnackbar: handleClose,
  };
};

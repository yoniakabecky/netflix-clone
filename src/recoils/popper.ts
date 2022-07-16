import { nanoid } from 'nanoid';
import { atom, useRecoilState, useResetRecoilState } from 'recoil';

type PopperState = {
  currentPopperTitle: string;
  isOpen: boolean;
  anchorEl: HTMLElement | null;
};

const popperState = atom<PopperState>({
  key: `popperState_${nanoid()}`,
  default: {
    currentPopperTitle: '',
    isOpen: false,
    anchorEl: null,
  },
});

export const usePopperState = () => {
  const [state, setState] = useRecoilState(popperState);
  const reset = useResetRecoilState(popperState);

  const open = (movieTitle: string, anchorEl: HTMLElement) =>
    setState({
      currentPopperTitle: movieTitle,
      isOpen: true,
      anchorEl,
    });

  return {
    popperState: state,
    open,
    close: reset,
  };
};

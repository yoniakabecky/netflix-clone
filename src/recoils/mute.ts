import { nanoid } from 'nanoid';
import { atom, useRecoilState } from 'recoil';

const muteState = atom({
  key: `muteState_${nanoid()}`,
  default: false,
});

type Result = [isMute: boolean, toggleMute: () => void];

export const useMuteState = (): Result => {
  const [isMute, setIsMute] = useRecoilState(muteState);

  const toggleMute = () => setIsMute((prev) => !prev);

  return [isMute, toggleMute];
};

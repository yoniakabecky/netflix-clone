import { IconButtonProps } from '@mui/material';

import MuteIcon from 'components/uis/Icon/MuteIcon';
import UnmuteIcon from 'components/uis/Icon/UnmuteIcon';

import StyledIconButton from './StyledIconButton';

interface Props extends IconButtonProps {
  isMute: boolean;
}

export default function MuteButton({ isMute, ...props }: Props) {
  return (
    <StyledIconButton {...props}>
      {isMute ? <MuteIcon /> : <UnmuteIcon />}
    </StyledIconButton>
  );
}

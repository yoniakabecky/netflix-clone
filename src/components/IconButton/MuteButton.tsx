import { IconButtonProps } from '@mui/material';

import MuteIcon from 'components/Icon/MuteIcon';
import UnmuteIcon from 'components/Icon/UnmuteIcon';

import StyledIconButton from './StyledIconButton';

interface Props extends IconButtonProps {
  isMute: boolean;
}

export default function MuteButton({ isMute, ...props }: Props) {
  return (
    <StyledIconButton color={'secondary'} {...props}>
      {isMute ? <UnmuteIcon /> : <MuteIcon />}
    </StyledIconButton>
  );
}

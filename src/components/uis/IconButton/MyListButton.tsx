import * as React from 'react';

import { Box, IconButtonProps, styled } from '@mui/material';

import CheckIcon from 'components/uis/Icon/CheckIcon';
import PlusIcon from 'components/uis/Icon/PlusIcon';
import { StyledTooltip } from 'components/uis/Tooltip';

import StyledIconButton from './StyledIconButton';

interface Props extends IconButtonProps {
  isOnMyList?: boolean;
}

export default function MyListButton({
  isOnMyList = false,
  onClick,
  ...props
}: Props) {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick && onClick(e);
    setClicked(true);
  };
  const resetClicked = () => setClicked(false);

  return (
    <StyledTooltip
      title={isOnMyList ? 'Remove from My List' : 'Add to My List'}
    >
      <Box>
        <StyledIconButton
          onClick={handleClick}
          onAnimationEnd={resetClicked}
          sx={{ position: 'relative' }}
          {...props}
        >
          <Check sx={{ opacity: isOnMyList ? 1 : 0 }} />
          <Plus
            sx={{
              opacity: isOnMyList ? 0 : 1,
              transform: clicked ? `rotate(${isOnMyList ? 90 : 0}deg)` : '',
            }}
          />
        </StyledIconButton>
      </Box>
    </StyledTooltip>
  );
}

const Check = styled(CheckIcon)(() => ({
  position: 'absolute',
  transition: 'opacity 300ms linear',
  fontSize: 20,
}));

const Plus = styled(PlusIcon)(() => ({
  position: 'absolute',
  transition: 'all 300ms linear',
}));

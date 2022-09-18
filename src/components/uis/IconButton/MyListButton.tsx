import * as React from 'react';

import { Box, IconButtonProps, styled } from '@mui/material';

import CheckIcon from 'components/uis/Icon/CheckIcon';
import PlusIcon from 'components/uis/Icon/PlusIcon';
import { StyledTooltip } from 'components/uis/Tooltip';

import StyledIconButton from './StyledIconButton';

interface Props extends IconButtonProps {
  added?: boolean;
}

export default function MyListButton({
  added = false,
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
    <StyledTooltip title={added ? 'Remove from My List' : 'Add to My List'}>
      <Box>
        <StyledIconButton
          onClick={handleClick}
          onAnimationEnd={resetClicked}
          sx={{ position: 'relative' }}
          {...props}
        >
          <Check sx={{ opacity: added ? 1 : 0 }} />
          <Plus
            sx={{
              opacity: added ? 0 : 1,
              transform: clicked ? `rotate(${added ? 90 : 0}deg)` : '',
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

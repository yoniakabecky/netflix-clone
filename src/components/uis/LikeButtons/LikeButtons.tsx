import { useState } from 'react';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import ThumbsUpIcon from '../Icon/ThumbsUpIcon';
import TwoThumbsUpIcon from '../Icon/TwoThumbsUpIcon';
import StyledIconButton from '../IconButton/StyledIconButton';
import { StyledTooltip } from '../Tooltip';

interface Props extends IconButtonProps {
  handleDislike: () => void;
  handleLike: () => void;
  handleLove: () => void;
}

export default function LikeButtons(props: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClickAway = () => setOpen(false);

  return !open ? (
    <StyledIconButton
      onClick={handleOpen}
      // onMouseEnter={handleOpen}
      // onMouseLeave={handleClickAway}
      {...props}
    >
      <ThumbsUpIcon />
    </StyledIconButton>
  ) : (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Stack
        display={'inline-flex'}
        direction={'row'}
        spacing={1.5}
        bgcolor={'background.default'}
        borderRadius={6}
        py={1}
        px={2}
        width={'7rem'}
      >
        <StyledTooltip title={'Not for me'}>
          <IconButton sx={{ p: 0.25 }} onClick={props.handleDislike}>
            <ThumbsUpIcon sx={{ transform: 'rotate(180deg)' }} />
          </IconButton>
        </StyledTooltip>

        <StyledTooltip title={'I like this'}>
          <IconButton sx={{ p: 0.25 }} onClick={props.handleLike}>
            <ThumbsUpIcon />
          </IconButton>
        </StyledTooltip>

        <StyledTooltip title={'Love this!'}>
          <IconButton sx={{ p: 0.25 }} onClick={props.handleLove}>
            <TwoThumbsUpIcon />
          </IconButton>
        </StyledTooltip>
      </Stack>
    </ClickAwayListener>
  );
}

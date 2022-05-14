import { useState } from 'react';

import Box from '@mui/material/Box';
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

  return (
    <Box position={'relative'}>
      <StyledIconButton
        onClick={handleOpen}
        onMouseEnter={handleOpen}
        {...props}
      >
        <ThumbsUpIcon />
      </StyledIconButton>

      {open && (
        <Box
          position={'absolute'}
          top={0}
          left={'-3rem'}
          onMouseLeave={handleClickAway}
        >
          <ClickAwayListener onClickAway={handleClickAway}>
            <Stack
              display={'inline-flex'}
              direction={'row'}
              spacing={1.5}
              bgcolor={'background.default'}
              borderRadius={6}
              py={0.5}
              px={1}
              width={'7rem'}
            >
              <StyledTooltip title={'Not for me'}>
                <Box>
                  <IconButton sx={{ p: 0.25 }} onClick={props.handleDislike}>
                    <ThumbsUpIcon sx={{ transform: 'rotate(180deg)' }} />
                  </IconButton>
                </Box>
              </StyledTooltip>

              <StyledTooltip title={'I like this'}>
                <Box>
                  <IconButton sx={{ p: 0.25 }} onClick={props.handleLike}>
                    <ThumbsUpIcon />
                  </IconButton>
                </Box>
              </StyledTooltip>

              <StyledTooltip title={'Love this!'}>
                <Box>
                  <IconButton sx={{ p: 0.25 }} onClick={props.handleLove}>
                    <TwoThumbsUpIcon />
                  </IconButton>
                </Box>
              </StyledTooltip>
            </Stack>
          </ClickAwayListener>
        </Box>
      )}
    </Box>
  );
}

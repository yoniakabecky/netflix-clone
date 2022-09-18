import { useState } from 'react';

import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import ThumbsUpFilledIcon from '../Icon/ThumbsUpFilledIcon';
import ThumbsUpIcon from '../Icon/ThumbsUpIcon';
import TwoThumbsUpFilledIcon from '../Icon/TwoThumbsUpFilledIcon';
import TwoThumbsUpIcon from '../Icon/TwoThumbsUpIcon';
import StyledIconButton from '../IconButton/StyledIconButton';
import { StyledTooltip } from '../Tooltip';

export type LikeType = 'like' | 'dislike' | 'love';
export type UserRate = LikeType | null;

const title = {
  rated: 'Rated',
  dislike: 'Not for me',
  like: 'I like this',
  love: 'Love this!',
};

const MainIcon = ({ rating }: { rating: UserRate }) => {
  switch (rating) {
    case 'like':
      return <ThumbsUpFilledIcon />;

    case 'dislike':
      return <ThumbsUpFilledIcon sx={{ transform: 'rotate(180deg)' }} />;

    case 'love':
      return <TwoThumbsUpFilledIcon />;

    default:
      return <ThumbsUpIcon />;
  }
};

const LikeIcon = ({ rating }: { rating: UserRate }) =>
  rating === 'like' ? <ThumbsUpFilledIcon /> : <ThumbsUpIcon />;

const DislikeIcon = ({ rating }: { rating: UserRate }) =>
  rating === 'dislike' ? (
    <ThumbsUpFilledIcon sx={{ transform: 'rotate(180deg)' }} />
  ) : (
    <ThumbsUpIcon sx={{ transform: 'rotate(180deg)' }} />
  );

const LoveIcon = ({ rating }: { rating: UserRate }) =>
  rating === 'love' ? <TwoThumbsUpFilledIcon /> : <TwoThumbsUpIcon />;

interface Props extends IconButtonProps {
  rating: UserRate;
  handleLikes: (_: LikeType) => void;
}

export default function LikeButtons({ rating, handleLikes, ...props }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClickAway = () => setOpen(false);

  const handleDislike = () => handleLikes('dislike');
  const handleLike = () => handleLikes('like');
  const handleLove = () => handleLikes('love');

  return (
    <Box position={'relative'}>
      <StyledIconButton
        onClick={handleOpen}
        onMouseEnter={handleOpen}
        {...props}
      >
        <MainIcon rating={rating} />
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
              spacing={1}
              bgcolor={'background.default'}
              borderRadius={6}
              py={0.5}
              px={1}
              width={'7.4rem'}
            >
              <StyledTooltip
                title={rating === 'dislike' ? title.rated : title.dislike}
              >
                <Box>
                  <IconButton sx={{ p: 0.25 }} onClick={handleDislike}>
                    <DislikeIcon rating={rating} />
                  </IconButton>
                </Box>
              </StyledTooltip>

              <StyledTooltip
                title={rating === 'like' ? title.rated : title.like}
              >
                <Box>
                  <IconButton sx={{ p: 0.25 }} onClick={handleLike}>
                    <LikeIcon rating={rating} />
                  </IconButton>
                </Box>
              </StyledTooltip>

              <StyledTooltip
                title={rating === 'love' ? title.rated : title.love}
              >
                <Box>
                  <IconButton sx={{ p: 0.25 }} onClick={handleLove}>
                    <LoveIcon rating={rating} />
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

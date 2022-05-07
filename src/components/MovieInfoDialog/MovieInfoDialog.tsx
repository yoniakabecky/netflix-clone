import Box from '@mui/material/Box';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Image from 'next/image';

import { PlayButton } from 'components/uis/Button';
import PlusIcon from 'components/uis/Icon/PlusIcon';
import {
  CloseButton,
  MuteButton,
  StyledIconButton,
} from 'components/uis/IconButton';
import LikeButtons from 'components/uis/LikeButtons';
import { StyledTooltip } from 'components/uis/Tooltip';

interface Props extends DialogProps {
  open: boolean;
  onClose: () => void;
  movie?: any;
}

export default function MovieInfoDialog({ open, onClose, ...props }: Props) {
  // TODO: handle likes
  const handleDislike = () => {};
  const handleLike = () => {};
  const handleLove = () => {};

  return (
    <Dialog maxWidth={'md'} fullWidth open={open} onClose={onClose} {...props}>
      <CloseButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          zIndex: 'modal',
        }}
      />

      <Box position={'relative'} width={'100%'} height={500} mx={'auto'}>
        <Box
          position={'absolute'}
          top={0}
          right={0}
          bottom={0}
          left={0}
          bgcolor={
            'linear-gradient(180deg, rgba(0, 0, 0, 0) 53.65%, rgba(0, 0, 0, 0.4) 74.48%, rgba(0, 0, 0, 0.8) 100%);'
          }
        >
          <Image src={'/Netflix_Logo.svg'} alt={''} width={900} height={500} />
        </Box>
        <Box
          position={'absolute'}
          bottom={'4rem'}
          display={'flex'}
          height={'2rem'}
          width={'100%'}
          px={5}
        >
          <Stack direction={'row'} spacing={1} flexGrow={1}>
            <PlayButton />

            <StyledTooltip title="Add to My List">
              <Box>
                <StyledIconButton>
                  <PlusIcon />
                </StyledIconButton>
              </Box>
            </StyledTooltip>

            <LikeButtons
              handleDislike={handleDislike}
              handleLike={handleLike}
              handleLove={handleLove}
            />
          </Stack>

          <MuteButton sx={{ flexGrow: 0 }} isMute={false} />
        </Box>
      </Box>

      {/* movie overview */}
      <div>overview</div>

      {/* more like this */}
      <div>list</div>

      {/* more movie details */}
      <div>details</div>
    </Dialog>
  );
}

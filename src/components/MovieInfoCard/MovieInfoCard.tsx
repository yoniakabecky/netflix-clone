import Box from '@mui/material/Box';
import Card, { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';

import CheckIcon from 'components/uis/Icon/CheckIcon';
import ChevronDownIcon from 'components/uis/Icon/ChevronDownIcon';
import { PlayIconButton, StyledIconButton } from 'components/uis/IconButton';
import LikeButtons from 'components/uis/LikeButtons';
import { StyledTooltip } from 'components/uis/Tooltip';

// TODO: use fetched data type
type Movie = {
  alt: string;
  src: string;
  title: string;
};

interface Props extends CardProps {
  movie: Movie;
}

export default function MovieInfoCard(props: Props) {
  // TODO: handle likes
  const handleDislike = () => {};
  const handleLike = () => {};
  const handleLove = () => {};

  return (
    <Card sx={{ maxWidth: 420 }}>
      <CardMedia
        component={'img'}
        height={245}
        image={props.movie.src}
        alt={props.movie.alt}
      />

      <CardContent>
        <Box display={'flex'}>
          <Stack direction={'row'} spacing={1} flexGrow={1}>
            <PlayIconButton />

            <StyledTooltip title="Add to My List">
              <Box>
                <StyledIconButton>
                  <CheckIcon />
                </StyledIconButton>
              </Box>
            </StyledTooltip>

            <LikeButtons
              handleDislike={handleDislike}
              handleLike={handleLike}
              handleLove={handleLove}
            />
          </Stack>

          <StyledTooltip title={'Episodes & info'}>
            <Box>
              <StyledIconButton sx={{ flexGrow: 0 }}>
                <ChevronDownIcon />
              </StyledIconButton>
            </Box>
          </StyledTooltip>
        </Box>
      </CardContent>
    </Card>
  );
}

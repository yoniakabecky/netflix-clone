import Box from '@mui/material/Box';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography, { TypographyProps } from '@mui/material/Typography';

import PopperThumbnail from 'components/PopperThumbnail';
import { PlayButton } from 'components/uis/Button';
import PlusIcon from 'components/uis/Icon/PlusIcon';
import {
  CloseButton,
  MuteButton,
  StyledIconButton,
} from 'components/uis/IconButton';
import LikeButtons from 'components/uis/LikeButtons';
import MainImage from 'components/uis/MainImage';
import { StyledTooltip } from 'components/uis/Tooltip';
import { MovieModel } from 'models';
import { CreditModel } from 'models/CreditModel';
import { creditsDummy, similarDummy } from 'tmdb/dummy';
import { Movie } from 'tmdb/types';

interface Props extends DialogProps {
  open: boolean;
  onClose: () => void;
  movie: MovieModel;
}

export default function MovieInfoDialog({
  open,
  onClose,
  movie,
  ...props
}: Props) {
  // TODO: handle likes
  const handleDislike = () => {};
  const handleLike = () => {};
  const handleLove = () => {};

  // TODO: fetch additional data
  const credits = new CreditModel(creditsDummy);

  // TODO: fetch similar movies
  const similar = similarDummy.results.map(
    (movie) => new MovieModel(movie as Movie, null)
  );

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

      <MainImage
        title={movie.title}
        backdropPath={movie.backdropPath}
        minHeight={500}
      >
        <Box
          position={'absolute'}
          bottom={'6rem'}
          width={'100%'}
          px={'5%'}
          zIndex={'modal'}
        >
          <Typography
            variant={'h5'}
            sx={{ mb: 2, fontWeight: 'bold', width: '40%' }}
          >
            {movie.title}
          </Typography>

          <Box display={'flex'} height={'2rem'}>
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
      </MainImage>

      {/* movie overview */}
      <Stack direction={'row'} spacing={2} width={'100%'} px={'5%'} mb={6}>
        <Box width={'70%'}>
          <Stack direction={'row'} spacing={2}>
            <Typography variant={'body1'}>{movie.releaseYear}</Typography>
            <Typography
              variant={'body2'}
              sx={{ px: 0.5, border: '0.4px solid white' }}
            >
              {movie.usRating}
            </Typography>
            <Typography variant={'body1'}>{movie.formatRuntime}</Typography>
          </Stack>
          <Typography sx={{ mt: 2 }}>{movie.overview}</Typography>
        </Box>

        <Stack spacing={1} width={'30%'}>
          <Box>
            <IndexTypography>Cast:</IndexTypography>
            <Typography component={'span'} variant={'body2'}>
              {credits.mainCastNames.join(', ')}
            </Typography>
          </Box>

          <Box>
            <IndexTypography>Genres:</IndexTypography>
            <Typography component={'span'} variant={'body2'}>
              {movie.genreNames.join(', ')}
            </Typography>
          </Box>
        </Stack>
      </Stack>

      {/* more like this */}
      <Box width={'100%'} px={'5%'} mb={6}>
        <Typography variant={'h6'} sx={{ mb: 3 }}>
          More Like This
        </Typography>

        <Grid container rowSpacing={7} sx={{ mx: 'auto', mb: 4 }}>
          {similar.map((movie: any) => (
            <Grid item key={movie.id} xs={4}>
              <PopperThumbnail movie={movie} sx={{ textAlign: 'center' }} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* more movie details */}
      <Box width={'100%'} px={'5%'} mb={6}>
        <Typography variant={'h6'} sx={{ mb: 3 }}>
          About <b>{movie.title}</b>
        </Typography>

        <Box>
          <IndexTypography>Director:</IndexTypography>
          <Typography component={'span'} variant={'body2'}>
            {credits.directorName}
          </Typography>
        </Box>

        <Box>
          <IndexTypography>Cast:</IndexTypography>
          <Typography component={'span'} variant={'body2'}>
            {credits.castNames.join(', ')}
          </Typography>
        </Box>

        <Box>
          <IndexTypography>Writer:</IndexTypography>
          <Typography component={'span'} variant={'body2'}>
            {credits.writerName}
          </Typography>
        </Box>

        <Box>
          <IndexTypography>Genre:</IndexTypography>
          <Typography component={'span'} variant={'body2'}>
            {movie.genreNames.join(', ')}
          </Typography>
        </Box>

        <Box>
          <IndexTypography>Maturity Rating:</IndexTypography>
          <Typography component={'span'} variant={'body2'}>
            {movie.usRating}
          </Typography>
        </Box>
      </Box>
    </Dialog>
  );
}

const IndexTypography = (props: TypographyProps) => (
  <Typography
    component={'span'}
    variant={'subtitle2'}
    color={'textSecondary'}
    sx={{ mr: 1 }}
    {...props}
  />
);

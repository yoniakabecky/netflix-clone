import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography, { TypographyProps } from '@mui/material/Typography';
import useSWR from 'swr';

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
import * as URL from 'constants/urls';
import {
  parseCreditResponse,
  parseDetailsResponse,
  parseMovieListResult,
} from 'models';
import { useDialogState } from 'recoils/dialog';
import type { Credit, Details, MovieList } from 'tmdb/types';

interface Props extends DialogProps {
  loading?: boolean;
}

export default function MovieInfoDialog({ loading, ...props }: Props) {
  const { handleClose, movie } = useDialogState();

  // TODO: handle likes
  const handleDislike = () => null;
  const handleLike = () => null;
  const handleLove = () => null;

  const movieId = movie?.movieId ?? null;
  const { data: detailsData } = useSWR<Details, unknown>(
    movieId ? URL.MOVIE_DETAILS(movieId) : null
  );
  const { data: creditsData } = useSWR<Credit, unknown>(
    movieId ? URL.MOVIE_CREDIT(movieId) : null
  );
  const { data: similarData } = useSWR<MovieList, unknown>(
    movieId ? URL.SIMILAR_MOVIES(movieId) : null
  );

  const details = useMemo(
    () => (detailsData ? parseDetailsResponse(detailsData) : undefined),
    [detailsData]
  );
  const credits = useMemo(
    () => (creditsData ? parseCreditResponse(creditsData) : undefined),
    [creditsData]
  );
  const similar = useMemo(
    () =>
      similarData
        ? similarData.results.map((movie) => parseMovieListResult(movie))
        : undefined,
    [similarData]
  );

  if (!movie) return <div />;

  return (
    <Dialog maxWidth={'md'} fullWidth onClose={handleClose} {...props}>
      <CloseButton
        aria-label="close"
        onClick={handleClose}
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
      {loading || !(details && credits) ? (
        <OverviewSkelton />
      ) : (
        <Stack direction={'row'} spacing={2} width={'100%'} px={'5%'} mb={6}>
          <Box width={'70%'}>
            <Stack direction={'row'} spacing={2}>
              <Typography variant={'body1'}>{details.releaseYear}</Typography>
              <Typography
                variant={'body2'}
                sx={{ px: 0.5, border: '0.4px solid white' }}
              >
                {movie.usRating}
              </Typography>
              <Typography variant={'body1'}>{details.runtime}</Typography>
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
                {details.genres.join(', ')}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      )}

      {/* more like this */}
      {loading || !similar ? (
        <SimilarListSkelton />
      ) : (
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
      )}

      {/* more movie details */}
      {loading || !(details && credits) ? (
        <DetailsSkelton />
      ) : (
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
              {details.genres.join(', ')}
            </Typography>
          </Box>

          <Box>
            <IndexTypography>Maturity Rating:</IndexTypography>
            <Typography component={'span'} variant={'body2'}>
              {movie.usRating}
            </Typography>
          </Box>
        </Box>
      )}
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

const OverviewSkelton = () => (
  <Stack direction={'row'} spacing={2} width={'100%'} px={'5%'} mb={6}>
    <Box width={'70%'}>
      <Skeleton sx={{ mb: 1, width: '40%' }} />
      <Skeleton />
      <Skeleton />
      <Skeleton sx={{ width: '60%' }} />
    </Box>

    <Stack spacing={1} width={'30%'}>
      <Skeleton />
      <Skeleton />
    </Stack>
  </Stack>
);

const SimilarListSkelton = () => (
  <Box width={'100%'} px={'5%'} mb={6}>
    <Skeleton sx={{ fontSize: '1.5rem', width: 200 }} />

    <Grid container columnSpacing={4}>
      {Array.from(new Array(5)).map((_, index) => (
        <Grid item key={index} xs={4}>
          <Skeleton height={100} width={220} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

const DetailsSkelton = () => (
  <Box width={'40%'} px={'5%'} mb={6}>
    <Skeleton sx={{ mb: 1, width: '40%' }} />
    <Skeleton />
    <Skeleton />
    <Skeleton sx={{ width: '60%' }} />
  </Box>
);

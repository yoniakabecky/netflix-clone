import { useEffect, useMemo, useRef } from 'react';

import Box from '@mui/material/Box';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useSWR from 'swr';

import PopperThumbnail from 'components/PopperThumbnail';
import { PlayButton } from 'components/uis/Button';
import {
  CloseButton,
  MuteButton,
  MyListButton,
} from 'components/uis/IconButton';
import LikeButtons from 'components/uis/LikeButtons';
import MainImage from 'components/uis/MainImage';
import * as URL from 'constants/urls';
import useLikeButtons from 'hooks/useLikeButtons';
import useMyList from 'hooks/useMyList';
import {
  FeaturedMovieModel,
  MovieListItemModel,
  listItemToFeatured,
  parseCreditResponse,
  parseDetailsResponse,
  parseMovieListResult,
} from 'models';
import { useDialogState, useMuteState } from 'recoils';
import type { Credit, Details, MovieList, ReleaseDates } from 'tmdb/types';

interface Props extends DialogProps {
  loading?: boolean;
}

export default function MovieInfoDialog({ loading, ...props }: Props) {
  const { handleClose, movie: movieState, type } = useDialogState();
  const [isMute, toggleMute] = useMuteState();
  const ref = useRef<HTMLDivElement | null>(null);

  const movieId = movieState?.movieId ?? null;
  const hasRating = movieState && 'usRating' in movieState;
  const { data: detailsData } = useSWR<Details, unknown>(
    movieId ? URL.MOVIE_DETAILS(movieId) : null
  );
  const { data: creditsData } = useSWR<Credit, unknown>(
    movieId ? URL.MOVIE_CREDIT(movieId) : null
  );
  const { data: similarData } = useSWR<MovieList, unknown>(
    movieId ? URL.SIMILAR_MOVIES(movieId) : null
  );
  const { data: releaseDate } = useSWR<ReleaseDates, unknown>(() =>
    !hasRating && movieId ? URL.RELEASE_DATES(movieId) : null
  );

  const movie = useMemo(() => {
    if (hasRating) return movieState as FeaturedMovieModel;
    return listItemToFeatured(movieState as MovieListItemModel, releaseDate);
  }, [hasRating, movieState, releaseDate]);

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

  const [isOnMyList, toggleList] = useMyList(movieId);
  const [userRating, handleLikes] = useLikeButtons(movieId);

  useEffect(() => {
    if (!ref || !ref.current) return;
    ref.current.scrollTop = 0;
  }, [movie]);

  if (!movie || type !== 'info') return <div />;

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

      <DialogContent ref={ref} sx={{ p: 0 }}>
        <MainImage
          title={movie.title}
          backdropPath={movie.backdropPath}
          height={500}
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

                <MyListButton isOnMyList={isOnMyList} onClick={toggleList} />

                <LikeButtons rating={userRating} handleLikes={handleLikes} />
              </Stack>

              <MuteButton
                sx={{ flexGrow: 0 }}
                isMute={isMute}
                onClick={toggleMute}
              />
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
              <Detail
                index={'Cast:'}
                detail={credits.mainCastNames.join(', ')}
              />

              <Detail index={'Genres:'} detail={details.genres.join(', ')} />
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

            <Detail index={'Director:'} detail={credits.directorName} />

            <Detail index={'Cast:'} detail={credits.castNames.join(', ')} />

            <Detail index={'Writer:'} detail={credits.writerName} />

            <Detail index={'Genre:'} detail={details.genres.join(', ')} />

            <Detail index={'Maturity Rating:'} detail={movie.usRating ?? '-'} />
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}

const Detail = ({ index, detail }: { index: string; detail: string }) => (
  <Box>
    <Typography
      component={'span'}
      variant={'subtitle2'}
      color={'textSecondary'}
      sx={{ mr: 1 }}
    >
      {index}
    </Typography>
    <Typography component={'span'} variant={'body2'}>
      {detail}
    </Typography>
  </Box>
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

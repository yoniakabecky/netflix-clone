import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Card, { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import useSWR from 'swr';

import ChevronDownIcon from 'components/uis/Icon/ChevronDownIcon';
import {
  MyListButton,
  PlayIconButton,
  StyledIconButton,
} from 'components/uis/IconButton';
import LikeButtons from 'components/uis/LikeButtons';
import { StyledTooltip } from 'components/uis/Tooltip';
import * as URL from 'constants/urls';
import useLikeButtons from 'hooks/useLikeButtons';
import useMyList from 'hooks/useMyList';
import { MovieListItemModel, parseDetailsResponse } from 'models';
import { useDialogState, usePopperState } from 'recoils';
import type { Details } from 'tmdb/types';
import { smallImgLoader } from 'utils/imgLoader';

interface Props extends CardProps {
  movie: MovieListItemModel;
  anchorEl?: null | Element;
}

export default function MovieInfoCard({ movie, ...props }: Props) {
  const movieId = movie?.movieId ?? null;
  const { data: detailsData } = useSWR<Details, unknown>(
    movieId ? URL.MOVIE_DETAILS(movieId) : null
  );
  const details = useMemo(
    () => (detailsData ? parseDetailsResponse(detailsData) : undefined),
    [detailsData]
  );

  const { setMovie } = useDialogState();
  const { close } = usePopperState();
  const [isOnMyList, toggleList] = useMyList(movieId);
  const [userRating, handleLikes] = useLikeButtons(movieId);

  const openInfoDialog = () => {
    close();
    setMovie(movie);
  };

  return (
    <Card sx={{ width: '22vw', minWidth: 352 }} {...props}>
      {movie.backdropPath && (
        <Box
          position={'relative'}
          width={'100%'}
          height={'12.375vw'}
          minHeight={198}
        >
          <Image
            loader={smallImgLoader}
            src={movie.backdropPath}
            alt={movie.title}
            layout={'fill'}
            objectFit={'cover'}
          />
        </Box>
      )}

      <CardContent>
        <Box display={'flex'}>
          <Stack direction={'row'} spacing={1} flexGrow={1}>
            <PlayIconButton />

            <MyListButton isOnMyList={isOnMyList} onClick={toggleList} />

            <LikeButtons rating={userRating} handleLikes={handleLikes} />
          </Stack>

          <StyledTooltip title={'Episodes & info'}>
            <Box>
              <StyledIconButton sx={{ flexGrow: 0 }} onClick={openInfoDialog}>
                <ChevronDownIcon />
              </StyledIconButton>
            </Box>
          </StyledTooltip>
        </Box>

        <Box mt={2}>
          <Typography variant={'subtitle1'} component={'span'}>
            {movie.title}
          </Typography>

          {details && (
            <Typography
              variant={'caption'}
              color={'textSecondary'}
              sx={{ ml: 1 }}
            >
              {details.runtime}
            </Typography>
          )}
        </Box>

        {details && (
          <Box display={'flex'} mt={1}>
            {details.genres.map((genre, i) => (
              <Box key={i}>
                <Typography variant={'caption'} color={'textSecondary'}>
                  {genre}
                </Typography>
                {details.genres.length - 1 !== i && (
                  <Typography
                    variant={'caption'}
                    color={'textSecondary'}
                    sx={{ mx: 1 }}
                  >
                    /
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

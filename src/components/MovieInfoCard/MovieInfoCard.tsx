import Box from '@mui/material/Box';
import Card, { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import CheckIcon from 'components/uis/Icon/CheckIcon';
import ChevronDownIcon from 'components/uis/Icon/ChevronDownIcon';
import { PlayIconButton, StyledIconButton } from 'components/uis/IconButton';
import LikeButtons from 'components/uis/LikeButtons';
import { StyledTooltip } from 'components/uis/Tooltip';
import { MovieListModel, MovieModel } from 'models';
import { smallImgLoader } from 'utils/imgLoader';

interface Props extends CardProps {
  movie: MovieModel | MovieListModel;
  anchorEl?: null | Element;
}

export default function MovieInfoCard({ movie, ...props }: Props) {
  // TODO: handle likes
  const handleDislike = () => null;
  const handleLike = () => null;
  const handleLove = () => null;

  //TODO: fetch movie details
  const details = new MovieModel(null, null);

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
              {details.formatRuntime}
            </Typography>
          )}
        </Box>

        {details && (
          <Box display={'flex'} mt={1}>
            {details.genres.map((genre, i) => (
              <Box key={i}>
                <Typography variant={'caption'} color={'textSecondary'}>
                  {genre.name}
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

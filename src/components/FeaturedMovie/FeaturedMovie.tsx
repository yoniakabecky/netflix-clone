import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { MoreInfoButton, PlayButton } from 'components/uis/Button';
import { MuteButton } from 'components/uis/IconButton';
import MainImage from 'components/uis/MainImage';
import { RatingTag } from 'components/uis/Tag';
import type { FeaturedMovieModel } from 'models';
import { useDialogState, useMuteState, usePlaySnackbarState } from 'recoils';

type Props = {
  movie: FeaturedMovieModel;
};

export default function FeaturedMovie({ movie }: Props) {
  const { setMovie } = useDialogState();
  const [isMute, toggleMute] = useMuteState();
  const { openSnackbar } = usePlaySnackbarState();

  const onClick = () => setMovie(movie);

  return (
    <>
      <Box component={'section'}>
        <MainImage backdropPath={movie.backdropPath} title={movie.title}>
          <Box
            position={'absolute'}
            bottom={'20vh'}
            width={'95%'}
            ml={'5%'}
            zIndex={'modal'}
          >
            <Box
              mb={4}
              width={'40%'}
              sx={{
                color: 'common.white',
                textShadow: '0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25)',
              }}
            >
              <Typography variant={'h3'} sx={{ mb: 2, fontWeight: 'bold' }}>
                {movie.title}
              </Typography>
              <Typography sx={{ fontWeight: '1.2vw' }}>
                {movie.overview}
              </Typography>
            </Box>

            <Box display={'flex'}>
              <Stack direction={'row'} spacing={2} flexGrow={1}>
                <PlayButton onClick={openSnackbar} />

                <MoreInfoButton onClick={onClick} />
              </Stack>

              <Stack
                direction={'row'}
                spacing={2}
                flexGrow={0}
                alignItems={'center'}
              >
                <MuteButton
                  sx={{ width: 44, height: 44 }}
                  isMute={isMute}
                  onClick={toggleMute}
                />

                {movie.usRating ? (
                  <RatingTag rating={movie.usRating} />
                ) : (
                  <Box width={'3rem'} />
                )}
              </Stack>
            </Box>
          </Box>
        </MainImage>
      </Box>
    </>
  );
}

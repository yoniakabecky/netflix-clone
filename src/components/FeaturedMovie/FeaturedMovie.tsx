import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import MovieInfoDialog from 'components/MovieInfoDialog';
import { MoreInfoButton, PlayButton } from 'components/uis/Button';
import { MuteButton } from 'components/uis/IconButton';
import { RatingTag } from 'components/uis/Tag';
import { FeaturedMovieModel } from 'models';
import { originalImgLoader } from 'utils/imgLoader';

type Props = {
  movie: FeaturedMovieModel;
};

export default function FeaturedMovie({ movie }: Props) {
  const [openInfo, setOpenInfo] = useState(false);

  const handleOpenInfo = () => setOpenInfo(true);
  const handleCloseInfo = () => setOpenInfo(false);

  return (
    <>
      <Box component={'section'}>
        <Box
          position={'relative'}
          width={'100%'}
          height={'100vh'}
          mx={'auto'}
          sx={{
            background:
              'linear-gradient(180deg, rgba(20, 20, 20, 0) 50%, rgba(20, 20, 20, 0.4) 75%, #141414 100%)',
          }}
        >
          <Box
            position={'absolute'}
            top={0}
            right={0}
            bottom={0}
            left={0}
            width={'100%'}
            height={'100%'}
            zIndex={-1}
          >
            {movie.backdropPath && (
              <Image
                loader={originalImgLoader}
                src={movie.backdropPath}
                alt={movie.title}
                layout={'fill'}
                objectFit={'cover'}
              />
            )}
          </Box>

          <Box position={'absolute'} bottom={'20vh'} width={'95%'} ml={'5%'}>
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
                <PlayButton />

                <MoreInfoButton onClick={handleOpenInfo} />
              </Stack>

              <Stack
                direction={'row'}
                spacing={2}
                flexGrow={0}
                alignItems={'center'}
              >
                <MuteButton sx={{ width: 44, height: 44 }} isMute={true} />

                {movie.usRating ? (
                  <RatingTag rating={movie.usRating} />
                ) : (
                  <Box width={'3rem'} />
                )}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>

      <MovieInfoDialog
        open={openInfo}
        onClose={handleCloseInfo}
        movie={movie}
      />
    </>
  );
}

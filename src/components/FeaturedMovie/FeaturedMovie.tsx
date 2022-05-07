import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Image from 'next/image';

import MovieInfoDialog from 'components/MovieInfoDialog';
import { MoreInfoButton, PlayButton } from 'components/uis/Button';
import { MuteButton } from 'components/uis/IconButton';
import { RatingTag } from 'components/uis/Tag';

type Movie = {
  title: string;
  description: string;
  alt: string;
  src: string;
  rating?: string;
};

type Props = {
  movie: Movie;
};

export default function FeaturedMovie({ movie }: Props) {
  const [openInfo, setOpenInfo] = useState(false);

  const handleOpenInfo = () => setOpenInfo(true);
  const handleCloseInfo = () => setOpenInfo(false);

  return (
    <>
      <Box component={'section'}>
        <Box position={'relative'} width={'100%'} height={'100vh'} mx={'auto'}>
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
            <Image src={movie.src} alt={movie.alt} layout={'fill'} />
          </Box>

          <Box
            position={'absolute'}
            bottom={'6rem'}
            display={'flex'}
            width={'95%'}
            ml={'5%'}
          >
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

              {!movie.rating || movie.rating === '' ? (
                <Box width={'3rem'} />
              ) : (
                <RatingTag rating={movie.rating} />
              )}
            </Stack>
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

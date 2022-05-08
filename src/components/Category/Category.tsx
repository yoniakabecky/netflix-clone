import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ChevronDownIcon from 'components/uis/Icon/ChevronDownIcon';
import { Thumbnail } from 'components/uis/Thumbnail';
import { MovieListResult } from 'tmdb/types';
import { smallImgLoader } from 'utils/imgLoader';

type Props = {
  title: string;
  movies: MovieListResult[];
  handleClick: () => void;
};

export default function Category({ title, movies, handleClick }: Props) {
  if (movies.length <= 0) return <Box />;

  return (
    <Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        sx={{
          mb: 1,
          mx: 'auto',
          width: '90%',
          cursor: 'pointer',
          '& .MuiTypography-body2': { opacity: 0 },
          '&:hover .MuiTypography-body2': { opacity: 1 },
        }}
        onClick={handleClick}
      >
        <Typography
          color={'secondary'}
          variant={'h6'}
          sx={{
            textTransform: 'capitalize',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant={'body2'}
          sx={{ ml: 1, color: '#54b9c5', transition: 'opacity 1s' }}
        >
          Explore All
          <ChevronDownIcon
            sx={{ transform: 'rotate(-90deg)', fontSize: '0.9rem' }}
          />
        </Typography>
      </Box>

      <Stack direction={'row'} spacing={2} overflow={'auto'} px={'5%'}>
        {movies.map(
          (movie, i) =>
            movie.backdrop_path && (
              <Thumbnail
                imgProps={{
                  src: movie.backdrop_path,
                  alt: movie.title,
                  loader: smallImgLoader,
                }}
                key={i}
              />
            )
        )}
      </Stack>
    </Box>
  );
}

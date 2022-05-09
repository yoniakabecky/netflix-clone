import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ChevronDownIcon from 'components/uis/Icon/ChevronDownIcon';
import { Thumbnail } from 'components/uis/Thumbnail';
import { CategoryModel } from 'models';
import { smallImgLoader } from 'utils/imgLoader';

type Props = {
  category: CategoryModel;
};

export default function Category({ category }: Props) {
  const { name, results } = category;

  if (results.length <= 0) return <Box />;

  const handleClick = () => null;

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
          variant={'h5'}
          sx={{
            textTransform: 'capitalize',
            fontWeight: 'bold',
          }}
        >
          {name}
        </Typography>
        <Typography
          variant={'body2'}
          sx={{ ml: 2, color: '#54b9c5', transition: 'opacity 1s' }}
        >
          Explore All
          <ChevronDownIcon
            sx={{ transform: 'rotate(-90deg)', fontSize: '0.9rem' }}
          />
        </Typography>
      </Box>

      <Stack direction={'row'} spacing={2} overflow={'auto'} px={'5%'}>
        {results.map(
          (movie, i) =>
            movie.backdropPath && (
              <Thumbnail
                imgProps={{
                  src: movie.backdropPath,
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

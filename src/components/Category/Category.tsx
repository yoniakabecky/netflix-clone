import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import PopperThumbnail from 'components/PopperThumbnail';
import ChevronDownIcon from 'components/uis/Icon/ChevronDownIcon';
import { CategoryModel } from 'models';

type Props = {
  category: CategoryModel;
  loading?: boolean;
};

export default function Category({ category, loading = false }: Props) {
  const { name, results } = category;

  if (results.length <= 0) return <Box />;

  const handleClick = () => null;

  return (
    <Box>
      <Box mb={1} mx={'auto'} width={'90%'}>
        {loading ? (
          <Typography variant={'h5'}>
            <Skeleton width={240} />
          </Typography>
        ) : (
          <Box
            display={'flex'}
            alignItems={'center'}
            sx={{
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
        )}
      </Box>

      <Stack direction={'row'} spacing={2} overflow={'auto'} px={'5%'}>
        {loading
          ? Array.from(new Array(5)).map((_, index) => (
              <Skeleton
                variant={'rectangular'}
                width={220}
                height={100}
                key={index}
              />
            ))
          : results.map(
              (movie) =>
                movie.backdropPath && (
                  <PopperThumbnail movie={movie} key={movie.id} />
                )
            )}
      </Stack>
    </Box>
  );
}

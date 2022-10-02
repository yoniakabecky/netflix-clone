import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export const OverviewSkelton = () => (
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

export const SimilarListSkelton = () => (
  <Box width={'100%'} px={'5%'} mb={6}>
    <Skeleton sx={{ fontSize: '1.5rem', width: 200 }} />

    <Grid container columnSpacing={4}>
      {Array.from(new Array(5)).map((_, index) => (
        <Grid item key={index} xs={4}>
          <Skeleton height={120} width={220} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export const DetailsSkelton = () => (
  <Box width={'40%'} px={'5%'} mb={6}>
    <Skeleton sx={{ mb: 1, width: '40%' }} />
    <Skeleton />
    <Skeleton />
    <Skeleton sx={{ width: '60%' }} />
  </Box>
);

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export const DefaultLoading = () => {
  return (
    <Stack direction={'row'} spacing={4} m={2}>
      {Array.from(new Array(5)).map((_, index) => (
        <Skeleton key={index} height={160} width={220} animation={'wave'} />
      ))}
    </Stack>
  );
};

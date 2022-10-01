import { useMemo } from 'react';

import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import useSWR from 'swr';

import PopperThumbnail from 'components/PopperThumbnail';
import { CloseButton } from 'components/uis/IconButton';
import { parseMovieListResult } from 'models';
import { useDialogState } from 'recoils';
import type { MovieList } from 'tmdb/types';

interface Props extends DialogProps {
  loading?: boolean;
}

export default function MovieListDialog({ loading = false, ...props }: Props) {
  const { handleClose, list: category, type } = useDialogState();
  const { data } = useSWR<MovieList, unknown>(
    category?.api ? `${category.api}&page=2` : null
  );
  const result2 = useMemo(() => {
    if (!data) return [];
    return data.results.map((movie) => parseMovieListResult(movie));
  }, [data]);

  if (!category || type !== 'list') return <div />;

  const { name, results } = category;
  const list = results.concat(result2);

  return (
    <Dialog maxWidth={'lg'} fullWidth onClose={handleClose} {...props}>
      <CloseButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          zIndex: 'zIndex.modal',
        }}
      />

      {/* title */}
      <DialogTitle
        sx={{
          fontSize: '2rem',
          textAlign: 'center',
          my: '3rem',
          textTransform: 'capitalize',
        }}
      >
        {loading ? <Skeleton width={240} sx={{ mx: 'auto' }} /> : name}
      </DialogTitle>

      {/* movie grid */}
      <Grid
        container
        columnSpacing={3}
        rowSpacing={6}
        sx={{ width: '90%', mx: 'auto', mb: 4 }}
      >
        {loading
          ? Array.from(new Array(10)).map((_, index) => (
              <Grid item key={index} sx={{ width: '20%' }}>
                <Skeleton variant={'rectangular'} height={100} key={index} />
              </Grid>
            ))
          : list.map((movie) => (
              <Grid item key={movie.movieId} sx={{ width: '20%' }}>
                <PopperThumbnail movie={movie} height={110} />
              </Grid>
            ))}
      </Grid>
    </Dialog>
  );
}

import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

import PopperThumbnail from 'components/PopperThumbnail';
import { CloseButton } from 'components/uis/IconButton';
import { CategoryModel } from 'models';

interface Props extends DialogProps {
  open: boolean;
  onClose: () => void;
  category: CategoryModel;
  loading?: boolean;
}

export default function MovieListDialog({
  open,
  onClose,
  category,
  loading = false,
  ...props
}: Props) {
  const { name, results: list } = category;

  return (
    <Dialog maxWidth={'lg'} fullWidth open={open} onClose={onClose} {...props}>
      <CloseButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          zIndex: 'zIndex.modal',
        }}
      />

      {/* title */}
      <DialogTitle sx={{ fontSize: '2rem', textAlign: 'center', my: '3rem' }}>
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
                <PopperThumbnail movie={movie} />
              </Grid>
            ))}
      </Grid>
    </Dialog>
  );
}

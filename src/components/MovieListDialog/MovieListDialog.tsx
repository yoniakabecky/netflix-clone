import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';

import PopperThumbnail from 'components/PopperThumbnail';
import { CloseButton } from 'components/uis/IconButton';
import { CategoryModel } from 'models';

interface Props extends DialogProps {
  open: boolean;
  onClose: () => void;
  category: CategoryModel;
}

export default function MovieListDialog({
  open,
  onClose,
  category,
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
        {name}
      </DialogTitle>

      {/* movie grid */}
      <Grid
        container
        rowSpacing={7}
        columnSpacing={2}
        sx={{ width: '90%', mx: 'auto', mb: 4 }}
      >
        {list.map((movie) => (
          <Grid item key={movie.id}>
            <PopperThumbnail movie={movie} sx={{ width: '20%' }} />
          </Grid>
        ))}
      </Grid>
    </Dialog>
  );
}

import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';

import { CloseButton } from 'components/uis/IconButton';
import { Thumbnail } from 'components/uis/Thumbnail';

interface Props extends DialogProps {
  open: boolean;
  onClose: () => void;
  categoryTitle: string;
  list: any[];
}

export default function MovieListDialog({
  open,
  onClose,
  categoryTitle,
  list,
  ...props
}: Props) {
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
        {categoryTitle}
      </DialogTitle>

      {/* movie grid */}
      <Grid
        container
        rowSpacing={7}
        columnSpacing={1}
        sx={{ width: '90%', mx: 'auto', mb: 4 }}
      >
        {list.map((movie, i) => (
          <Grid item key={i}>
            <Thumbnail imgProps={{ src: movie.src, alt: movie.alt }} />
          </Grid>
        ))}
      </Grid>
    </Dialog>
  );
}

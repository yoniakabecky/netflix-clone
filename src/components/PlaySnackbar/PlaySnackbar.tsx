import Alert from '@mui/material/Alert';
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar';

export default function PlaySnackbar({ onClose, ...props }: SnackbarProps) {
  return (
    <Snackbar
      autoHideDuration={5000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={onClose}
      {...props}
    >
      <Alert severity={'error'} variant={'filled'} sx={{ width: '100%' }}>
        Wanna play this?! Check the Netflix then 🤪
      </Alert>
    </Snackbar>
  );
}

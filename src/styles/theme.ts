import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#e50914' },
    secondary: { main: '#fff' },
    background: {
      default: '#141414',
      paper: '#141414',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '0.5rem 1.5rem',
          textTransform: 'none',
          fontWeight: 'bold',
        },
      },
    },
  },
});

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#e50914' },
    secondary: { main: '#fff' },
    // gray: 'rgba(136, 136, 136, 0.7)',
    background: {
      default: '#141414',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '0.5rem 1.5rem',
          textTransform: 'none',
        },
      },
    },
  },
});

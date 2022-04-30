import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props extends BoxProps {
  rating: string;
}

export default function RatingTag({ rating, sx, ...props }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        width: 120,
        backgroundColor: 'rgba(85, 85, 85, 0.8);',
        ...sx,
      }}
      {...props}
    >
      <Box
        sx={{
          height: '2.5rem',
          width: '0.25rem',
          background: '#e3e3e3',
        }}
      />
      <Typography color={'secondary'} sx={{ ml: 2, mt: 1 }}>
        {rating}
      </Typography>
    </Box>
  );
}

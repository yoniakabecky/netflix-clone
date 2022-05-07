import Button, { ButtonProps } from '@mui/material/Button';

import PlayIcon from 'components/uis/Icon/PlayIcon';

export default function PlayButton({ sx, ...props }: ButtonProps) {
  return (
    <Button
      color={'secondary'}
      variant={'contained'}
      size={'large'}
      sx={{
        '& .MuiButton-startIcon .MuiSvgIcon-root': {
          fontSize: '1.6rem',
        },
        '&:hover': {
          background: 'rgba(238, 238, 238, 0.8)',
        },
        ...sx,
      }}
      startIcon={<PlayIcon color={'inherit'} />}
      {...props}
    >
      Play
    </Button>
  );
}

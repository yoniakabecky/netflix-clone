import Button, { ButtonProps } from '@mui/material/Button';

import PlayIcon from 'components/Icon/PlayIcon';

export default function PlayButton(props: ButtonProps) {
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
          background: 'rgba(0, 0, 0, 0.08)',
        },
      }}
      startIcon={<PlayIcon color={'inherit'} />}
      {...props}
    >
      Play
    </Button>
  );
}

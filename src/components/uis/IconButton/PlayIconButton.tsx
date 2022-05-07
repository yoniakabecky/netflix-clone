import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import PlayIcon from 'components/uis/Icon/PlayIcon';

export default function PlayIconButton({ sx, ...props }: IconButtonProps) {
  return (
    <IconButton
      sx={{
        color: 'common.black',
        backgroundColor: 'common.white',
        width: '2rem',
        height: '2rem',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        },
        ...sx,
      }}
      {...props}
    >
      <PlayIcon />
    </IconButton>
  );
}

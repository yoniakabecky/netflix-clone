import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import CrossIcon from 'components/uis/Icon/CrossIcon';

export default function CloseButton({ sx, ...props }: IconButtonProps) {
  return (
    <IconButton
      color={'secondary'}
      sx={{
        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        ...sx,
      }}
      {...props}
    >
      <CrossIcon fontSize={'small'} />
    </IconButton>
  );
}

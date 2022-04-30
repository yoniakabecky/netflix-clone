import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import CrossIcon from 'components/Icon/CrossIcon';

export default function CloseButton({ sx, ...props }: IconButtonProps) {
  return (
    <IconButton
      color={'secondary'}
      sx={{
        backgroundColor: 'background.default',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        ...sx,
      }}
      {...props}
    >
      <CrossIcon fontSize={'small'} />
    </IconButton>
  );
}

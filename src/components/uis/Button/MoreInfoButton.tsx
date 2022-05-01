import Button, { ButtonProps } from '@mui/material/Button';

import InfoIcon from 'components/uis/Icon/InfoIcon';

export default function MoreInfoButton(props: ButtonProps) {
  return (
    <Button
      color={'secondary'}
      variant={'text'}
      size={'large'}
      sx={{
        background: 'rgba(136, 136, 136, 0.7)',
        '& .MuiButton-startIcon .MuiSvgIcon-root': {
          fontSize: '1.6rem',
        },
        '&:hover': {
          background: 'rgba(0, 0, 0, 0.08)',
        },
      }}
      startIcon={<InfoIcon color={'inherit'} />}
      {...props}
    >
      More Info
    </Button>
  );
}

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

export default function StyledIconButton(props: IconButtonProps) {
  return <Root {...props} />;
}

const Root = styled(IconButton)(({ theme }) => ({
  border: '2px solid',
  borderColor: '#999',
  '&:hover': {
    borderColor: theme.palette.secondary.main,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

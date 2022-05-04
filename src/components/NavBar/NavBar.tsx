import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';

import BellIcon from 'components/uis/Icon/BellIcon';
import SearchIcon from 'components/uis/Icon/SearchIcon';

export default function NavBar() {
  return (
    <AppBar
      elevation={0}
      position={'static'}
      sx={{
        background:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)',
      }}
    >
      <Container maxWidth={'xl'}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Box position={'relative'} width={'2rem'} height={'2rem'} mr={2}>
              <Image src={'/Netflix_Symbol.svg'} alt={'logo'} layout={'fill'} />
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Box position={'relative'} width={'6rem'} mr={2}>
              <Image src={'/Netflix_Logo.svg'} alt={'logo'} layout={'fill'} />
            </Box>

            <Button color={'secondary'} sx={{ fontWeight: 'normal' }}>
              Home
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton>
              <SearchIcon fontSize={'small'} />
            </IconButton>

            <Button color={'secondary'} sx={{ fontWeight: 'normal' }}>
              Kids
            </Button>

            <IconButton>
              <BellIcon fontSize={'small'} />
            </IconButton>

            <Box></Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

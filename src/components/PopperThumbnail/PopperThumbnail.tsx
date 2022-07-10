import React, { useState } from 'react';

import { Box, BoxProps, Fade, Popper } from '@mui/material';

import MovieInfoCard from 'components/MovieInfoCard';
import { Thumbnail } from 'components/uis/Thumbnail';
import { MovieListModel } from 'models';
import { smallImgLoader } from 'utils/imgLoader';

interface Props extends BoxProps {
  movie: MovieListModel;
}

export default function PopperThumbnail({ movie, ...props }: Props) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const canBeOpen = Boolean(anchorEl);
  const id = canBeOpen ? `popper-${movie.id}` : undefined;

  if (!movie.backdropPath) return <div />;

  return (
    <Box position={'relative'} {...props}>
      <Thumbnail
        imgProps={{
          src: movie.backdropPath,
          alt: movie.title,
          loader: smallImgLoader,
        }}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        aria-describedby={id}
      />
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        sx={{ zIndex: 'tooltip' }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={100}>
            <Box
              position={'absolute'}
              top={'-10vw'}
              left={'-10vw'}
              onMouseLeave={handleClickAway}
            >
              {open && <MovieInfoCard movie={movie} />}
            </Box>
          </Fade>
        )}
      </Popper>
    </Box>
  );
}

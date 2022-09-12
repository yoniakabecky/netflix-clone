import React, { useCallback, useMemo, useRef } from 'react';

import { Box, BoxProps, Fade, Popper } from '@mui/material';

import MovieInfoCard from 'components/MovieInfoCard';
import { Thumbnail } from 'components/uis/Thumbnail';
import { MovieListItemModel } from 'models';
import { usePopperState } from 'recoils/popper';
import { smallImgLoader } from 'utils/imgLoader';

interface Props extends BoxProps {
  movie: MovieListItemModel;
}

export default function PopperThumbnail({ movie, ...props }: Props) {
  const {
    popperState: { isOpen, currentPopperTitle, anchorEl },
    open,
    close,
  } = usePopperState();

  const ref = useRef<HTMLDivElement | null>(null);

  const isCurrentlyOpen = useMemo(
    () => movie.title === currentPopperTitle && isOpen,
    [movie.title, currentPopperTitle, isOpen]
  );

  const popperId = useMemo(
    () => (isCurrentlyOpen ? `popper-${movie.movieId}` : undefined),
    [movie.movieId, isCurrentlyOpen]
  );

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) =>
      isOpen ? open(movie.title, event.currentTarget) : close(),
    [movie.title, isOpen, open, close]
  );

  const delayPopper = () =>
    new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

  const handleMouseEnter = useCallback(
    async (event: React.MouseEvent<HTMLDivElement>) => {
      if (isCurrentlyOpen) return;
      ref.current = event.currentTarget;

      await delayPopper();
      ref.current && open(movie.title, ref.current);
    },
    [movie.title, open, isCurrentlyOpen]
  );

  const handleMouseLeave = () => (ref.current = null);

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
        onMouseLeave={handleMouseLeave}
        aria-describedby={popperId}
        ref={ref}
      />
      <Popper
        id={popperId}
        open={isCurrentlyOpen}
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
              onMouseLeave={close}
            >
              {isOpen && <MovieInfoCard movie={movie} />}
            </Box>
          </Fade>
        )}
      </Popper>
    </Box>
  );
}

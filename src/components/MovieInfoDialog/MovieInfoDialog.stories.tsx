import Button from '@mui/material/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { useOpenState } from 'hooks/useOpenState';
import { MovieModel } from 'models';
import { featuredMovieDummy, releaseDatesDummy } from 'tmdb/dummy';

import MovieInfoDialog from './MovieInfoDialog';

export default {
  title: 'MovieInfoDialog',
  component: MovieInfoDialog,
} as ComponentMeta<typeof MovieInfoDialog>;

export const Default: ComponentStory<typeof MovieInfoDialog> = () => {
  const { open, handleOpen, handleClose } = useOpenState(true);

  return (
    <>
      <Button onClick={handleOpen}>Open dialog</Button>
      <MovieInfoDialog
        open={open}
        onClose={handleClose}
        movie={new MovieModel(featuredMovieDummy, releaseDatesDummy)}
      />
    </>
  );
};

export const Loading: ComponentStory<typeof MovieInfoDialog> = () => {
  const { open, handleOpen, handleClose } = useOpenState(true);

  return (
    <>
      <Button onClick={handleOpen}>Open dialog</Button>
      <MovieInfoDialog
        open={open}
        onClose={handleClose}
        movie={new MovieModel(featuredMovieDummy, releaseDatesDummy)}
        loading={true}
      />
    </>
  );
};

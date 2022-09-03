import { useState } from 'react';

import Button from '@mui/material/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MovieModel } from 'models';
import { featuredMovieDummy, releaseDatesDummy } from 'tmdb/dummy';

import MovieInfoDialog from './MovieInfoDialog';

export default {
  title: 'MovieInfoDialog',
  component: MovieInfoDialog,
} as ComponentMeta<typeof MovieInfoDialog>;

export const Default: ComponentStory<typeof MovieInfoDialog> = () => {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Open dialog</Button>
      <MovieInfoDialog
        open={open}
        onClose={handleClose}
        movie={new MovieModel(featuredMovieDummy, releaseDatesDummy)}
      />
    </>
  );
};

import React, { useState } from 'react';

import Button from '@mui/material/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import MovieListDialog from './MovieListDialog';

export default {
  title: 'MovieListDialog',
  component: MovieListDialog,
} as ComponentMeta<typeof MovieListDialog>;

export const Default: ComponentStory<typeof MovieListDialog> = () => {
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
      <MovieListDialog
        open={open}
        onClose={handleClose}
        categoryTitle={'Category Title'}
        list={[
          { src: '/Netflix_Logo.svg', alt: 'sample' },
          { src: '/Netflix_Logo.svg', alt: 'sample' },
          { src: '/Netflix_Logo.svg', alt: 'sample' },
          { src: '/Netflix_Logo.svg', alt: 'sample' },
          { src: '/Netflix_Logo.svg', alt: 'sample' },
        ]}
      />
    </>
  );
};

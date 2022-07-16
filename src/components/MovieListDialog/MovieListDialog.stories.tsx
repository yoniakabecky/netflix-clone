import React, { useState } from 'react';

import Button from '@mui/material/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RecoilRoot } from 'recoil';

import { CategoryModel } from 'models';
import { trendingResultDummy } from 'tmdb/dummy';

import MovieListDialog from './MovieListDialog';

export default {
  title: 'MovieListDialog',
  component: MovieListDialog,
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
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
        category={new CategoryModel('Category Name', trendingResultDummy)}
      />
    </>
  );
};

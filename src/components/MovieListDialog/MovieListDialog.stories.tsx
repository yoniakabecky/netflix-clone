import Button from '@mui/material/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { useOpenState } from 'hooks/useOpenState';
import { parseCategoryResponse } from 'models';
import { trendingResultDummy } from 'tmdb/dummy';
import type { MovieList } from 'tmdb/types';

import MovieListDialog from './MovieListDialog';

export default {
  title: 'MovieListDialog',
  component: MovieListDialog,
} as ComponentMeta<typeof MovieListDialog>;

const category = parseCategoryResponse(
  'category name',
  trendingResultDummy as MovieList
);

export const Default: ComponentStory<typeof MovieListDialog> = () => {
  const { open, handleOpen, handleClose } = useOpenState(true);

  return (
    <>
      <Button onClick={handleOpen}>Open dialog</Button>
      <MovieListDialog open={open} onClose={handleClose} category={category} />
    </>
  );
};

export const Loading: ComponentStory<typeof MovieListDialog> = () => {
  const { open, handleOpen, handleClose } = useOpenState(true);

  return (
    <>
      <Button onClick={handleOpen}>Open dialog</Button>
      <MovieListDialog
        open={open}
        onClose={handleClose}
        category={category}
        loading={true}
      />
    </>
  );
};

import Button from '@mui/material/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { useOpenState } from 'hooks/useOpenState';
import { CategoryModel } from 'models';
import { trendingResultDummy } from 'tmdb/dummy';

import MovieListDialog from './MovieListDialog';

export default {
  title: 'MovieListDialog',
  component: MovieListDialog,
} as ComponentMeta<typeof MovieListDialog>;

export const Default: ComponentStory<typeof MovieListDialog> = () => {
  const { open, handleOpen, handleClose } = useOpenState(true);

  return (
    <>
      <Button onClick={handleOpen}>Open dialog</Button>
      <MovieListDialog
        open={open}
        onClose={handleClose}
        category={new CategoryModel('Category Name', trendingResultDummy)}
      />
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
        category={new CategoryModel('Category Name', trendingResultDummy)}
        loading={true}
      />
    </>
  );
};

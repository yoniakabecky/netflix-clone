import { useEffect } from 'react';

import Button from '@mui/material/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { parseCategoryResponse } from 'models';
import { useDialogState } from 'recoils';
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
  const { open, setList } = useDialogState();

  const onClick = () => setList(category);

  useEffect(() => {
    onClick();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Button onClick={onClick}>Open dialog</Button>
      <MovieListDialog open={open} />
    </>
  );
};

export const Loading: ComponentStory<typeof MovieListDialog> = () => {
  const { open, setList } = useDialogState();

  const onClick = () => setList(category);

  useEffect(() => {
    onClick();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Button onClick={onClick}>Open dialog</Button>
      <MovieListDialog open={open} loading={true} />
    </>
  );
};

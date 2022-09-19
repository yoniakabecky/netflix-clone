import { useEffect } from 'react';

import Button from '@mui/material/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { parseTrendingAndReleaseDate } from 'models';
import { useDialogState } from 'recoils/dialog';
import { releaseDatesDummy, trendingResultDummy } from 'tmdb/dummy';
import { MovieList } from 'tmdb/types';

import MovieInfoDialog from './MovieInfoDialog';

export default {
  title: 'MovieInfoDialog',
  component: MovieInfoDialog,
} as ComponentMeta<typeof MovieInfoDialog>;

const movie = parseTrendingAndReleaseDate(
  trendingResultDummy as MovieList,
  releaseDatesDummy
);

export const Default: ComponentStory<typeof MovieInfoDialog> = () => {
  const { open, setMovie } = useDialogState();

  const onClick = () => setMovie(movie);

  useEffect(() => {
    onClick();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Button onClick={onClick}>Open dialog</Button>
      <MovieInfoDialog open={open} />
    </>
  );
};

export const Loading: ComponentStory<typeof MovieInfoDialog> = () => {
  const { open, setMovie } = useDialogState();

  const onClick = () => setMovie(movie);

  useEffect(() => {
    onClick();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Button onClick={onClick}>Open dialog</Button>
      <MovieInfoDialog open={open} loading={true} />
    </>
  );
};

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

export const Default: ComponentStory<typeof MovieInfoDialog> = () => {
  const { handleOpen, open, setMovie } = useDialogState();

  const onClick = () => {
    handleOpen();
    setMovie(
      parseTrendingAndReleaseDate(
        trendingResultDummy as MovieList,
        releaseDatesDummy
      )
    );
  };

  return (
    <>
      <Button onClick={onClick}>Open dialog</Button>
      <MovieInfoDialog open={open} />
    </>
  );
};

export const Loading: ComponentStory<typeof MovieInfoDialog> = () => {
  const { handleOpen, open, setMovie } = useDialogState();

  const onClick = () => {
    handleOpen();
    setMovie(
      parseTrendingAndReleaseDate(
        trendingResultDummy as MovieList,
        releaseDatesDummy
      )
    );
  };

  return (
    <>
      <Button onClick={onClick}>Open dialog</Button>
      <MovieInfoDialog open={open} loading={true} />
    </>
  );
};

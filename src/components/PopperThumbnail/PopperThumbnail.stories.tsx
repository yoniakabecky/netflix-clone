import { Box } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { parseMovieListResult } from 'models';
import { trendingResultDummy } from 'tmdb/dummy';
import { MovieListResult } from 'tmdb/types';

import PopperThumbnail from './PopperThumbnail';

export default {
  title: 'PopperThumbnail',
  component: PopperThumbnail,
} as ComponentMeta<typeof PopperThumbnail>;

export const Default: ComponentStory<typeof PopperThumbnail> = () => (
  <Box m={10}>
    <PopperThumbnail
      movie={parseMovieListResult(
        trendingResultDummy.results[0] as MovieListResult
      )}
      useViewWidth
    />
  </Box>
);

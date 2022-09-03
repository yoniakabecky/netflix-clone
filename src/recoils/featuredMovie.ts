import { nanoid } from 'nanoid';
import { selector, useRecoilValue } from 'recoil';

import { FeaturedMovieModel } from 'models';
import { fetchFeatured } from 'tmdb';

const featuredMovieState = selector<FeaturedMovieModel>({
  key: `featuredMovieState_${nanoid()}`,
  get: async () => await fetchFeatured(),
});

export const useFeaturedMovieState = () => {
  const featuredMovie = useRecoilValue(featuredMovieState);

  return {
    featuredMovie,
  };
};

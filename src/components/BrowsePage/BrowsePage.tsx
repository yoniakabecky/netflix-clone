import Box from '@mui/material/Box';

import Category from 'components/Category';
import FeaturedMovie from 'components/FeaturedMovie';
import NavBar from 'components/NavBar';
import { FeaturedMovieModel } from 'models';
import { Movie, ReleaseDates, Trending } from 'tmdb/types';

interface CategoryType extends Trending {
  name: string;
}

type Props = {
  featuredMovie: Movie;
  releaseDates: ReleaseDates;
  categories: CategoryType[];
};

export default function BrowsePage({
  featuredMovie,
  releaseDates,
  categories,
}: Props) {
  const mainMovie = new FeaturedMovieModel(featuredMovie, releaseDates);

  return (
    <>
      <NavBar />

      <Box component={'section'} mb={6}>
        {/* featured movie */}
        <FeaturedMovie movie={mainMovie} />

        {/* categories */}
        <Box>
          {categories.map((category, i) => (
            <Category
              key={i}
              title={category.name}
              movies={category.results}
              handleClick={() => null}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

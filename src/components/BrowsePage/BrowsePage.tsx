import Box from '@mui/material/Box';

import Category from 'components/Category';
import FeaturedMovie from 'components/FeaturedMovie';
import NavBar from 'components/NavBar';
import { CategoryModel, MovieModel } from 'models';
import { Movie, ReleaseDates } from 'tmdb/types';

type Props = {
  featuredMovie: Movie;
  releaseDates: ReleaseDates;
  categories: CategoryModel[];
};

export default function BrowsePage({
  featuredMovie,
  releaseDates,
  categories,
}: Props) {
  const mainMovie = new MovieModel(featuredMovie, releaseDates);

  return (
    <>
      <NavBar />

      <Box component={'section'} mb={6}>
        {/* featured movie */}
        <FeaturedMovie movie={mainMovie} />

        {/* categories */}
        <Box>
          {categories.map((category) => (
            <Category key={category.name} category={category} />
          ))}
        </Box>
      </Box>

      {/* TODO: footer */}
      <Box height={200} />
    </>
  );
}

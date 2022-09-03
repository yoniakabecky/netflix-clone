import Box from '@mui/material/Box';

import Category from 'components/Category';
import FeaturedMovie from 'components/FeaturedMovie';
import NavBar from 'components/NavBar';
import { CategoryModel } from 'models';
import type { FeaturedMovieModel } from 'models';

type Props = {
  featuredMovie: FeaturedMovieModel;
  categories: CategoryModel[];
};

export default function BrowsePage({ featuredMovie, categories }: Props) {
  return (
    <>
      <NavBar />

      <Box component={'section'} mb={6}>
        {/* featured movie */}
        <FeaturedMovie movie={featuredMovie} />

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

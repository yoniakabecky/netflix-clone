import Box from '@mui/material/Box';

import Category from 'components/Category';
import FeaturedMovie from 'components/FeaturedMovie';
import MovieInfoDialog from 'components/MovieInfoDialog';
import MovieListDialog from 'components/MovieListDialog';
import NavBar from 'components/NavBar';
import type { CategoryModel, FeaturedMovieModel } from 'models';
import { useDialogState } from 'recoils';

type Props = {
  featuredMovie: FeaturedMovieModel;
  categories: CategoryModel[];
};

export default function BrowsePage({ featuredMovie, categories }: Props) {
  const { open, type } = useDialogState();

  return (
    <>
      <NavBar />

      <Box component={'section'} mb={6}>
        <FeaturedMovie movie={featuredMovie} />

        <Box>
          {categories.map((category) => (
            <Category key={category.name} category={category} />
          ))}
        </Box>
      </Box>

      <MovieInfoDialog open={open && type === 'info'} />
      <MovieListDialog open={open && type === 'list'} />

      {/* TODO: footer */}
      <Box height={200} />
    </>
  );
}

import Box from '@mui/material/Box';

import Category from 'components/Category';
import FeaturedMovie from 'components/FeaturedMovie';
import MovieInfoDialog from 'components/MovieInfoDialog';
import MovieListDialog from 'components/MovieListDialog';
import NavBar from 'components/NavBar';
import PlaySnackbar from 'components/PlaySnackbar';
import useCategories from 'hooks/useCategories';
import { CategoryModel, FeaturedMovieModel } from 'models';
import { useDialogState, usePlaySnackbarState } from 'recoils';

type Props = {
  featuredMovie: FeaturedMovieModel;
  categories: CategoryModel[];
};

export default function BrowsePage(props: Props) {
  const { open, type } = useDialogState();
  const { categories } = useCategories();
  const { open: openSnackbar, closeSnackbar } = usePlaySnackbarState();

  const allCategories = props.categories.concat(categories);

  return (
    <>
      <NavBar />

      <Box component={'section'} mb={6}>
        {/* featured movie */}
        <FeaturedMovie movie={props.featuredMovie} />

        <Box>
          {allCategories.map((category) => (
            <Category key={category.name} category={category} />
          ))}
        </Box>
      </Box>

      <MovieInfoDialog open={open && type === 'info'} />
      <MovieListDialog open={open && type === 'list'} />
      <PlaySnackbar open={openSnackbar} onClose={closeSnackbar} />

      {/* TODO: footer */}
      <Box height={200} />
    </>
  );
}

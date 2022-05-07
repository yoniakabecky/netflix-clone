import Box from '@mui/material/Box';

import Category from 'components/Category';
import FeaturedMovie from 'components/FeaturedMovie';
import NavBar from 'components/NavBar';

type Movie = {
  title: string;
  description: string;
  alt: string;
  src: string;
};

type CategoryType = {
  name: string;
  list: Movie[];
};

type Props = {
  featuredMovie: Movie;
  categories: CategoryType[];
};

export default function BrowsePage({ featuredMovie, categories }: Props) {
  return (
    <>
      <NavBar />

      <Box component={'section'}>
        {/* featured movie */}
        <FeaturedMovie movie={featuredMovie} />

        {/* categories */}
        <Box width={'90%'} mx={'auto'}>
          {categories.map((category, i) => (
            <Category
              key={i}
              title={category.name}
              movies={category.list}
              handleClick={() => null}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

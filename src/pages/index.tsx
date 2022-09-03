import type { NextPage } from 'next';
import Head from 'next/head';

import BrowsePage from 'components/BrowsePage';
import { CategoryModel } from 'models';
import { useFeaturedMovieState } from 'recoils/featuredMovie';
import { trendingResultDummy } from 'tmdb/dummy';

const Home: NextPage = () => {
  const { featuredMovie } = useFeaturedMovieState();

  return (
    <div>
      <Head>
        <title>Netflix Clone App</title>
        <meta name="description" content="Clone app of Netflix with TMDB api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BrowsePage
          featuredMovie={featuredMovie}
          categories={[new CategoryModel('Trending', trendingResultDummy)]}
        />
      </main>
    </div>
  );
};

export default Home;

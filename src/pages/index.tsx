import type { NextPage } from 'next';
import Head from 'next/head';

import BrowsePage from 'components/BrowsePage';
import { CategoryModel } from 'models';
import {
  featuredMovieDummy,
  releaseDatesDummy,
  trendingResultDummy,
} from 'tmdb/dummy';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Netflix Clone App</title>
        <meta name="description" content="Clone app of Netflix with TMDB api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BrowsePage
          featuredMovie={featuredMovieDummy}
          releaseDates={releaseDatesDummy}
          categories={[new CategoryModel('Trending', trendingResultDummy)]}
        />
      </main>
    </div>
  );
};

export default Home;

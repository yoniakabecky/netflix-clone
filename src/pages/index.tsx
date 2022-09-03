import type { NextPage } from 'next';
import Head from 'next/head';
import useSWR from 'swr';

import BrowsePage from 'components/BrowsePage';
import * as URL from 'constants/urls';
import { CategoryModel, parseTrendingAndReleaseDate } from 'models';
import { trendingResultDummy } from 'tmdb/dummy';
import { ReleaseDates, Trending } from 'tmdb/types';

const Home: NextPage = () => {
  const { data: trending, error } = useSWR<Trending, unknown>(
    URL.TRENDING_MOVIE_DAY
  );
  const { data: releaseDate } = useSWR<ReleaseDates, unknown>(() =>
    URL.RELEASE_DATES(trending?.results[0].id as number)
  );

  // TODO: handle errors and loading
  if (!trending || error) return <div>something went wrong</div>;
  if (!releaseDate) return <div>loading...</div>;

  const featuredMovie = parseTrendingAndReleaseDate(trending, releaseDate);
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

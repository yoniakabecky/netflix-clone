import { useMemo } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';
import useSWR from 'swr';

import BrowsePage from 'components/BrowsePage';
import { DefaultLoading } from 'components/uis/Skeleton';
import * as URL from 'constants/urls';
import { CategoryModel, parseTrendingAndReleaseDate } from 'models';
import { parseMovieListResult } from 'models/MovieListItemModel';
import type { MovieList, ReleaseDates } from 'tmdb/types';

const Home: NextPage = () => {
  const { data: trending } = useSWR<MovieList, unknown>(URL.TRENDING_MOVIE_DAY);
  const { data: releaseDate } = useSWR<ReleaseDates, unknown>(() =>
    URL.RELEASE_DATES(trending?.results[0].id as number)
  );

  const featuredMovie = useMemo(
    () =>
      trending ? parseTrendingAndReleaseDate(trending, releaseDate) : undefined,
    [trending, releaseDate]
  );

  const trendingCategory: CategoryModel | undefined = useMemo(() => {
    if (!trending) return undefined;

    return {
      name: 'trending',
      page: trending.page,
      totalPages: trending.total_pages,
      totalResults: trending.total_results,
      results: trending.results
        .slice(1)
        .map((movie) => parseMovieListResult(movie)),
    };
  }, [trending]);

  if (!featuredMovie || !trendingCategory) return <DefaultLoading />;

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
          categories={[trendingCategory]}
        />
      </main>
    </div>
  );
};

export default Home;

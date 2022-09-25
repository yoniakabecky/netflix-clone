import { useMemo } from 'react';

import useSWR from 'swr';

import * as URL from 'constants/urls';
import { CategoryModel, parseCategoryResponse } from 'models';
import type { MovieList } from 'tmdb/types';

export default function useCategories() {
  const { data: topRated } = useSWR<MovieList, unknown>(URL.TOP_RATED_MOVIES);
  const { data: comedy } = useSWR<MovieList, unknown>(URL.COMEDY_MOVIES);
  const { data: romance } = useSWR<MovieList, unknown>(URL.ROMANCE_MOVIES);
  const { data: mystery } = useSWR<MovieList, unknown>(URL.MYSTERY_MOVIES);
  const { data: documentary } = useSWR<MovieList, unknown>(
    URL.DOCUMENTARY_MOVIES
  );
  const { data: family } = useSWR<MovieList, unknown>(URL.FAMILY_MOVIES);
  const { data: upcoming } = useSWR<MovieList, unknown>(URL.UPCOMING_MOVIES);
  const { data: nowPlaying } = useSWR<MovieList, unknown>(
    URL.NOW_PLAYING_MOVIES
  );

  const categories = useMemo(() => {
    const newCategories: CategoryModel[] = [];

    if (topRated)
      newCategories.push(
        parseCategoryResponse('top rated', topRated, URL.TOP_RATED_MOVIES)
      );

    if (comedy)
      newCategories.push(
        parseCategoryResponse('comedy', comedy, URL.COMEDY_MOVIES)
      );

    if (romance)
      newCategories.push(
        parseCategoryResponse('romance', romance, URL.ROMANCE_MOVIES)
      );

    if (mystery)
      newCategories.push(
        parseCategoryResponse('mystery', mystery, URL.MYSTERY_MOVIES)
      );

    if (documentary)
      newCategories.push(
        parseCategoryResponse(
          'documentary',
          documentary,
          URL.DOCUMENTARY_MOVIES
        )
      );

    if (family)
      newCategories.push(
        parseCategoryResponse('family', family, URL.FAMILY_MOVIES)
      );

    if (upcoming)
      newCategories.push(
        parseCategoryResponse('upcoming', upcoming, URL.UPCOMING_MOVIES)
      );

    if (nowPlaying)
      newCategories.push(
        parseCategoryResponse('now playing', nowPlaying, URL.NOW_PLAYING_MOVIES)
      );

    return newCategories;
  }, [
    topRated,
    comedy,
    romance,
    mystery,
    documentary,
    family,
    nowPlaying,
    upcoming,
  ]);

  return { categories };
}

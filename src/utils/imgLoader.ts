import { ImageLoaderProps } from 'next/image';

export const originalImgLoader = ({ src }: ImageLoaderProps) => {
  return `https://image.tmdb.org/t/p/original${src}`;
};

export const smallImgLoader = ({ src }: ImageLoaderProps) => {
  return `https://image.tmdb.org/t/p/w500${src}`;
};

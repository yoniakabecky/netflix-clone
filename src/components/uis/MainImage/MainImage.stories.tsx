import { ComponentMeta, ComponentStory } from '@storybook/react';

import { featuredMovieDummy } from 'tmdb/dummy';

import MainImage from './MainImage';

export default {
  title: 'UI/MainImage',
  component: MainImage,
} as ComponentMeta<typeof MainImage>;

const Template: ComponentStory<typeof MainImage> = (args) => (
  <MainImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: featuredMovieDummy.title,
  backdropPath: featuredMovieDummy.backdrop_path,
};

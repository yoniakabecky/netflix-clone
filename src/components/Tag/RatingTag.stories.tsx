import { ComponentMeta, ComponentStory } from '@storybook/react';

import RatingTag from './RatingTag';

export default {
  title: 'Tag',
  component: RatingTag,
} as ComponentMeta<typeof RatingTag>;

const RatingTemp: ComponentStory<typeof RatingTag> = (args) => (
  <RatingTag {...args} />
);

export const Rating = RatingTemp.bind({});
Rating.args = {
  rating: 'R15+',
};

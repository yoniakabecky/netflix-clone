import Skeleton from '@mui/material/Skeleton';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DefaultLoading } from './DefaultLoading';
import {
  DetailsSkelton,
  OverviewSkelton,
  SimilarListSkelton,
} from './MovieInfoSkeletons';

export default {
  title: 'Ui/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

export const Loading: ComponentStory<typeof Skeleton> = (args) => (
  <DefaultLoading {...args} />
);

export const Overview: ComponentStory<typeof Skeleton> = (args) => (
  <OverviewSkelton {...args} />
);

export const SimilarList: ComponentStory<typeof Skeleton> = (args) => (
  <SimilarListSkelton {...args} />
);

export const MovieDetails: ComponentStory<typeof Skeleton> = (args) => (
  <DetailsSkelton {...args} />
);

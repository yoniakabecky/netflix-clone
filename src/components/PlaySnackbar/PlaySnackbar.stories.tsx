import { ComponentMeta, ComponentStory } from '@storybook/react';

import PlaySnackbar from './PlaySnackbar';

export default {
  title: 'PlaySnackbar',
  component: PlaySnackbar,
} as ComponentMeta<typeof PlaySnackbar>;

export const Default: ComponentStory<typeof PlaySnackbar> = () => (
  <PlaySnackbar open={true} onClose={() => null} />
);

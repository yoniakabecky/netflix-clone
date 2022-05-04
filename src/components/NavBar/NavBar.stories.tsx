import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import NavBar from './NavBar';

export default {
  title: 'NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = () => <NavBar />;

export const Default = Template.bind({});
Default.args = {};

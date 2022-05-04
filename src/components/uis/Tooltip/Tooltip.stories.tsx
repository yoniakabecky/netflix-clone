import React from 'react';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StyledTooltip } from './StyledTooltip';

export default {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = () => (
  <StyledTooltip title={'hello'}>
    <Box m={6} width={'4rem'} color={'common.white'}>
      Hover me
    </Box>
  </StyledTooltip>
);

export const Default = Template.bind({});
Default.args = {};

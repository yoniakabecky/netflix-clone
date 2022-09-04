import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import * as NextImage from 'next/image';
import { RecoilRoot } from 'recoil';

import { theme } from '../src/styles/theme';

const OriginalNextImage = NextImage.default;

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <CssBaseline />
        <Story />
      </RecoilRoot>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

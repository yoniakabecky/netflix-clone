import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';

import createEmotionCache from 'styles/createEmotionCache';
import { theme } from 'styles/theme';
import { fetcher } from 'utils/apiFetcher';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <RecoilRoot>
      <SWRConfig value={{ fetcher }}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </SWRConfig>
    </RecoilRoot>
  );
}

export default MyApp;

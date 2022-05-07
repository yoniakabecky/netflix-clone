import type { NextPage } from 'next';
import Head from 'next/head';

import BrowsePage from 'components/BrowsePage';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Netflix Clone App</title>
        <meta name="description" content="Clone app of Netflix with TMDB api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BrowsePage
          featuredMovie={{
            title: 'the suicide squat',
            description:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            alt: 'the suicide squat',
            src: '/Netflix_Logo.svg',
          }}
          categories={[
            {
              name: 'My List',
              list: [
                {
                  title: '',
                  description: '',
                  src: '/Netflix_Logo.svg',
                  alt: 'sample',
                },
                {
                  title: '',
                  description: '',
                  src: '/Netflix_Logo.svg',
                  alt: 'sample',
                },
                {
                  title: '',
                  description: '',
                  src: '/Netflix_Logo.svg',
                  alt: 'sample',
                },
              ],
            },
          ]}
        />
      </main>
    </div>
  );
};

export default Home;

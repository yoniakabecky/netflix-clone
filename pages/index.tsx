import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Head from 'next/head';

const Heading = styled.h1`
  padding-left: 40px;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Netflix Clone App</title>
        <meta name="description" content="Clone app of Netflix with TMDB api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading>hello</Heading>
      </main>
    </div>
  );
};

export default Home;

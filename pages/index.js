import { Fragment } from 'react';
import Head from 'next/head';
import FeaturedPosts from '../components/homePage/FeaturedPosts';
import Hero from '../components/homePage/Hero';
import { getFeaturedPosts } from '../lib/postsUtil';

const HomePage = props => {
  return (
    <Fragment>
      <Head>
        <title>Huzefa' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
};

export default HomePage;

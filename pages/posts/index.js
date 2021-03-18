import Head from 'next/head';
import { Fragment } from 'react';
import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts } from '../../lib/postsUtil';

const AllPostsPage = props => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;

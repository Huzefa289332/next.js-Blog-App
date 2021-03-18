import Head from 'next/head';
import { Fragment } from 'react';
import PostContent from '../../components/posts/postDetail/PostContent';
import { getPostData, getPostsFiles } from '../../lib/postsUtil';

const PostDetailPage = props => {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
};

export const getStaticProps = context => {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''));
  return {
    paths: slugs.map(slug => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default PostDetailPage;

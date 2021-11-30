import React from 'react';
import Blog from '../../components/blogpage/Blog';
import BlogHeader from '../../components/blogpage/BlogHeader';


const fetchData = async () => 
    await axios.get('')
    .then(res => ({
        error: false,
        posts: res.data,
    }))
    .catch(() => ({
      error: true,
      posts: null,
    }),
);

const blog = ({posts}) => {
    return (
        <div>
            <BlogHeader />
            <Blog posts={posts}/>
        </div>
    );
};

export default blog;

export const getStaticProps = async () => {
    const posts = await fetchData();

    return {
        props: { posts },
    };
  };
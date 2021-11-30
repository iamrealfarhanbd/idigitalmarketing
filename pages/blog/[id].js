import React from 'react';

const blogsingle = ({post}) => {
    return (
        <div>
            <BlogSingleHeader />
            <BlogSingleContent post={post}/>
        </div>
    );
};

export default blogsingle;

export const getServerSideProps = async (context) => {
    const post_id = context.params.id;
    const response = await fetch(
      `https://trainingexpress.org.uk/wp-json/wp/v2/posts/${post_id}`
    );
    const json = await response.json();

    return {
      props: {
        post: json,
      },
    };
};
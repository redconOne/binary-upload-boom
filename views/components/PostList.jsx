import React from 'react';
import PostItem from './PostItem';

function PostList({ posts }) {
  return (
    <ul className="row list-unstyled">
      {posts.map((post) => (
        <PostItem
          key={post._id}
          _id={post._id}
          image={post.image}
        />
      ))}
    </ul>
  );
}

export default PostList;

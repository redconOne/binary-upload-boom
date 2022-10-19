import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts }) => (
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

export default PostList;

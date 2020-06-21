import React from 'react';

const PostCard : React.FC<any> = ({ post }) => (
  <a className="one-post" href={`/posts/${post.slug}`}>
    <img alt="" src={post.media ? post.media.large : ''} />
    <div className="post-text-container">
      <h3>{post.title}</h3>
      <p className="date">27 maj 2020</p>
      <p>{post.excerpt}</p>
    </div>
  </a>
);

export default PostCard;

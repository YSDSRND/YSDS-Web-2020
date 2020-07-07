import React from 'react';
import {Link} from "react-router-dom";

const PostCard : React.FC<any> = ({ post }) => (
  <Link className="one-post" to={`/posts/${post.slug}`}>
    <img alt="" src={post.media ? post.media.large : ''} />
    <div className="post-text-container">
      <h3>{post.title}</h3>
      <p className="date">{new Date(post.date).toLocaleDateString('sv-SE')}</p>
      <p>{post.excerpt}</p>
    </div>
  </Link>
);

export default PostCard;

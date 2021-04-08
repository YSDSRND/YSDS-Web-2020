import React from 'react';
import {Link} from "react-router-dom";
import HTMLContent from "../HTMLContent";

const PostCard: React.FC<any> = ({post}) => (
    <Link className="one-post" to={`/posts/${post.slug}`}>
        {post.media ?
            <img alt="" src={post.media ? post.media.thumbnail : ''}/>
            : ""
        }
        <div className="post-text-container">
            <h3>{post.title}</h3>
            <p className="date">{new Date(post.date).toLocaleDateString('sv-SE')}</p>
            <p><HTMLContent html={post.excerpt} /></p>
        </div>
    </Link>
);

export default PostCard;

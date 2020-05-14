import React from 'react';
import { Link } from 'react-router-dom';

const PostCard : React.FC<any> = ({post}) => {


    return (
        <a className="one-post" href={"/posts/" + post.slug}>
            <img src={post.media? post.media.large : ""}></img>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
        </a>
    )
}

export default PostCard;
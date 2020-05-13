import React from 'react';
import { Link } from 'react-router-dom';

const PostCard : React.FC<any> = ({post}) => {


    return (
        <div className="one-post">
            <img src="#"></img>
            <h3>dett är en post!</h3>
            <p>Customized transporting solutions of unique artwork and invaluable objects. We work with galleries, auction houses and provide global crating, storage facilities.</p>
        </div>
    )
}

export default PostCard;
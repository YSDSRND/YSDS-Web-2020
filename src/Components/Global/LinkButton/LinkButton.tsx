import React from 'react';
import WPButton from '../../../Util/Types/WPButton';
import { Link } from 'react-router-dom';

const LinkButton : React.FC<WPButton> = ({button, button_style}) => {

    var  url;
    var pathname=""
    if(button){

        url = new URL(button.url);     
        pathname = url.pathname
    } 
    

    return (
        <Link to={pathname} className={`ysds-button ${button_style}`}>
            {button.title}
        </Link>
    )
}

export default LinkButton;
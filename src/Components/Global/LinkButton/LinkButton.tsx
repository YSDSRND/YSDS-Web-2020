import React from 'react';
import WPButton from '../../../Util/Types/WPButton';
import { Link } from 'react-router-dom';

const LinkButton : React.FC<WPButton> = ({button, button_style}) => {

    
    if(!button){
        return <div />
        
    }
    
    const url = new URL(button.url);     
     const   pathname = url.pathname

    return (
        <Link to={pathname} className={`ysds-button ${button_style}`}>
            {button.title}
        </Link>
    )
}

export default LinkButton;
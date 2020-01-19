import React from 'react';
import WPButton from '../../../Util/Types/WPButton';
import { Link } from 'react-router-dom';

const LinkButton : React.FC<WPButton> = ({button, button_style}) => {

    const url = new URL(button.url);

    return (
        <Link to={url.pathname} className={`ysds-button ${button_style}`}>
            {button.title}
        </Link>
    )
}

export default LinkButton;
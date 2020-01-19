import React from 'react';
import WPButton from '../../../Util/Types/WPButton';

const LinkButton : React.FC<WPButton> = ({button, button_style}) => {
    return (
        <a href={button.url} className={`ysds-button ${button_style}`}>
            {button.title}
        </a>
    )
}

export default LinkButton;
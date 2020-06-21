import React from 'react';
import { Link } from 'react-router-dom';
import WPButton from '../../../Util/Types/WPButton';

const LinkButton : React.FC<WPButton> = ({ button, button_style,  }) => {
  if (!button) {
    return <div />;
  }

  const url = new URL(button.url);
  const { pathname } = url;

  
  if(!url.href.startsWith(window.location.host)){
    return (
      <a target={button.target} href={url.href} className={`ysds-button ${button_style}`}> 
              {button.title}
      </a>
    )
  }
  return (
    <Link to={pathname} target={button.target} className={`ysds-button ${button_style}`}>
      {button.title}
    </Link>
  );
};

export default LinkButton;

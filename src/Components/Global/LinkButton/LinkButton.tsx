import React from 'react';
import { Link } from 'react-router-dom';
import WPButton from '../../../Util/Types/WPButton';
import {isInternalUrl} from "../../../Util/isInternalUrl";

const LinkButton : React.FC<WPButton> = ({ button, button_style,  }) => {
  if (!button) {
    return <div />;
  }
  
  if(!isInternalUrl(button.url)){
    return (
      <a target={button.target} href={button.url} className={`ysds-button ${button_style}`}>
              {button.title}
      </a>
    )
  }
  return (
    <Link to={button.url} target={"_blank"} className={`ysds-button ${button_style}`}>
      {button.title}
    </Link>
  );
};

export default LinkButton;

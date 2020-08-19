import React from 'react';
import WPButton from '../../../Util/Types/WPButton';
import {isInternalUrl} from "../../../Util/isInternalUrl";
import Link from "../Link/Link";

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
    <Link to={button.url} className={`ysds-button ${button_style}`}>
      {button.title}
    </Link>
  );
};

export default LinkButton;

import React from 'react';
import WPButton from '../../../Util/Types/WPButton';
import LinkButton from '../../Global/LinkButton/LinkButton';

export type CaseProps = {
  header: string;
  body: string;
  button: {
      button: WPButton
  };
};

const Case: React.FC<CaseProps> = ({ header, body, button }) => (
  <div className="one-card">
    <h3>{header}</h3>
    <p>{body}</p>
    <LinkButton {...button.button} />
  </div>
);

export default Case;

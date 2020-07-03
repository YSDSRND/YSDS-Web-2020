import React from 'react';
import WPButton from '../../../Util/Types/WPButton';
import LinkButton from '../../Global/LinkButton/LinkButton';
import HTMLContent from '../../Global/HTMLContent/HTMLContent';

export type CaseProps = {
  header: string;
  body: string;
  button: {
      button: WPButton
  };

  media: any;
};

const Case: React.FC<CaseProps> = ({ header, body, button, media }) => (
  <div className="one-card">
    <img src={media &&  media.large ? media.large : ''} alt={''} />    <h3>{header}</h3>
    <HTMLContent html={body} />
    <LinkButton {...button.button} />
  </div>
);

export default Case;

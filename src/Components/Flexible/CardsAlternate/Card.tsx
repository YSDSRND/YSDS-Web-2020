import React from 'react';
import { WPImage } from '../../../Util/Types/WPImage';
import WPButton from '../../../Util/Types/WPButton';

export type CardProps = {
  image: WPImage;
  header: string;
  text: string;
  button: WPButton,
};

const Card: React.FC<CardProps> = ({
  image, header, text, button,
}) => (
  <a href={button.button.url} className="one-card">
    <img src={image && image.sizes && image.sizes.large ? image.sizes.large : ''} alt={image ? image.alt : ''} />
    <div className="text-container">
      <h3>{header}</h3>
      <p>{text}</p>

        {button.button ? <button className="ysds-button lines">{button.button.title}</button> : ''}
    </div>
  </a>
);

export default Card;

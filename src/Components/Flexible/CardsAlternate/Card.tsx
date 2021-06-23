import React from 'react';
import { WPImage } from '../../../Util/Types/WPImage';
import WPButton from '../../../Util/Types/WPButton';
import {isInternalUrl} from "../../../Util/isInternalUrl";
import Link from "../../Global/Link/Link";

export type CardProps = {
  image: WPImage;
  header: string;
  text: string;
  button: WPButton,
};

const Card: React.FC<CardProps> = ({
  image, header, text, button,
}) => {

    const content = <>
        {image ? <img src={image && image.sizes && image.sizes.large ? image.sizes.large : ''} alt={image ? image.alt : ''} /> : null}
        <div className="text-container">
            <h3>{header}</h3>
            <p>{text}</p>

            {button.button ? <button className="ysds-button lines">{button.button.title}</button> : ''}
        </div>
    </>;

    return isInternalUrl(button.button.url)
        ? <Link to={button.button.url} className="one-card">{content}</Link>
        : <a href={button.button.url} className="one-card">{content}</a>;
}

export default Card;

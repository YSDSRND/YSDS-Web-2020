import React from "react";
import { WPImage } from "../../../Util/Types/WPImage";
import WPLink from "../../../Util/Types/WPLink";

export type CardProps = {
  image: WPImage;
  header: string;
  text: string;
  link: WPLink;
};

const Card: React.FC<CardProps> = ({ image, header, text, link }) => {
  return (
    <a className="one-card" href={link.url}>
      <img src={image.sizes.large} alt={image.alt} />
      <div className="text-container">
        <h3>{header}</h3>
        <p>{text}</p>
      </div>
    </a>
  );
};

export default Card;

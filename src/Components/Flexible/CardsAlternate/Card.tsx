import React from "react";
import { WPImage } from "../../../Util/Types/WPImage";
import WPButton from "../../../Util/Types/WPButton";
import LinkButton from "../../Global/LinkButton/LinkButton";

export type CardProps = {
  image: WPImage;
  header: string;
  text: string;
  button: WPButton,
};

const Card: React.FC<CardProps> = ({ image, header, text, button }) => {
  return (
    <div className="one-card">
      <img src={image && image.sizes && image.sizes.large ? image.sizes.large : ""} alt={image ? image.alt : ""} />
      <div className="text-container">
        <h3>{header}</h3>
        <p>{text}</p>
        <LinkButton {...button} />
      </div>
    </div>
  );
};

export default Card;

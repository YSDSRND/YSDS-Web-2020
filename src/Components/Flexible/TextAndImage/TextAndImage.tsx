import React from "react";
import WPButton from "../../../Util/Types/WPButton";
import { WPImage } from "../../../Util/Types/WPImage";
import HTMLContent from "../../Global/HTMLContent/HTMLContent";
import LinkButton from "../../Global/LinkButton/LinkButton";

export const TextAndImageACFLayout = "text_and_image";
export type TextAndImageProps = {
  acf_fc_layout: typeof TextAndImageACFLayout;
  mirrored_layout?: "normal" | "mirrored";
  header: string;
  body: string;
  button?: WPButton;
  image: WPImage;
};

const TextAndImage: React.FC<TextAndImageProps> = ({
  mirrored_layout,
  header,
  body,
  button,
  image
}) => {
  return (
    <section className={`text-and-image ${mirrored_layout}`}>
      <div className="main">
        <div className="main-inner">
          <div className="text-container">
            <h2>{header}</h2>
            <div className="line three-col"/>
            <div className="content">
              <HTMLContent html={body} />
            </div>
            {button && <LinkButton {...button} />}
          </div>
          <div className="image-container">
            <img src={image && image.sizes && image.sizes.large ? image.sizes.large :""} alt={image ? image.alt : ""} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextAndImage;

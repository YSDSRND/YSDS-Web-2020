import React from "react";
import { WPImage } from "../../../Util/Types/WPImage";
import HTMLContent from "../../Global/HTMLContent/HTMLContent";

export const BlackDiagonalACFLayout = "black_diagonal";
export type BlackDiagonalProps = {
  acf_fc_layout: typeof BlackDiagonalACFLayout;
  title_left: string;
  image: WPImage;
  title_right: string;
  subtitle_right: string;
};

const BlackDiagonal: React.FC<BlackDiagonalProps> = ({
  title_left,
  title_right,
  subtitle_right,
  image
}) => {
  return (
    <section className="black-diagonal">
      <div className="main">
        <div className="triangle"/>
        <div className="flex-container">
          <div className="left">
            <h2>
              <HTMLContent html={title_left} />
            </h2>
          </div>
          <div className="image-container">
            <img src={image && image.sizes && image.sizes.large ? image.sizes.large : ""} alt={image ? image.alt : ""} />
          </div>
          <div className="right">
            <h2><HTMLContent html={title_right} /></h2>
            <p>
              <HTMLContent html={subtitle_right} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlackDiagonal;

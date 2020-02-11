import React from "react";
import LinkButton from "../../Global/LinkButton/LinkButton";
import WPButton from "../../../Util/Types/WPButton";
import { WPImage } from "../../../Util/Types/WPImage";
import HTMLContent from "../../Global/HTMLContent/HTMLContent";

export const ArticleACFLayout = "article";
export type ArticleProps = {
  acf_fc_layout: typeof ArticleACFLayout,
  header: string,
  subheader: string,
  body: string,
  button: WPButton,
  backgroundImage: WPImage,
}


const Article: React.FC<ArticleProps> = ({header, subheader, body, button, backgroundImage}) => {
  return (
    <section className="article">
      <div className="background-image" style={{backgroundImage: `url(${backgroundImage && backgroundImage.sizes && backgroundImage.sizes.large ? backgroundImage.sizes.large : null})`}}></div>
      <div className="main">
        <div className="triangle"></div>
        <div className="main-inner">
          <div className="text-container">
          <h1>{header}</h1>
            <div className="line five-col"></div>
            <h2>
              {subheader}
            </h2>
            <div className="content">
              <HTMLContent html={body} />
            </div>
            <LinkButton {...button} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;

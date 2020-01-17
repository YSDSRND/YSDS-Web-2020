import React from "react";
import LinkButton from "../../Global/LinkButton/LinkButton";

export const ArticleACFLayout = "article";
export type ArticleProps = {
  acf_fc_layout: typeof ArticleACFLayout,
  header: string,
  subheader: string,
  body: string,
}


const Article: React.FC<ArticleProps> = ({header, subheader, body}) => {
  return (
    <section className="article">
      <div className="background-image"></div>
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
              <p>
                {body}
              </p>
            </div>
            <LinkButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;

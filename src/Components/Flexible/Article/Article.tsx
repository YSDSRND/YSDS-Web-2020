import React from 'react';
import LinkButton from '../../Global/LinkButton/LinkButton';
import WPButton from '../../../Util/Types/WPButton';
import { WPImage } from '../../../Util/Types/WPImage';
import HTMLContent from '../../Global/HTMLContent/HTMLContent';

export const ArticleACFLayout = 'article';
export type ArticleProps = {
  acf_fc_layout: typeof ArticleACFLayout,
  header: string,
  subheader: string,
  body: string,
  button: WPButton,
  backgroundImage: WPImage,
  background_color: string;
}


const Article: React.FC<ArticleProps> = ({
  header, subheader, body, button, backgroundImage, background_color
}) => (
  <section className={"article relative" + background_color}>
    <div className="lg:absolute lg:inset-0">
      <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover lg:absolute lg:h-full"
          src={backgroundImage?.sizes?.large}
          //src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
          alt=""
        />
      </div>
    </div>
    <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
      <div className="lg:col-start-2 lg:pl-8">
        <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
          <div className="text-container">
            <h1 className="heading1 mb-4">{header}</h1>
            <h3 className="heading3 text-orange">
              {subheader}
            </h3>
            <HTMLContent html={body} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Article;

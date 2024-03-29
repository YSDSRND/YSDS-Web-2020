import React from 'react';
import { WPImage } from '../../../Util/Types/WPImage';
import WPButton from '../../../Util/Types/WPButton';
import LinkButton from '../../Global/LinkButton/LinkButton';
import HTMLContent from '../../Global/HTMLContent/HTMLContent';

export const TextOnImageACFLayout = 'text_on_image';
export type TextOnImageProps = {
  acf_fc_layout: typeof TextOnImageACFLayout;
  backgroundImage: WPImage;
  header: string;
  body: string;
  button: WPButton;
  background_color:string;
};

const TextOnImage: React.FC<TextOnImageProps> = ({
  backgroundImage,
  header,
  body,
  button,
  background_color
}) => (
  <section className={"text-on-image " + background_color}>
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImage && backgroundImage.sizes && backgroundImage.sizes.large ? backgroundImage.sizes.large : ''})` }} />
    <div className="main">
      <div className="triangle" />
      <div className="main-inner">
        <div className="text-container">
          <h2>{header}</h2>
          <div className="content">
            <HTMLContent html={body} />
          </div>
          <LinkButton {...button} />
        </div>
      </div>
    </div>
  </section>
);

export default TextOnImage;

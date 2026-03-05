import React from 'react';
import { WPImage } from '../../../Util/Types/WPImage';
import HTMLContent from '../../Global/HTMLContent/HTMLContent';

export const DiagonalImageACFLayout = 'diagonal_image';
export type DiagonalImageProps = {
  acf_fc_layout: typeof DiagonalImageACFLayout;
  header: string;
  body: string;
  image: WPImage;
};

const DiagonalImage: React.FC<DiagonalImageProps> = ({
  header,
  body,
  image,
}) => (
  <section className="diagonal-image">
    <div
      className="diagonal-image__bg"
      style={{
        backgroundImage: `url(${image?.sizes?.large || image?.url || ''})`,
      }}
    />
    <div className="diagonal-image__overlay" />
    <div className="diagonal-image__content">
      <h2>{header}</h2>
      <div className="diagonal-image__body">
        <HTMLContent html={body} />
      </div>
    </div>
  </section>
);

export default DiagonalImage;

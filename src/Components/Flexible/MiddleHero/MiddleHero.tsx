import React from 'react';
import LinkButton from '../../Global/LinkButton/LinkButton';
import { WPImage } from '../../../Util/Types/WPImage';
import WPButton from '../../../Util/Types/WPButton';

export const MiddleHeroACFLayout = 'middle_hero';
export type MiddleHeroProps = {
    acf_fc_layout: typeof MiddleHeroACFLayout,
    centered?: boolean,
    header: string,
    subheader: string,
    backgroundImage: WPImage,
    button: WPButton,
    background: string
    full_width_image?: WPImage,
}

const Hero: React.FC<MiddleHeroProps> = ({
  header, subheader, centered, backgroundImage, button, background, full_width_image
}) => (
  <>

    <section className={`hero-centered middle-hero ${background}`}>
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage && backgroundImage.sizes && backgroundImage.sizes.large ? backgroundImage.sizes.large : ''})` }} />
      <div className="main">
        <div className="main-inner">
          <div className="text-container">
            <h2>
              {header}
            </h2>
            <div className="line three-col" />
            <div dangerouslySetInnerHTML={{ __html: subheader }} />

            <LinkButton {...button} />

          </div>
        </div>
          { full_width_image
              ? <div className="full-width-image">
                  <img src={full_width_image.sizes && full_width_image.sizes.large ? full_width_image.sizes.large : ''} alt={full_width_image.alt} />
                </div>
              : null
          }
      </div>
    </section>
  </>
);

export default Hero;

import React from 'react';
import LinkButton from '../../Global/LinkButton/LinkButton';
import { WPImage } from '../../../Util/Types/WPImage';
import WPButton from '../../../Util/Types/WPButton';

export const MiddleHeroACFLayout = "middle_hero";
export type MiddleHeroProps = {
    acf_fc_layout: typeof MiddleHeroACFLayout,
    centered?: boolean,
    header: string,
    subheader: string,
    backgroundImage: WPImage,
    button: WPButton,
    background: string
}

const Hero: React.FC<MiddleHeroProps> = ({header, subheader, centered, backgroundImage, button, background}) => {
    return (
        <>

        <section className={'hero-centered middle-hero ' + background}>
            <div className="background-image" style={{backgroundImage: `url(${backgroundImage && backgroundImage.sizes && backgroundImage.sizes.large ? backgroundImage.sizes.large : ""})`}}></div>
            <div className="main">
                <div className="main-inner">
                    <div className="text-container">
                        <h2>
                            {header}
                        </h2>
                        <div className="line three-col"></div>
                        <h3 dangerouslySetInnerHTML={{__html: subheader}}></h3>
                        
                            <LinkButton {...button} /> 

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero;
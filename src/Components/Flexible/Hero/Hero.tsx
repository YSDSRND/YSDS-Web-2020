import React from 'react';
import LinkButton from '../../Global/LinkButton/LinkButton';
import { WPImage } from '../../../Util/Types/WPImage';
import WPButton from '../../../Util/Types/WPButton';

export const HeroACFLayout = "hero";
export type HeroProps = {
    acf_fc_layout: typeof HeroACFLayout,
    centered?: boolean,
    header: string,
    subheader: string,
    backgroundImage: WPImage,
    button: WPButton,
}

const Hero: React.FC<HeroProps> = ({header, subheader, centered, backgroundImage, button}) => {
    return (
        <>

        <section className={'hero-centered middle-hero background'}>
            <div className="background-image" style={{backgroundImage: `url(${backgroundImage && backgroundImage.sizes && backgroundImage.sizes.large ? backgroundImage.sizes.large : ""})`}}></div>
            <div className="main">
                <div className="main-inner">
                    <div className="text-container">
                        <h2>
                            {header}
                        </h2>
                        <div className="line three-col"></div>
                        <h3>{subheader}</h3>
                        
                            <LinkButton {...button} /> 

                    </div>
                </div>
            </div>
        </section>

        <section className={'check-list'}>
            <div className="main">
                <div className="main-inner">
                    <h2>This is our checklist</h2>
                    <div className="flex-container">
                        <div className="bullet">
                            <div className="check-mark"></div>
                            <div className="text-container">
                                <h3>Bullet nr 1</h3>
                                <p>Text about this bullet is possible to write here.</p>
                            </div>
                        </div>
                        <div className="bullet">
                            <div className="check-mark"></div>
                            <div className="text-container">
                                <h3>Bullet nr 2</h3>
                                <p>Text about this bullet is possible to write here. Text about this bullet is possible to write here.</p>
                            </div>
                        </div>
                        <div className="bullet">
                            <div className="check-mark"></div>
                            <div className="text-container">
                                <h3>Bullet nr 3</h3>
                            </div>
                        </div>
                        <div className="bullet">
                            <div className="check-mark"></div>
                            <div className="text-container">
                                <h3>Bullet nr 3</h3>
                                <p>Text about this bullet is possible to write here.</p>
                            </div>
                        </div>
                        <div className="bullet">
                            <div className="check-mark"></div>
                            <div className="text-container">
                                <h3>Bullet nr 3</h3>
                            </div>
                        </div>
                        <div className="bullet">
                            <div className="check-mark"></div>
                            <div className="text-container">
                                <h3>Bullet nr 3</h3>
                                <p>Text about this bullet is possible to write here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        </>
    )
}

export default Hero;
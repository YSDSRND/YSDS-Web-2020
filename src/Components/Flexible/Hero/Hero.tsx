import React, {useRef} from 'react';
import LinkButton from '../../Global/LinkButton/LinkButton';
import { WPImage } from '../../../Util/Types/WPImage';
import WPButton from '../../../Util/Types/WPButton';
import {animateScroll} from "react-scroll/modules";

export const HeroACFLayout = 'hero';
export type HeroProps = {
    acf_fc_layout: typeof HeroACFLayout,
    centered?: boolean,
    header: string,
    subheader: string,
    backgroundImage: WPImage,
    button: WPButton,
    background_color:string;
    arrow:string;
}

const Hero: React.FC<HeroProps> = ({
  header, subheader, centered, backgroundImage, button, background_color, arrow
}) => {

    const ref = useRef<HTMLDivElement>(null);

    const onClick = () => {
        if ( ref.current ) {
            animateScroll.scrollTo( ref.current.scrollHeight );
        }
    }


    return <section ref={ref} className={(centered ? 'hero-centered' : 'hero') + ' ' + background_color + ' ' + arrow}>
        <div className="background-image"
             style={{backgroundImage: `url(${backgroundImage && backgroundImage.sizes && backgroundImage.sizes.large ? backgroundImage.sizes.large : ''})`}}/>
        <div className="main">
            <div className="triangle"/>
            <div className="main-inner">
                <div className="text-container">

                    <h1>
                        {header}
                    </h1>
                    <div className="line three-col"/>
                    <h2 dangerouslySetInnerHTML={{__html: subheader}}/>

                    <LinkButton {...button} />

                </div>
                <button onClick={onClick} className="bouncing-arrow"></button>
            </div>
        </div>
    </section>
};

export default Hero;

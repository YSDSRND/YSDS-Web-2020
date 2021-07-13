import React, { useRef } from 'react';
import LinkButton from '../../Global/LinkButton/LinkButton';
import { WPImage } from '../../../Util/Types/WPImage';
import WPButton from '../../../Util/Types/WPButton';
import { animateScroll } from "react-scroll/modules";

export const HeroACFLayout = 'hero';
export type HeroProps = {
    acf_fc_layout: typeof HeroACFLayout,
    centered?: boolean,
    header: string,
    logoImage?: WPImage,
    subheader: string,
    backgroundImage: WPImage,
    button: WPButton,
    background_color: string;
    arrow: string;
}

const Hero: React.FC<HeroProps> = ({
    header, subheader, centered, backgroundImage, button, background_color, arrow, logoImage
}) => {

    const ref = useRef<HTMLDivElement>(null);

    const onClick = () => {
        if (ref.current) {
            animateScroll.scrollTo(ref.current.scrollHeight);
        }
    }

    const headerWords = header.split(" ")

    return <section ref={ref} className="hero">
        <div className="hero-image" style={{ backgroundImage: `url(${backgroundImage && backgroundImage.sizes && backgroundImage.sizes.large ? backgroundImage.sizes.large : ''})` }} />
        <div className="content container mx-auto lg:grid lg:grid-cols-2 pb-8">
            <div className="title">
                <h1>
                    {headerWords.map((word: string, index: number) => {
                        return <span key={index}>{word}&nbsp;</span>
                    })}
                </h1>
            </div>
            <div className="text-container">
                <p dangerouslySetInnerHTML={{ __html: subheader }} />
                <LinkButton {...button} />
            </div>
        </div>
    </section>
};

export default Hero;

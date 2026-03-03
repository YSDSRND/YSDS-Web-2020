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
    use_large_logo?: boolean,
    subheader: string,
    backgroundImage: WPImage,
    button: WPButton,
    background_color: string;
    arrow: string;
}

const Hero: React.FC<HeroProps> = ({
    header, subheader, centered, backgroundImage, button, background_color, arrow, logoImage, use_large_logo
}) => {

    const ref = useRef<HTMLDivElement>(null);

    const onClick = () => {
        if (ref.current) {
            animateScroll.scrollTo(ref.current.scrollHeight);
        }
    }

    const headerWords = header ? header.split(" ") : []

    return <section ref={ref} className="hero">
        <div className="hero-image" style={{ backgroundImage: `url(${backgroundImage && backgroundImage.sizes && backgroundImage.sizes.large ? backgroundImage.sizes.large : ''})` }} />
        <div className="content container mx-auto lg:grid lg:grid-cols-2 pb-8">
            <div className={`title${use_large_logo && logoImage ? ' self-end' : ''}`}>
                {use_large_logo && logoImage ? (
                    <img
                        src={logoImage.sizes?.large || logoImage.url}
                        alt={logoImage.alt || ''}
                        className="hero-logo"
                        style={{ maxWidth: '260px', width: 'auto', height: 'auto' }}
                    />
                ) : (
                    <h1>
                        {headerWords.map((word: string, index: number) => {
                            return <span key={index}>{word} </span>
                        })}
                    </h1>
                )}
            </div>
            <div className="text-container">
                <p dangerouslySetInnerHTML={{ __html: subheader }} />
                <LinkButton {...button} />
            </div>
        </div>
    </section>
};

export default Hero;

import React, { useRef } from 'react';
import LinkButton from '../../Global/LinkButton/LinkButton';
import { WPImage } from '../../../Util/Types/WPImage';
import WPButton from '../../../Util/Types/WPButton';
import { animateScroll } from "react-scroll/modules";
import { YsdsBrand, YsdsBrandLogo, YsdsBrandLogoPink } from '../../../types';

export const HeroACFLayout = 'hero';
export type HeroProps = {
    acf_fc_layout: typeof HeroACFLayout,
    centered?: boolean,
    header: string,
    logoImage?: WPImage,
    use_large_logo?: boolean,
    use_predefined_logo?: boolean,
    predefined_logo?: string,
    subheader: string,
    backgroundImage: WPImage,
    button: WPButton,
    background_color: string;
    arrow: string;
}

const Hero: React.FC<HeroProps> = ({
    header, subheader, centered, backgroundImage, button, background_color, arrow, logoImage, use_large_logo, use_predefined_logo, predefined_logo
}) => {

    const ref = useRef<HTMLDivElement>(null);

    const onClick = () => {
        if (ref.current) {
            animateScroll.scrollTo(ref.current.scrollHeight);
        }
    }

    const headerWords = header ? header.split(" ") : []

    const hasBackgroundImage = !!(backgroundImage && backgroundImage.sizes && backgroundImage.sizes.large);

    const resolvedLogoSrc = use_large_logo
        ? (use_predefined_logo && predefined_logo
            ? (YsdsBrandLogoPink[predefined_logo as YsdsBrand] ?? YsdsBrandLogo[predefined_logo as YsdsBrand])
            : (logoImage ? (logoImage.sizes?.large || logoImage.url) : null))
        : null;

    return <section ref={ref} className={`hero${resolvedLogoSrc ? ' logo-only' : ''}${!hasBackgroundImage ? ' no-image' : ''}`}>
        <div className="hero-image" style={{ backgroundImage: hasBackgroundImage ? `url(${backgroundImage.sizes.large})` : undefined }} />
        <div className="content container mx-auto lg:grid lg:grid-cols-2 pb-8">
            <div className={`title${resolvedLogoSrc ? ' self-end' : ''}`}>
                {resolvedLogoSrc ? (
                    <img
                        src={resolvedLogoSrc}
                        alt={use_predefined_logo ? (predefined_logo || '') : (logoImage?.alt || '')}
                        className="hero-logo"
                        style={{ maxWidth: '420px', width: 'auto', height: 'auto' }}
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

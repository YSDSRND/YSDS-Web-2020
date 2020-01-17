import React from 'react';
import LinkButton from '../../Global/LinkButton/LinkButton';

type HeroTypes = {
    centered?: boolean,
    header: string,
    subheader: string,
}

const Hero: React.FC<HeroTypes> = ({header, subheader, centered}) => {
    return (
        <section className={centered ? 'hero-centered' : 'hero'}>
            <div className="background-image"></div>
            <div className="main">
                <div className="triangle"></div>
                <div className="main-inner">
                    <div className="text-container">
                        <h1>
                            {header}
                        </h1>
                        <div className="line three-col"></div>
                        <h2>{subheader}</h2>
                        <LinkButton />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
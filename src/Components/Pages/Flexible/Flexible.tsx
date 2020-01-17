import React from 'react';
import Hero, { HeroProps, HeroACFLayout } from '../../Flexible/Hero/Hero';
import Offices, { OfficesProps, OfficesACFLayout } from '../../Flexible/Offices/Offices';
import Agents, { AgentsProps, AgentsACFLayout } from '../../Flexible/Agents/Agents';
import Numbers, { NumbersProps, NumbersACFLayout } from '../../Flexible/Numbers/Numbers';
import Cards, { CardsProps, CardsACFLayout } from '../../Flexible/Cards/Cards';
import CardsAlternate, { CardsAlternateProps, CardsAlternateACFLayout } from '../../Flexible/CardsAlternate/CardsAlternate';
import ContactFormImage, { ContactFormImageProps, ContactFormImageACFLayout } from '../../Flexible/ContactFormImage/ContactFormImage';
import TextAndImage, {TextAndImageProps, TextAndImageACFLayout} from '../../Flexible/TextAndImage';
import Cases, { CasesProps, CasesACFLayout } from '../../Flexible/Cases/Cases';
import BlackDiagonal, { BlackDiagonalProps, BlackDiagonalACFLayout } from '../../Flexible/BlackDiagonal/BlackDiagonal';
import ContactFormColor, { ContactFormColorProps, ContactFormColorACFLayout } from '../../Flexible/ContactFormColor/ContactFormColor';
import TextOnImage, { TextOnImageProps, TextOnImageACFLayout } from '../../Flexible/TextOnImage/TextOnImage';
import TextOnWhite, { TextOnWhiteProps, TextOnWhiteACFLayout } from '../../Flexible/TextOnWhite/TextOnWhite';

type FlexibleProps = {
    flexible: Array<FlexibleLayout>
}

type FlexibleLayout = HeroProps 
    | OfficesProps 
    | AgentsProps 
    | NumbersProps
    | CardsProps
    | CardsAlternateProps
    | ContactFormImageProps
    | TextAndImageProps
    | CasesProps
    | BlackDiagonalProps
    | ContactFormColorProps
    | TextOnImageProps
    | TextOnWhiteProps


const Flexible : React.FC<FlexibleProps> = ({flexible}) => {
    return (
        <main>
            {
                flexible.map(section => {
                    return renderFlexibleSection(section);
                })
            }
        </main>
    )
}

export default Flexible;



function renderFlexibleSection(layout : FlexibleLayout) {
    switch(layout.acf_fc_layout) {
        case HeroACFLayout:
            return <Hero {...layout} />
        case OfficesACFLayout:
            return <Offices {...layout} />
        case AgentsACFLayout:
            return <Agents {...layout} />
        case NumbersACFLayout: 
            return <Numbers {...layout} />
        case CardsACFLayout:
            return <Cards {...layout} />
        case CardsAlternateACFLayout: 
            return <CardsAlternate {...layout} />
        case ContactFormImageACFLayout:
            return <ContactFormImage {...layout} />
        case TextAndImageACFLayout:
            return <TextAndImage {...layout} />
        case CasesACFLayout:
            return <Cases {...layout} />
        case BlackDiagonalACFLayout:
            return <BlackDiagonal {...layout} />
        case ContactFormColorACFLayout:
            return <ContactFormColor {...layout} />
        case TextOnImageACFLayout:
            return <TextOnImage {...layout} />
        case TextOnWhiteACFLayout:
            return <TextOnWhite {...layout} />
        default: {
            return <h1>Component not found</h1>
        }
    }
}
import React from 'react';
import Hero, { HeroProps, HeroACFLayout } from '../../Flexible/Hero/Hero';
import Offices, { OfficesProps, OfficesACFLayout } from '../../Flexible/Offices/Offices';
import Agents, { AgentsProps, AgentsACFLayout } from '../../Flexible/Agents/Agents';
import Numbers, { NumbersProps, NumbersACFLayout } from '../../Flexible/Numbers/Numbers';
import Cards, { CardsProps, CardsACFLayout } from '../../Flexible/Cards/Cards';
import CardsAlternate, { CardsAlternateProps, CardsAlternateACFLayout } from '../../Flexible/CardsAlternate/CardsAlternate';
import ContactFormImage, { ContactFormImageProps, ContactFormImageACFLayout } from '../../Flexible/ContactFormImage/ContactFormImage';
import TextAndImage, {TextAndImageProps, TextAndImageACFLayout} from '../../Flexible/TextAndImage/TextAndImage';
import Cases, { CasesProps, CasesACFLayout } from '../../Flexible/Cases/Cases';
import BlackDiagonal, { BlackDiagonalProps, BlackDiagonalACFLayout } from '../../Flexible/BlackDiagonal/BlackDiagonal';
import ContactFormColor, { ContactFormColorProps, ContactFormColorACFLayout } from '../../Flexible/ContactFormColor/ContactFormColor';
import TextOnImage, { TextOnImageProps, TextOnImageACFLayout } from '../../Flexible/TextOnImage/TextOnImage';
import TextOnWhite, { TextOnWhiteProps, TextOnWhiteACFLayout } from '../../Flexible/TextOnWhite/TextOnWhite';
import Article, { ArticleProps, ArticleACFLayout } from '../../Flexible/Article/Article';
import Tracker, {TrackerProps, TrackerAcfLayout} from '../../Flexible/Tracker/Tracker'
import OldHero, { OldHeroACFLayout, OldHeroProps } from '../../Flexible/OldHero/OldHero'

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
    | ArticleProps
    | TrackerProps
    | OldHeroProps


const Flexible : React.FC<FlexibleProps> = ({flexible}) => {
    return (
        <main>
            {
                flexible.map((section,i) => {
                    return renderFlexibleSection(section, i);
                })
            }
        </main>
    )
}

export default Flexible;



function renderFlexibleSection(layout : FlexibleLayout, i:any) {
    switch(layout.acf_fc_layout) {
        case TrackerAcfLayout:
            return <Tracker {...layout} key={i}/>
        case OldHeroACFLayout:
            return <OldHero {...layout} key={i}/>
        case HeroACFLayout:
            return <Hero {...layout} key={i}/>
        case OfficesACFLayout:
            return <Offices {...layout} key={i}/>
        case AgentsACFLayout:
            return <Agents {...layout} key={i}/>
        case NumbersACFLayout: 
            return <Numbers {...layout} key={i}/>
        case CardsACFLayout:
            return <Cards {...layout} key={i}/>
        case CardsAlternateACFLayout: 
            return <CardsAlternate {...layout} key={i}/>
        case ContactFormImageACFLayout:
            return <ContactFormImage {...layout} key={i}/>
        case TextAndImageACFLayout:
            return <TextAndImage {...layout} key={i}/>
        case CasesACFLayout:
            return <Cases {...layout} key={i}/>
        case BlackDiagonalACFLayout:
            return <BlackDiagonal {...layout} key={i} />
        case ContactFormColorACFLayout:
            return <ContactFormColor {...layout} key={i}/>
        case TextOnImageACFLayout:
            return <TextOnImage {...layout} key={i}/>
        case TextOnWhiteACFLayout:
            return <TextOnWhite {...layout} key={i}/>
        case ArticleACFLayout:
            return <Article {...layout} key={i}/>
        default: {
            return <h1 key={i}>Component not found</h1>
        }
    }
}
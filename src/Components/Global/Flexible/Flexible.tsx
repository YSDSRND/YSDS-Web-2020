import React from 'react';
import Hero, { HeroACFLayout, HeroProps } from '../../Flexible/Hero/Hero';
import Offices, { OfficesACFLayout, OfficesProps } from '../../Flexible/Offices/Offices';
import Agents, { AgentsACFLayout, AgentsProps } from '../../Flexible/Agents/Agents';
import SimpleText, { SimpleTextACFLayout, SimpleTextProps } from '../../Flexible/SimpleText/SimpleText';
import Numbers, { NumbersACFLayout, NumbersProps } from '../../Flexible/Numbers/Numbers';
import Cards, { CardsACFLayout, CardsProps } from '../../Flexible/Cards/Cards';
import CardsAlternate, {
  CardsAlternateACFLayout,
  CardsAlternateProps
} from '../../Flexible/CardsAlternate/CardsAlternate';
import ContactFormImage, {
  ContactFormImageACFLayout,
  ContactFormImageProps
} from '../../Flexible/ContactFormImage/ContactFormImage';
import TextAndImage, { TextAndImageACFLayout, TextAndImageProps } from '../../Flexible/TextAndImage/TextAndImage';
import Cases, { CasesACFLayout, CasesProps } from '../../Flexible/Cases/Cases';
import BlackDiagonal, { BlackDiagonalACFLayout, BlackDiagonalProps } from '../../Flexible/BlackDiagonal/BlackDiagonal';
import ContactFormColor, {
  ContactFormColorACFLayout,
  ContactFormColorProps
} from '../../Flexible/ContactFormColor/ContactFormColor';
import TextOnImage, { TextOnImageACFLayout, TextOnImageProps } from '../../Flexible/TextOnImage/TextOnImage';
import TextOnWhite, { TextOnWhiteACFLayout, TextOnWhiteProps } from '../../Flexible/TextOnWhite/TextOnWhite';
import Article, { ArticleACFLayout, ArticleProps } from '../../Flexible/Article/Article';
import Tracker, { TrackerAcfLayout, TrackerProps } from '../../Flexible/Tracker/Tracker';
import Bullets, { BulletACFLayout, BulletProps } from '../../Flexible/Bullets/Bullets';
import MiddleHero, { MiddleHeroACFLayout, MiddleHeroProps } from '../../Flexible/MiddleHero/MiddleHero';
import ThreeBlogPosts, {
  ThreeBlogPostsProps,
  ThreeBlogPostsPropsACFLayout
} from '../../Flexible/ThreeBlogPosts/ThreeBlogPosts';
import { NewShipNowForm, ShipNowFormLayout, ShipNowFormProps } from "../../Flexible/ShipNowForm/NewShipNowForm";
import Posts, { PostsProps, PostsACFLayout } from "../../Flexible/Posts/Posts";
import TextBoxes, { TextBoxesACFLayout, TextBoxesProps } from '../../Flexible/TextBoxes/TextBoxes';
import { AppState } from '../../../Store';
import { useSelector } from 'react-redux';

type FlexibleProps = {
  flexible: FlexibleLayout[]
}

type FlexibleLayout = HeroProps
  | OfficesProps
  | AgentsProps
  | SimpleTextProps
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
  | BulletProps
  | MiddleHeroProps
  | ThreeBlogPostsProps
  | ShipNowFormProps
  | PostsProps
  | TextBoxesProps


const Flexible: React.FC<FlexibleProps> = ({ flexible }) => {
  const currentPage = useSelector((state: AppState) => state.currentPage)
  const pageBrand = currentPage.currentPage?.acf.ysds_brand ?? currentPage.currentPage?.acf.brand_class ?? 'brandMain'
  return (
    <main className={pageBrand}>
      {
        flexible.map((section, i) => renderFlexibleSection(section, i))
      }
    </main>
  )
}

export default Flexible;


function renderFlexibleSection(layout: FlexibleLayout, i: any) {
  switch (layout.acf_fc_layout) {
    case PostsACFLayout:
      return <Posts {...layout} key={i} />;
    case ThreeBlogPostsPropsACFLayout:
      return <ThreeBlogPosts {...layout} key={i} />;
    case MiddleHeroACFLayout:
      return <MiddleHero {...layout} key={i} />;
    case TrackerAcfLayout:
      return <Tracker {...layout} key={i} />;
    case HeroACFLayout:
      return <Hero {...layout} key={i} />;
    case OfficesACFLayout:
      return <Offices {...layout} key={i} />;
    case AgentsACFLayout:
      return <Agents {...layout} key={i} />;
    case SimpleTextACFLayout:
      return <SimpleText {...layout} key={i} />;
    case NumbersACFLayout:
      return <Numbers {...layout} key={i} />;
    case CardsACFLayout:
      return <Cards {...layout} key={i} />;
    case CardsAlternateACFLayout:
      return <CardsAlternate {...layout} key={i} />;
    case ContactFormImageACFLayout:
      return <ContactFormImage {...layout} key={i} />;
    case TextAndImageACFLayout:
      return <TextAndImage {...layout} key={i} />;
    case CasesACFLayout:
      return <Cases {...layout} key={i} />;
    case BlackDiagonalACFLayout:
      return <BlackDiagonal {...layout} key={i} />;
    case ContactFormColorACFLayout:
      return <ContactFormColor {...layout} key={i} />;
    case TextOnImageACFLayout:
      return <TextOnImage {...layout} key={i} />;
    case TextOnWhiteACFLayout:
      return <TextOnWhite {...layout} key={i} />;
    case ArticleACFLayout:
      return <Article {...layout} key={i} />;
    case BulletACFLayout:
      return <Bullets {...layout} key={i} />;
    case TextBoxesACFLayout:
      return <TextBoxes {...layout} key={i} />;
    case ShipNowFormLayout:
      return <NewShipNowForm {...layout} key={i} />
    default: {
      return null;
    }
  }
}

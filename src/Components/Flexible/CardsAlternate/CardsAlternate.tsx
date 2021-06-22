import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../Store";
import Card, { CardProps } from "./Card";
import {classNames} from "../../../Util/Util";
export const CardsAlternateACFLayout = "cards_alternative";
export type CardsAlternateProps = {
  acf_fc_layout: typeof CardsAlternateACFLayout,
  header: string;
  cards: CardProps[];
  background_color:string;
  columns:string
};
const CardsAlternate: React.FC<CardsAlternateProps> = ({ header, cards, background_color, columns }) => {
  const currentPage = useSelector((state: AppState) => state.currentPage)

  const clazzes = classNames({
    'cards': true,
    [background_color]: true,
    [currentPage.currentPage?.acf.primaryColor]: currentPage.currentPage?.acf.primaryColor || false,
  })

  return (
    <section className={clazzes}>
      <div className="main">
      {
        header.length > 0 ? (
          <React.Fragment>
            <h2>{header}</h2>
          </React.Fragment>
        ) : null
      }
        

        <div className={"main-inner " + columns}>
          {cards.map((cardItem, i) => {
            return <Card key={i} {...cardItem} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CardsAlternate;

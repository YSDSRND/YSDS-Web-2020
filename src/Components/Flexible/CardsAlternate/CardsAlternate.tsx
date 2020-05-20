import React from "react";
import Card, { CardProps } from "./Card";
export const CardsAlternateACFLayout = "cards_alternative";
export type CardsAlternateProps = {
  acf_fc_layout: typeof CardsAlternateACFLayout,
  header: string;
  cards: Array<CardProps>;
};
const CardsAlternate: React.FC<CardsAlternateProps> = ({ header, cards }) => {
  return (
    <section className="cards">
      <div className="main">

        <h2>{header}</h2>
        <div className="line three-col"></div>

        <div className="main-inner">
          {cards.map(cardItem => {
            return <Card {...cardItem} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CardsAlternate;

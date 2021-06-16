import React from "react";
import Card, { CardProps } from "./Card";
export const CardsAlternateACFLayout = "cards_alternative";
export type CardsAlternateProps = {
  acf_fc_layout: typeof CardsAlternateACFLayout,
  header: string;
  cards: CardProps[];
  background_color:string;
  columns:string
};
const CardsAlternate: React.FC<CardsAlternateProps> = ({ header, cards, background_color, columns }) => {
  return (
    <section className={"cards " + background_color}>
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

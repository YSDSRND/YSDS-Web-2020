import React from 'react';
import Card, { CardProps } from './Card';

export const CardsACFLayout = 'cards';
export type CardsProps = {
  acf_fc_layout: typeof CardsACFLayout,
  cards: CardProps[],
  columns:string
}

const Cards : React.FC<CardsProps> = ({ cards, columns }) => (
  <section className="cards">
    <div className="main">
      <div className={`main-inner ${columns}`}>
        {
                cards ? cards.map((cardItem, i) => <Card {...cardItem} key={i} />) : null
              }
      </div>
    </div>
  </section>
);

export default Cards;

import React from 'react';
import Card, {CardProps} from './Card';

export const CardsACFLayout = "cards";
export type CardsProps = {
  acf_fc_layout: typeof CardsACFLayout,
  cards: Array<CardProps>
}

const Cards : React.FC<CardsProps> = ({cards}) => {
    return (
        <section className="cards">
        <div className="main">
            <div className="main-inner">
              {
                cards.map((cardItem) => {
                  return <Card {...cardItem} />
                })
              }
            </div>
        </div>
    </section>
    )
} 

export default Cards;
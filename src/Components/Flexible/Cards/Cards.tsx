import React from 'react';
import Card, {CardProps} from './Card';

export type CardsProps = {
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
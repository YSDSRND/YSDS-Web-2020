import React from 'react';

export type CardProps = {

}

const Card : React.FC = () => {
    return (
        <a className="one-card" href="#">
                <img></img>
                <div className="text-container">
                  <h3>Lifescience</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
              </a>
    )
}

export default Card;
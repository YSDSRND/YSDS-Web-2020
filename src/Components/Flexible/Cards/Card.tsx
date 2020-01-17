import React from "react";

export type CardProps = {};

const Card: React.FC = () => {
  return (
    <div className="one-card">
      <img></img>
      <h3>Lifescience</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <a className="ysds-button lines">more info</a>
    </div>
  );
};

export default Card;

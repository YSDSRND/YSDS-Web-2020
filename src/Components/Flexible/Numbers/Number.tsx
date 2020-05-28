import React from 'react';

export type NumberProps = {
  number: string;
  explanation: string;
};

const NumberComponent: React.FC<NumberProps> = (props) => (
  <div className="one-number">
    <p className="big-number">{props.number}</p>
    <p className="explanation">{props.explanation}</p>
  </div>
);

export default NumberComponent;

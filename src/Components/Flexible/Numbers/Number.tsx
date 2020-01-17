import React from "react";

export type NumberProps = {
  number: string;
  explanation: string;
};

const Number: React.FC<NumberProps> = ({ number, explanation }) => {
  return (
    <div className="one-number">
      <p className="big-number">{number}</p>
      <p className="explanation">{explanation}</p>
    </div>
  );
};

export default Number;

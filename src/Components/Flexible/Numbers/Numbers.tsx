import React from 'react';
import Number, { NumberProps } from './Number';

export const NumbersACFLayout = 'numbers';

export type NumbersProps = {
  acf_fc_layout: typeof NumbersACFLayout,
  header: string,
  numbers: NumberProps[],
  background_color:string;
}

const Numbers : React.FC<NumbersProps> = ({ header, numbers, background_color }) => (
  <section className={"numbers " + background_color}>
    <div className="main">
      <div className="main-inner">
        <div className="text-container">
          <h2>{header}</h2>
          <div className="line three-col" />
          <div className="content">
            {
                        numbers.map((numberItem, i) => <Number {...numberItem} key={i} />)
                      }
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Numbers;

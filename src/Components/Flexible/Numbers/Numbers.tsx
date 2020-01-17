import React from 'react';
import Number, {NumberProps} from './Number';

export type NumbersProps = {
  header: string,
  numbers: Array<NumberProps>
}

const Numbers : React.FC<NumbersProps> = ({header, numbers}) => {
    return (
        <section className="numbers">
        <div className="main">
            <div className="main-inner">
                <div className="text-container">
                    <h2>{header}</h2>
                    <div className="line three-col"></div>
                    <div className="content">
                      {
                        numbers.map((numberItem) => {
                          return <Number {...numberItem} />
                        })
                      }
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Numbers;
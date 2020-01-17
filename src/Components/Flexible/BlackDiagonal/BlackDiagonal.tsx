import React from "react";



const BlackDiagonal: React.FC = () => {
  return (
    <section className="black-diagonal">
      <div className="main">
        <div className="triangle"></div>
        <div className="flex-container">
          <div className="left">
            <h2>
              What<br></br>we do
            </h2>
          </div>
          <div className="image-container">
            <img></img>
          </div>
          <div className="right">
            <h2>
              What our<br></br>clients do
            </h2>
            <p>Call or email us – we take care of the rest</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlackDiagonal;

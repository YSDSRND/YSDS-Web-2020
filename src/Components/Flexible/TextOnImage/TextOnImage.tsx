import React from 'react';

export const TextOnImageACFLayout = "text_on_image";
export type TextOnImageProps = {
    acf_fc_layout: typeof TextOnImageACFLayout,
}


const TextOnImage : React.FC<TextOnImageProps> = () => {
    return (
        <section className="text-on-image">
    <div className="background-image"></div>
        <div className="main">
          <div className="triangle"></div>
            <div className="main-inner">
                <div className="text-container">
                    <h2>Titel</h2>
                    <div className="line three-col"></div>
                    <div className="content">
                      <p>
                      <h4>A-Z shipment – With you all the way</h4>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      <br></br><br></br>
                      <h4>Client centric and goes the extra mile”</h4>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      <br></br><br></br>
                      <h4>Transparent/visibility</h4>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      <br></br><br></br>
                      <h4>Always there 24/7</h4>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                    <a className="ysds-button">Read more</a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default TextOnImage;
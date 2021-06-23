import React from 'react';
import { WPImage } from '../../../Util/Types/WPImage';
import WPButton  from '../../../Util/Types/WPButton';

import LinkButton from '../../Global/LinkButton/LinkButton';
import { classNames } from '../ShipNowForm/ConfigurableField';

export const TextBoxesACFLayout = 'text_boxes';
export type TextBoxesProps = {
  text_box: [{ header: string, text: string, background_image: WPImage, button:WPButton }],
  header: string,
  columns:string,
  background_color:string,
  button: WPButton,
  acf_fc_layout: 'text_boxes'
};

const TextBoxes: React.FC<TextBoxesProps> = ({ text_box, header, columns, background_color, button}) => (
  <section className={"text-boxes "}>
    <div className="main">
      <div className="main-inner">
        <h2>{header}</h2>
        <div className={`flex-container ${columns}`}>
          {
            text_box.map((textBox, i) => {
              const textBoxClassNames = classNames({
                'text-box': true,
                'inverted': textBox.background_image ? true : false,
              })
              return <div className={textBoxClassNames} key={i}>
                <div className="background-image" style={{backgroundImage: `url(${textBox.background_image && textBox.background_image.sizes && textBox.background_image.sizes.large ? textBox.background_image.sizes.large : ''})`}}/>
                <div className="text-container">
                  <h3>{textBox.header}</h3>
                  <p>{textBox.text}</p>
                  <LinkButton {...textBox.button} />
                </div>
              </div>
            })
          }
        </div>
        <LinkButton {...button} />

      </div>
    </div>
  </section>
);

export default TextBoxes;

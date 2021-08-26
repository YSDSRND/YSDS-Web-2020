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

const TextBoxes: React.FC<TextBoxesProps> = ({ text_box, header, columns, background_color, button}) => {
const colsAsInt = columns == 'four' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
return  <section className={"text-boxes py-16"}>
    <div className="main">
      <div className="container mx-auto">
        <h2 className="mb-8 mx-8 sm:mx-0">{header}</h2>
        <div className={`grid grid-cols-1 ${colsAsInt} lg:gap-4`}>
          {
            text_box.map((textBox, i) => {
              const textBoxClassNames = classNames({
                'text-box': true,
                'inverted': textBox.background_image ? true : false,
                'mb-8' : true,
              })
              return <div className={textBoxClassNames} key={i}>
                <div className="background-image" />
                <div className="text-container p-8">
                  <h3 className="lg:h-24">{textBox.header}</h3>
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
}

export default TextBoxes;

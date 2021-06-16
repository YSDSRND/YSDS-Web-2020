import React from 'react';
import HTMLContent from '../../Global/HTMLContent/HTMLContent';


export const SimpleTextACFLayout = 'simple_text';
export type SimpleTextProps = {
  acf_fc_layout: typeof SimpleTextACFLayout,
  header: string,
  body: string,
  background_color:string;
  title_position:string;
  columns:string;
}

const SimpleText : React.FC<SimpleTextProps> = ({ header, body, background_color, title_position, columns }) => (
  <section className={"simple-text " + background_color + ' ' + columns + ' ' + title_position}>
    <div className="main">
      <h2>{header}</h2>
      <div className="main-inner">
      <HTMLContent html={body} />
      </div>
    </div>
  </section>

);

export default SimpleText;

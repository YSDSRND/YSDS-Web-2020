import React from 'react';
import HTMLContent from '../../Global/HTMLContent/HTMLContent';

export type CaseProps = {
  header: string;
  body: string;
  slug: string
  media: any;
};

const Case: React.FC<CaseProps> = ({ header, body, slug, media }) => {
    return <div className="one-card">
        <img src={media &&  media.large ? media.large : ''} alt={''} />    <h3>{header}</h3>
        <HTMLContent html={body} />
      </div>
};

export default Case;

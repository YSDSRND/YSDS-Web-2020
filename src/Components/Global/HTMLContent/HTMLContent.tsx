import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export type HTMLContent = {
  html: string;
};
const HTMLContent: React.FC<HTMLContent> = ({ html }) => <>{ReactHtmlParser(html)}</>;

export default HTMLContent;

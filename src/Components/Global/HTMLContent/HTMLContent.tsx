import React from "react";
import ReactHtmlParser from "react-html-parser";

export type HTMLContent = {
  html: string;
};
const HTMLContent: React.FC<HTMLContent> = ({ html }) => {
  return <div>{ReactHtmlParser(html)}</div>;
};

export default HTMLContent;

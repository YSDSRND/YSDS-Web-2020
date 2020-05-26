import React from "react";
import { WPImage } from "../../../Util/Types/WPImage";
import HTMLContent from "../../Global/HTMLContent/HTMLContent";

export const TextOnWhiteACFLayout = "text_on_white";
export type TextOnWhiteProps = {
  acf_fc_layout: typeof TextOnWhiteACFLayout;
  background_image: WPImage;
  header: string;
  text_or_lists: "text" | "lists";
  body?: string;
  lists?: {
    title: string;
    content: string;
  }[];
};

const TextOnWhite: React.FC<TextOnWhiteProps> = ({
    background_image,
  header,
  text_or_lists,
  body,
  lists
}) => {
  return (
    <section className="text-on-white editor">
      <div className="main">
        <div
          className="bg-image"
          style={{ backgroundImage: `url(${background_image && background_image.sizes && background_image.sizes.large ? background_image.sizes.large : ""})` }}
        />
        <div className="triangle"/>
        <div className="main-inner">
          <div className="text-container">
            <h2>{header}</h2>
            <div className="line six-col"/>
            <div className="content">
              {text_or_lists === "text" && body && <HTMLContent html={body} />}
              {text_or_lists === "lists" &&
                lists &&
                lists.map((l,key) => {
                  return (
                    <div className="one-list" key={key}>
                      <h4>{l.title}</h4>
                      <HTMLContent html={l.content} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextOnWhite;

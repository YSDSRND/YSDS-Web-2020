import React from "react";
import { WPImage } from "../../../Util/Types/WPImage";
import HTMLContent from "../../Global/HTMLContent/HTMLContent";

export type OfficeProps = {
  image: WPImage;
  office_title: string;
  address: string;
  email: string;
  phone: string;
  linkable_phone: string;
};

const Office: React.FC<OfficeProps> = ({
  image,
  office_title,
  address,
  email,
  phone,
  linkable_phone
}) => {
  return (
    <div className="one-card">
      <img src={image.sizes.large} alt={image.alt} />
      <div className="text-container">
        <h3>{office_title}</h3>
        <p>
          <HTMLContent html={address} />
          <a href={`mailto:${email}`}>{email}</a>
          <br></br>
          <a href={`tel:${linkable_phone}`}>{phone}</a>
        </p>
      </div>
    </div>
  );
};

export default Office;

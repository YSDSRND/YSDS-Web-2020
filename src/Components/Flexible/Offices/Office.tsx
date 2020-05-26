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
      <img src={image && image.sizes && image.sizes.large ? image.sizes.large : ""} alt={image ? image.alt :""} />
      <div className="text-container">
        <h3>{office_title}</h3>
        <div>
          <HTMLContent html={address} />
          <a href={`mailto:${email}`}>{email}</a>
          <br/>
          <a href={`tel:${linkable_phone}`}>{phone}</a>
        </div>
      </div>
    </div>
  );
};

export default Office;

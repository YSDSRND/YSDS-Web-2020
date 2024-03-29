import React from 'react';
import ContactForm from '../../Global/ContactForm/ContactForm';
import { WPImage } from '../../../Util/Types/WPImage';

export const ContactFormImageACFLayout = 'contact_on_image';
export type ContactFormImageProps = {
  acf_fc_layout: typeof ContactFormImageACFLayout;
  background_image: WPImage;
  header: string;
  body: string;
  form_header: string;
  background_color:string;
};

const ContactFormImage: React.FC<ContactFormImageProps> = ({
  background_image,
  header,
  body,
  form_header,
  background_color
}) => (
  <section className={"contact-on-image " + background_color}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${background_image && background_image.sizes && background_image.sizes.large ? background_image.sizes.large : ''})` }}
    />
    <div className="main">
      <div className="triangle" />
      <div className="main-inner">
        <div className="text-container">
          <h2>{header}</h2>
          <p>{body}</p>
          <div className="content">
            <div className="form-container">
              <h3>{form_header}</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactFormImage;

import React from 'react';
import ContactForm from '../../Global/ContactForm/ContactForm';
import WPButton from '../../../Util/Types/WPButton';
import LinkButton from '../../Global/LinkButton/LinkButton';

export const ContactFormColorACFLayout = 'contact';
export type ContactFormColorProps = {
  acf_fc_layout: typeof ContactFormColorACFLayout;
  backgroundColor: 'white' | 'blue';
  header: string;
  subheader: string;
  prefer_contacting_us_title: string;
  prefer_contacting_us_body: string;
  button: WPButton;
};

const ContactFormColor: React.FC<ContactFormColorProps> = ({
  backgroundColor,
  header,
  subheader,
  prefer_contacting_us_title,
  prefer_contacting_us_body,
  button,
}) => (
  <section className={`contact-form ${backgroundColor}`}>
    <div className="main">
      <div className="main-inner">
        <div className="text-container">
          <h2>{header}</h2>
          <div className="line five-col" />
          <div className="content">
            <p>{subheader}</p>
          </div>
        </div>
      </div>
      <div className="form-container">
        <div className="left">
          <ContactForm />
        </div>
        <div className="right">
          <h3>{prefer_contacting_us_title}</h3>
          <div className="line" />
          <p>{prefer_contacting_us_body}</p>
          <LinkButton {...button} />
        </div>
      </div>
    </div>
  </section>
);

export default ContactFormColor;

import React from 'react';
import ContactForm from '../../Global/ContactForm/ContactForm';

const ContactFormWhite : React.FC = () => {
    return (
        <section className="contact-form white">
        <div className="main">
            <div className="main-inner">
                <div className="text-container">
                    <h2>Lets start a conversation</h2>
                    <div className="line five-col"></div>
                    <div className="content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
            </div>
            <div className="form-container">
              <div className="left">
                <ContactForm />
              </div>
              <div className="right">
                <h3>Prefer calling?</h3>
                <div className="line"></div>
                <p>Some text about going to the contact page. Some text about going to the contact page.</p>
                <a className="ysds-button lines white">Contact</a>
              </div>
            </div>
        </div>
    </section>
    )
}

export default ContactFormWhite;
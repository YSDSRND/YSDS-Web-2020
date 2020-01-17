import React from 'react';
import ContactForm from '../../Global/ContactForm/ContactForm';

const ContactFormImage : React.FC = () => {
    return (
    <section className="contact-on-image">
    <div className="background-image"></div>
        <div className="main">
          <div className="triangle"></div>
            <div className="main-inner">
                <div className="text-container">
                    <h2>Get in touch with us</h2>
                    <div className="line three-col"></div>
                    <p>If you are close to our offices, you are more than welcome to drop by. If you happen to be further away, don't worry, our global network of agents and partners will make sure your needs are also met.</p>
                    <div className="content">
                      <div className="form-container">
                        <h3>Write us an email</h3>
                          <ContactForm />
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ContactFormImage;
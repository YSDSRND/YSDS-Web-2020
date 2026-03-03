import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import artLogo from '../../../assets/images/YSDS_art.svg';

const ArtFooter: React.FC = () => {
  return (
    <section className="art-footer">
      <div className="art-footer-inner">
        <div className="art-footer-logo">
          <RouterLink to="/art" onClick={() => { window.scrollTo(0, 0) }}>
            <img src={artLogo} alt="YSDS Art" />
          </RouterLink>
        </div>
        <div className="art-footer-info">
          <div className="art-footer-address">
            <p>
              YSDS ART<br />
              Industry City<br />
              253 36th Street<br />
              Bldg. 3, 4th Floor, Suite B443<br />
              Brooklyn NY 11232<br />
              Direct: +1 (929) 581 0786<br />
              Office: +1 (929) 581 1231
            </p>
          </div>
          <div className="art-footer-map">
            <iframe
              width="450"
              height="250"
              frameBorder="0"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=253+36th+St,Brooklyn,NY+11232,USA"
              allowFullScreen
              title="YSDS Art Brooklyn headquarters"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtFooter;
